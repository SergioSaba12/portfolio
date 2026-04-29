document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setNavOpen = (isOpen, { preserveScroll = true } = {}) => {
  const scrollPosition = window.scrollY;

  document.body.classList.toggle("nav-open", isOpen);

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  }

  if (preserveScroll) {
    const restoreScroll = () => window.scrollTo(0, scrollPosition);
    window.requestAnimationFrame(restoreScroll);
    window.setTimeout(restoreScroll, 80);
  }
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    setNavOpen(!document.body.classList.contains("nav-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false, { preserveScroll: false }));
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("nav-open")) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (siteNav.contains(target) || navToggle.contains(target)) {
      return;
    }

    setNavOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1040) {
      setNavOpen(false);
    }
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.setProperty("--delay", `${entry.target.dataset.delay ?? 0}ms`);
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0.12, 0.25, 0.5],
    },
  );

  sections.forEach((section) => activeObserver.observe(section));
}

const carouselTracks = [...document.querySelectorAll("[data-carousel]")];

const scrollCarousel = (track, direction = 1) => {
  const firstCard = track.querySelector(":scope > *");
  const cardWidth = firstCard instanceof HTMLElement ? firstCard.getBoundingClientRect().width : 320;
  const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
  track.scrollBy({
    left: direction * (cardWidth + gap),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

carouselTracks.forEach((track) => {
  const id = track.dataset.carousel;
  const previousButton = document.querySelector(`[data-carousel-prev="${id}"]`);
  const nextButton = document.querySelector(`[data-carousel-next="${id}"]`);

  previousButton?.addEventListener("click", () => scrollCarousel(track, -1));
  nextButton?.addEventListener("click", () => scrollCarousel(track, 1));

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollCarousel(track, -1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollCarousel(track, 1);
    }
  });
});
