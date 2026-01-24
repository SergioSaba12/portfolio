// App.jsx - Refactored with Component Imports
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

// UI Components
import { Modal } from "./components/ui";
import Pill from "./components/ui/Pill";

// Section Components
import {
  Navigation,
  Hero,
  AIntegraSection,
  WorkSection,
  AwardsSection,
  SkillsSection,
  ContactSection,
  GalleryCarousel
} from "./components/sections";

// ChatBot
import ChatBot from "./ChatBot";

// Images
const IMAGES = {
  profile: "/sergio.jpg",
  gennera_uv_mapfre: "/campeon_genera.jpg",
  gennera_5ucv: "/gennera5ucv.jpeg",
  vds2025: "/vds2025.jpg",
  dedalus: "/dedalus_win.jpg",
  suecia: "/suecia.jpg",
  etse: "/etse.jpg",
  gallery: [
    "/galeria1.jpg", "/galeria2.jpg", "/galeria3.jpg", "/galeria4.jpg",
    "/galeria5.jpg", "/galeria6.jpg", "/galeria7.jpg", "/galeria8.jpg",
    "/galeria9.jpg", "/galeria10.jpg", "/galeria11.jpg",
  ],
};

export default function App() {
  const prefersReduced = useReducedMotion();
  const [activeAward, setActiveAward] = useState(null);
  const [activeCase, setActiveCase] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Auto-rotate gallery every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % IMAGES.gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chips = useMemo(
    () => ["AI Engineer", "Co-Founder", "NLP · Computer Vision", "Award Winner"],
    []
  );

  const proof = useMemo(
    () => [
      { label: "Awards", value: "6", desc: "Major recognitions in 2025" },
      { label: "Focus", value: "Applied ML", desc: "Real-world solutions" },
      { label: "Domains", value: "NLP/CV", desc: "Security & accessibility" },
      { label: "Ecosystem", value: "Startup", desc: "Product validation" },
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        title: "AIntegra Limited",
        subtitle: "AI Voice & Accessibility",
        tier: "primary",
        tag: "Startup · Accessibility AI",
        logo: "/logos/aintegra.png",
        problem: "Lack of inclusive, hands-free human–computer interaction for people with accessibility needs.",
        solution: "AI-powered voice assistants designed to automate tasks and improve accessibility through natural interaction.",
        stack: ["Python", "PyTorch", "NLP", "Speech", "Product Design"],
        outcome: ["Startup co-founded", "Product prototyping", "VDS & bootcamp validation"],
      },
      {
        title: "Sentinel AX",
        subtitle: "Multiplatform Cybersecurity Suite",
        tier: "primary",
        tag: "Cybersecurity · Full-stack + AI",
        logo: "/logos/sentinelax.png",
        problem: "Modern threats (SPAM, phishing, malicious links, fake images and AI voice) require fast, reliable detection across channels.",
        solution: "End-to-end platform combining scalable architecture (reverse proxy, Angular frontend, Spring Boot backend, FastAPI AI microservices and Cassandra) with ML/DL models for URL, spam, NLP guidance, image deepfake and voice deepfake/language detection.",
        stack: ["Python", "FastAPI", "Angular", "Spring Boot", "Cassandra", "Nginx", "Docker", "scikit-learn", "XGBoost", "TensorFlow", "Keras", "NLP", "CNN", "Audio"],
        outcome: ["Real-time malicious URL classification", "Hybrid spam detection (rules + XGBoost)", "NLP chatbot for cybersecurity guidance", "Deep CNN fake-image detection", "Multitask voice model: language + deepfake", "Scalable, containerized architecture"],
        links: { demo: "https://sergiosaba12.github.io/Sentinel-AX/" },
      },
      {
        title: "AIntegra Health",
        subtitle: "Healthcare AI (Dedalus Datathon)",
        tier: "primary",
        tag: "Healthcare · Award-winning",
        logo: "/logos/aintegra_health.png",
        problem: "Healthcare workflows require AI solutions that improve decisions using real clinical data.",
        solution: "Designed and implemented an ML solution on real healthcare datasets to address operational and clinical challenges.",
        stack: ["Python", "Machine Learning", "Healthcare Data", "Validation"],
        outcome: ["🥇 First Prize — Dedalus Datathon 2025", "Real-world data", "Jury-evaluated impact"],
      },
      {
        title: "MAPFRE QR Connect",
        subtitle: "Industry Innovation",
        tier: "primary",
        tag: "Industry · Innovation",
        logo: "/logos/mapfre_qr.png",
        problem: "Need for faster, smarter customer interaction and service access in insurance contexts.",
        solution: "AI-enabled solution connecting QR-based access with intelligent data processing and automation.",
        stack: ["Python", "ML", "Data Processing", "Integration"],
        outcome: ["Business-oriented solution", "Corporate innovation context"],
      },
      {
        title: "Naturgy AI",
        subtitle: "Mobile App Usability Improvement",
        tier: "primary",
        tag: "UX · Product · AI",
        logo: "/logos/naturgy-ai.png",
        problem: "Users faced friction in key mobile flows, reducing task completion and overall satisfaction. The app needed clearer guidance and faster resolution of common actions.",
        solution: "Proposed an AI-assisted UX layer to streamline navigation and support: intent-based help, smarter onboarding, contextual suggestions, and UX improvements focused on reducing steps and confusion in critical journeys.",
        stack: ["UX", "Product", "Mobile", "User Research", "AI Assistant", "Journey Mapping"],
        outcome: ["Redesigned key user flows (less steps, clearer hierarchy)", "AI support concept for common intents", "Usability improvements roadmap (quick wins + long-term)", "Metric plan: task success rate, time-to-task, retention"],
      },
      {
        title: "Olivia Mareque",
        subtitle: "Growth Strategy to 100K Followers",
        tier: "primary",
        tag: "Growth · Marketing Strategy",
        logo: "/logos/olivia_mareque.png",
        problem: "The brand needed a structured growth plan to scale community and reach 100,000 followers with measurable, repeatable tactics.",
        solution: "Designed a full-funnel content and growth strategy: positioning, content pillars, weekly cadence, KPI tracking, and experimentation loops (A/B tests, hooks, formats, and distribution).",
        stack: ["Growth", "Content Strategy", "Analytics", "A/B Testing", "Brand Positioning"],
        outcome: ["Content system + calendar", "Growth experiments roadmap", "KPI dashboard plan (reach, saves, CTR, conversion)", "Repeatable playbooks for scaling"],
      },
      {
        title: "GoldSense",
        subtitle: "AI Product · In progress",
        tier: "secondary",
        tag: "AI Product",
        logo: "/logos/goldsense.png",
        problem: "(To be refined) Intelligent analysis and decision-support challenge.",
        solution: "AI-driven system currently under development.",
        stack: ["Python", "AI/ML"],
        outcome: ["In progress"],
      },
      {
        title: "VietuFusion",
        subtitle: "AI Product · In progress",
        tier: "secondary",
        tag: "AI Product",
        logo: "/logos/vietufusion.png",
        problem: "(To be refined) Data fusion problem tackled with AI techniques.",
        solution: "Intelligent system under active development.",
        stack: ["Python", "AI/ML"],
        outcome: ["In progress"],
      },
      {
        title: "Formula 1 Strategy Simulator",
        subtitle: "Bachelor Thesis",
        tier: "wide",
        tag: "Thesis · AI Simulation",
        problem: "Optimizing race strategies in Formula 1 involves complex, dynamic decision-making under uncertainty.",
        solution: "AI-based simulator to model and evaluate race strategies using data-driven and optimization approaches.",
        stack: ["Python", "Simulation", "Machine Learning", "Optimization"],
        outcome: ["Bachelor's Thesis", "Advanced AI simulation"],
      },
    ],
    []
  );

  const awards = useMemo(
    () => [
      {
        key: "dedalus",
        year: "2025",
        title: "Dedalus Datathon Winner",
        tag: "Healthcare AI",
        desc: "First prize for AI solution using real healthcare data.",
        cover: IMAGES.dedalus,
        context: "Competed against 15+ teams in a 48-hour datathon organized by Dedalus, a leading healthcare IT company in Europe.",
        impact: ["Processed real anonymized hospital data", "Created predictive model for patient outcomes", "Solution evaluated by healthcare professionals"],
        takeaway: "Demonstrated ability to build practical AI solutions under time pressure with real clinical datasets."
      },
      {
        key: "gennera",
        year: "2025",
        title: "Gennera UV-MAPFRE Winner",
        tag: "Innovation",
        desc: "Awarded for AI solution with business impact.",
        cover: IMAGES.gennera_uv_mapfre,
        context: "Innovation challenge jointly organized by University of Valencia and MAPFRE insurance, focused on practical business applications.",
        impact: ["Developed AI-powered customer service solution", "Addressed real insurance industry challenges", "Presented to C-level executives"],
        takeaway: "Bridged the gap between academic AI research and enterprise business needs."
      },
      {
        key: "etse",
        year: "2025",
        title: "Best ETSE-UV Project",
        tag: "Entrepreneurship",
        desc: "Best project at School of Engineering.",
        cover: IMAGES.etse,
        context: "Selected as the top project from the ETSE-UV (School of Engineering) within the Xarxa UVemprén entrepreneurship network.",
        impact: ["Recognized for innovation potential", "Validated commercial viability", "Mentorship from industry experts"],
        takeaway: "AIntegra Limited validated as a viable startup concept with strong engineering foundations."
      },
      {
        key: "sweden",
        year: "2025",
        title: "Innovation Bootcamp — Sweden",
        tag: "International",
        desc: "Selected to represent University of Valencia.",
        cover: IMAGES.suecia,
        context: "International innovation bootcamp bringing together entrepreneurs from European universities to develop startup skills.",
        impact: ["Cross-cultural collaboration experience", "Intensive startup methodology training", "Network with international founders"],
        takeaway: "Gained global perspective on building tech startups and validated ideas with international mentors."
      },
      {
        key: "vds",
        year: "2025",
        title: "VDS 2025 — Startup Valencia",
        tag: "Startup",
        desc: "Official stand at Valencia Digital Summit.",
        cover: IMAGES.vds2025,
        context: "Valencia Digital Summit is the largest tech event in the region, featuring 5000+ attendees and major tech companies.",
        impact: ["Official exhibition stand sponsored by UV", "Direct engagement with potential clients", "Media coverage and visibility"],
        takeaway: "First major public exposure for AIntegra Limited, validating market interest in accessibility AI."
      },
      {
        key: "alicante",
        year: "2025",
        title: "Gennera 5UCV Winner",
        tag: "Inter-university",
        desc: "First prize in regional competition.",
        cover: IMAGES.gennera_5ucv,
        context: "Inter-university innovation competition across the 5 public universities of the Valencian Community.",
        impact: ["Competed against best projects from 5 universities", "Awarded for technical innovation and impact", "Regional recognition"],
        takeaway: "Proved competitive advantage against top engineering talent across the region."
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      { group: "AI & ML", items: ["NLP", "Computer Vision", "Time Series", "Model Evaluation"] },
      { group: "Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn"] },
      { group: "Engineering", items: ["Python", "SQL", "Git", "Docker", "FastAPI"] },
    ],
    []
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Hero */}
        <Hero
          prefersReduced={prefersReduced}
          chips={chips}
          proof={proof}
          profileImage={IMAGES.profile}
        />

        {/* Trusted By */}
        <section className="py-12 border-t border-gray-200">
          <div className="container-apple">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Trusted & Validated by
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <img src="/logos/uv.png" alt="Universitat de València" className="h-10 md:h-12 grayscale hover:grayscale-0 transition" />
              <img src="/logos/upv.png" alt="UPV" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
              <img src="/logos/mapfre.png" alt="MAPFRE" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
              <img src="/logos/dedalus.png" alt="Dedalus" className="h-12 md:h-14 grayscale hover:grayscale-0 transition" />
              <img src="/logos/naturgy.png" alt="Naturgy" className="h-12 md:h-14 grayscale hover:grayscale-0 transition" />
              <img src="/logos/startup_valencia.png" alt="Startup Valencia" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
              <img src="/logos/samsung.png" alt="Samsung" className="h-10 md:h-12 grayscale hover:grayscale-0 transition" />
              <img src="/logos/health2innovation.png" alt="Health2Innovation" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
              <img src="/logos/iatec_uv.png" alt="IAtecUV" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
              <img src="/logos/olivia_mareque.png" alt="Olivia Mareque" className="h-12 md:h-14 grayscale hover:grayscale-0 transition" />
              <img src="/logos/vds.png" alt="VDS" className="h-8 md:h-10 grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </section>

        {/* AIntegra Spotlight */}
        <AIntegraSection />

        {/* Work */}
        <WorkSection
          caseStudies={caseStudies}
          onCaseClick={setActiveCase}
        />

        {/* Awards */}
        <AwardsSection
          awards={awards}
          onAwardClick={setActiveAward}
        />

        {/* Skills */}
        <SkillsSection skills={skills} />

        {/* Contact */}
        <ContactSection />

        {/* Gallery Carousel */}
        <GalleryCarousel
          images={IMAGES.gallery}
          currentIndex={currentGalleryIndex}
          onIndexChange={setCurrentGalleryIndex}
        />

        {/* Award Modal */}
        <Modal
          open={Boolean(activeAward)}
          onClose={() => setActiveAward(null)}
          title={activeAward?.title || ""}
        >
          {activeAward && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-500">{activeAward.year}</span>
                <Pill>{activeAward.tag}</Pill>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg">{activeAward.desc}</p>

              {/* Context */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Context</div>
                <p className="text-gray-700">{activeAward.context}</p>
              </div>

              {/* Impact */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Impact & Highlights</div>
                <div className="space-y-2">
                  {activeAward.impact?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                <div className="text-xs font-semibold text-blue-600 uppercase mb-1">Key Takeaway</div>
                <p className="text-gray-800 font-medium">{activeAward.takeaway}</p>
              </div>
            </div>
          )}
        </Modal>

        <Modal
          open={Boolean(activeCase)}
          onClose={() => setActiveCase(null)}
          title={activeCase?.title || ""}
        >
          {activeCase && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Problem</div>
                  <p className="text-gray-700">{activeCase.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Solution</div>
                  <p className="text-gray-700">{activeCase.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Outcomes</div>
                <ul className="space-y-1">
                  {activeCase.outcome.map((o, idx) => (
                    <li key={idx} className="text-sm text-gray-700">• {o}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeCase.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>

              {activeCase.links?.demo && (
                <div className="mt-6">
                  <a
                    href={activeCase.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-apple btn-apple-primary"
                  >
                    Live demo
                  </a>
                </div>
              )}
            </div>
          )}
        </Modal>

        <ChatBot />
      </div>
    </MotionConfig>
  );
}
