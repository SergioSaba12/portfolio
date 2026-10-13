document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setNavOpen = (isOpen) => {
  document.body.classList.toggle("nav-open", isOpen);

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  }

};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    setNavOpen(!document.body.classList.contains("nav-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
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
    if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
      setNavOpen(false);
      navToggle.focus({ preventScroll: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
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

  revealItems.forEach((item) => {
    if (!prefersReducedMotion && item.getBoundingClientRect().top > window.innerHeight) {
      item.classList.add("will-reveal");
    }
    revealObserver.observe(item);
  });
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
        const id = visible.target.id === "more-work" ? "work" : visible.target.id;
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: 0,
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

  for (const [button, icon] of [[previousButton, "arrow-left"], [nextButton, "arrow-right"]]) {
    if (!button) continue;
    const symbol = document.createElement("i");
    symbol.dataset.lucide = icon;
    symbol.setAttribute("aria-hidden", "true");
    button.replaceChildren(symbol);
    button.title = button.getAttribute("aria-label");
  }

  const updateButtons = () => {
    if (previousButton) previousButton.disabled = track.scrollLeft <= 2;
    if (nextButton) nextButton.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };
  track.addEventListener("scroll", updateButtons, { passive: true });
  new ResizeObserver(updateButtons).observe(track);
  updateButtons();

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

const photoViewer = document.querySelector(".photo-viewer");
const galleryImages = [...document.querySelectorAll(".gallery-card img")];

if (photoViewer && galleryImages.length && typeof photoViewer.showModal === "function") {
  const viewerImage = photoViewer.querySelector(".viewer-image");
  const viewerCaption = photoViewer.querySelector(".viewer-caption");
  const viewerCount = photoViewer.querySelector(".viewer-count");
  let photoIndex = 0;

  const showPhoto = (index) => {
    photoIndex = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[photoIndex];
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = image.alt;
    viewerCount.textContent = `${photoIndex + 1} / ${galleryImages.length}`;
  };
  showPhoto(0);

  galleryImages.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo-trigger";
    button.setAttribute("aria-label", `Open photo: ${image.alt}`);
    button.title = "View full photo";
    image.before(button);
    button.append(image);
    button.addEventListener("click", () => {
      showPhoto(index);
      photoViewer.showModal();
    });
  });

  photoViewer.querySelector(".viewer-close").addEventListener("click", () => photoViewer.close());
  photoViewer.querySelector(".viewer-prev").addEventListener("click", () => showPhoto(photoIndex - 1));
  photoViewer.querySelector(".viewer-next").addEventListener("click", () => showPhoto(photoIndex + 1));
  photoViewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(photoIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  photoViewer.addEventListener("click", (event) => {
    if (event.target !== photoViewer) return;
    const bounds = photoViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      photoViewer.close();
    }
  });
}

const logoPause = document.querySelector(".logo-pause");
const logoTrack = document.querySelector(".logo-track");
logoPause?.addEventListener("click", () => {
  const paused = logoTrack.classList.toggle("is-paused");
  const label = paused ? "Resume logo animation" : "Pause logo animation";
  logoPause.setAttribute("aria-label", label);
  logoPause.setAttribute("aria-pressed", String(paused));
  logoPause.title = label;
  const icon = document.createElement("i");
  icon.dataset.lucide = paused ? "play" : "pause";
  icon.setAttribute("aria-hidden", "true");
  logoPause.replaceChildren(icon);
  window.lucide?.createIcons();
});

window.lucide?.createIcons();
