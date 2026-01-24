// chatKnowledge.js - Comprehensive Knowledge Base for Sergio's AI Chatbot

export const knowledgeBase = {
  personal: {
    name: "Sergio Sabater Ruiz",
    role: "AI Engineer · Startup Co-Founder",
    location: "Valencia, Spain",
    timezone: "GMT+1",
    email: "sabaterruizs@gmail.com",
    phone: "+34 722 273 036",
    linkedin: "https://www.linkedin.com/in/sergio-sabater-ruiz-562753268/",
    tags: ["AI Engineer", "Co-Founder — AIntegra", "NLP · CV · Security", "Accessibility AI", "Datathon Winner", "Startup Ecosystem"],
    bio: "AI Engineer and startup co-founder focused on real-world ML across NLP, computer vision and accessibility. Award-winning projects validated through datathons, bootcamps and startup ecosystems.",
    tagline: "Building applied AI products, from concept to validation.",
    languages: ["Spanish (native)", "English (fluent)"],
    availability: "Open to AI roles, startup collaboration, and applied research"
  },

  // AINTEGRA LIMITED - MAIN STARTUP PROJECT
  aintegra: {
    name: "AIntegra Limited",
    type: "Private technology startup",
    cofounders: ["Sergio Sabater Ruiz", "Nerea"],
    role: "Co-Founder & AI Lead",

    // What is AIntegra?
    description: "AIntegra Limited is a technology startup specialized in artificial intelligence solutions for universal accessibility, especially focused on computer control through gestures and voice for people with traditional interaction difficulties (digital accessibility).",

    // Mission & Vision
    mission: "Develop inclusive technologies with AI that allow people with different abilities to interact with devices without traditional keyboard or mouse, using gestures, voice, or other intuitive modes.",
    vision: "Expand universal digital accessibility, helping any user to use computers and software regardless of their disability.",

    // What does AIntegra do?
    products: [
      "AI-powered voice assistants for task automation",
      "Gesture-based computer control systems",
      "Accessibility-first AI interfaces",
      "Hands-free human-computer interaction technology"
    ],

    // Target users
    targetUsers: [
      "People with motor disabilities",
      "Users with visual impairments",
      "Elderly with technology barriers",
      "Anyone needing hands-free interaction",
      "Healthcare and rehabilitation centers"
    ],

    // Technology stack
    technology: ["Python", "PyTorch", "NLP", "Speech Recognition", "Computer Vision", "Voice Synthesis", "Product Design"],

    // Validation & Programs
    validation: [
      "Selected by IAtecUV incubator (Universitat de València) - with dedicated space at Parc Científic de la Universitat de València",
      "Selected for Cybersecurity Startup Program by Startup Valencia",
      "Selected for UVemprén 360° entrepreneurship program (Universitat de València)",
      "Exhibited at VDS 2025 (Valencia Digital Summit) with official stand",
      "International Innovation Bootcamp - Sweden representation"
    ],

    // Current status
    status: "Active startup - Product prototyping and market validation phase. Based at Parc Científic de la Universitat de València.",

    // Important clarification
    clarification: "AIntegra Limited is NOT the same as other companies with similar names (like 'Aintegra Servicios' or other consultancies). It is a completely separate startup focused on AI and accessibility, co-founded by Sergio Sabater Ruiz and Nerea."
  },

  awards: [
    {
      title: "First Prize — Dedalus Datathon",
      year: "2025",
      category: "Healthcare AI · Datathon",
      description: "Built an AI solution using real healthcare data for clinical and operational challenges. Evaluated by industry jury.",
      context: "Competed against multiple teams solving real healthcare problems with ML"
    },
    {
      title: "First Prize — Gennera (UV–MAPFRE)",
      year: "2025",
      category: "Innovation · Business impact",
      description: "Awarded for an AI-based solution addressing real business challenges with feasibility and measurable impact.",
      context: "Joint competition between University of Valencia and MAPFRE insurance company"
    },
    {
      title: "Best ETSE-UV Project — Xarxa UVemprén",
      year: "2025",
      category: "Entrepreneurship · Validation",
      description: "Recognized as the best project at the School of Engineering (UV) for innovation potential and viability.",
      context: "University entrepreneurship network evaluation"
    },
    {
      title: "International Innovation Bootcamp — Sweden",
      year: "2025",
      category: "International · Startup mindset",
      description: "Selected by the University of Valencia to represent the institution in an international innovation program in Sweden.",
      context: "Competitive selection among university entrepreneurs"
    },
    {
      title: "VDS 2025 — Startup Valencia (Official Stand)",
      year: "2025",
      category: "Startup ecosystem · Product",
      description: "AIntegra Limited selected to exhibit with an official stand at Valencia Digital Summit, supported by the University of Valencia.",
      context: "Major tech event in Valencia with industry presence"
    },
    {
      title: "First Prize — Gennera 5UCV (University of Alicante)",
      year: "2025",
      category: "Inter-university · Competition",
      description: "First prize in an inter-university innovation competition across universities of the Valencian Community.",
      context: "Regional competition involving multiple universities"
    }
  ],

  projects: [
    {
      title: "AIntegra Limited — AI Voice & Accessibility",
      category: "Startup · Accessibility AI",
      priority: "main",
      problem: "Lack of inclusive, hands-free human–computer interaction for people with accessibility needs.",
      solution: "AI-powered voice assistants designed to automate tasks and improve accessibility through natural interaction. Focus on gesture and voice-based control for computers.",
      stack: ["Python", "PyTorch", "NLP", "Speech Recognition", "Product Design", "UX"],
      outcomes: ["Startup co-founded with Nerea", "Product prototyping phase", "VDS 2025 official stand", "UVemprén 360° selected", "Sweden bootcamp validation"],
      details: "This is Sergio's main startup project. AIntegra Limited develops technology for people who cannot use traditional keyboard/mouse, allowing them to control computers through voice commands and gestures."
    },
    {
      title: "Sentinel AX — Multiplatform Cybersecurity Suite",
      category: "Cybersecurity · Full-stack + AI",
      priority: "high",
      problem: "Modern threats (SPAM, phishing, malicious links, fake images and AI voice) require fast, reliable detection across channels.",
      solution: "End-to-end platform combining scalable architecture (reverse proxy, Angular frontend, Spring Boot backend, FastAPI AI microservices and Cassandra) with ML/DL models for comprehensive threat detection.",
      stack: ["Python", "FastAPI", "Angular", "Spring Boot", "Cassandra", "Nginx", "Docker", "scikit-learn", "XGBoost", "TensorFlow", "Keras", "NLP", "CNN", "Audio Processing"],
      outcomes: [
        "Real-time malicious URL classification",
        "Hybrid spam detection (rules + XGBoost)",
        "NLP chatbot for cybersecurity guidance",
        "Deep CNN fake-image detection",
        "Multitask voice model: language + deepfake detection",
        "Scalable, containerized architecture"
      ],
      demo: "https://sergiosaba12.github.io/Sentinel-AX/",
      details: "Full-stack cybersecurity platform with multiple AI models for different threat types. Includes deepfake detection for both images and audio."
    },
    {
      title: "AIntegra Health — Healthcare AI (Dedalus Datathon)",
      category: "Healthcare · Award-winning",
      priority: "high",
      problem: "Healthcare workflows require AI solutions that improve decisions using real clinical data.",
      solution: "Designed and implemented an ML solution on real healthcare datasets to address operational and clinical challenges. Won first place.",
      stack: ["Python", "Machine Learning", "Healthcare Data", "Data Validation", "Clinical Analytics"],
      outcomes: ["🥇 First Prize — Dedalus Datathon 2025", "Real-world healthcare data", "Jury-evaluated impact", "Clinical workflow optimization"],
      details: "Award-winning project using actual hospital data to create practical AI solutions for healthcare operations."
    },
    {
      title: "MAPFRE QR Connect",
      category: "Industry · Innovation",
      priority: "medium",
      problem: "Need for faster, smarter customer interaction and service access in insurance contexts.",
      solution: "AI-enabled solution connecting QR-based access with intelligent data processing and automation for insurance workflows.",
      stack: ["Python", "ML", "Data Processing", "Integration", "QR Technology"],
      outcomes: ["Business-oriented solution", "Corporate innovation context", "Gennera UV-MAPFRE competition winner"],
      details: "Enterprise innovation project combining QR technology with AI for improved customer service in insurance."
    },
    {
      title: "Naturgy AI — Mobile App Usability Improvement",
      category: "UX · Product · AI",
      priority: "medium",
      problem: "Users faced friction in key mobile flows, reducing task completion and overall satisfaction. The app needed clearer guidance and faster resolution of common actions.",
      solution: "Proposed an AI-assisted UX layer to streamline navigation and support: intent-based help, smarter onboarding, contextual suggestions, and UX improvements focused on reducing steps and confusion in critical journeys.",
      stack: ["UX", "Product", "Mobile", "User Research", "AI Assistant", "Journey Mapping"],
      outcomes: [
        "Redesigned key user flows (less steps, clearer hierarchy)",
        "AI support concept for common intents",
        "Usability improvements roadmap (quick wins + long-term)",
        "Metric plan: task success rate, time-to-task, retention"
      ],
      details: "Product-focused project improving energy company's mobile app with AI-powered UX enhancements."
    },
    {
      title: "Olivia Mareque — Growth Strategy to 100K Followers",
      category: "Growth · Marketing Strategy",
      priority: "medium",
      problem: "The brand needed a structured growth plan to scale community and reach 100,000 followers with measurable, repeatable tactics.",
      solution: "Designed a full-funnel content and growth strategy: positioning, content pillars, weekly cadence, KPI tracking, and experimentation loops (A/B tests, hooks, formats, and distribution).",
      stack: ["Growth", "Content Strategy", "Analytics", "A/B Testing", "Brand Positioning", "Social Media"],
      outcomes: [
        "Content system + calendar",
        "Growth experiments roadmap",
        "KPI dashboard plan (reach, saves, CTR, conversion)",
        "Repeatable playbooks for scaling"
      ],
      details: "Marketing and growth project for content creator, developing data-driven strategy for audience scaling."
    },
    {
      title: "GoldSense",
      category: "AI Product · In progress",
      priority: "secondary",
      problem: "Intelligent analysis and decision-support challenge in financial/commodity markets.",
      solution: "AI-driven system currently under development for smart analysis.",
      stack: ["Python", "AI/ML", "Data Analysis"],
      outcomes: ["In active development"],
      details: "New AI product project currently in development."
    },
    {
      title: "VietuFusion",
      category: "AI Product · In progress",
      priority: "secondary",
      problem: "Data fusion problem tackled with AI techniques.",
      solution: "Intelligent system under active development for data fusion.",
      stack: ["Python", "AI/ML", "Data Fusion"],
      outcomes: ["In active development"],
      details: "AI product focusing on intelligent data fusion, currently being developed."
    },
    {
      title: "Formula 1 Strategy Simulator (Bachelor Thesis)",
      category: "Thesis · AI Simulation",
      priority: "academic",
      problem: "Optimizing race strategies in Formula 1 involves complex, dynamic decision-making under uncertainty.",
      solution: "AI-based simulator to model and evaluate race strategies using data-driven and optimization approaches.",
      stack: ["Python", "Simulation", "Machine Learning", "Optimization", "Data Science"],
      outcomes: ["Bachelor's Thesis completed", "Advanced AI simulation system", "Academic validation"],
      details: "Academic project using AI and optimization for F1 race strategy simulation. Completed as Bachelor's thesis at Universitat de València."
    }
  ],

  skills: {
    "AI & ML": ["NLP", "Computer Vision", "Time Series", "Model Evaluation", "Speech Recognition", "Deepfake Detection"],
    "Frameworks": ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "Keras", "XGBoost"],
    "Engineering": ["Python", "SQL", "Git", "Docker", "FastAPI", "Google Colab"],
    "Full-Stack": ["Angular", "Spring Boot", "Cassandra", "Nginx"],
    "Product": ["UX Research", "Journey Mapping", "A/B Testing", "Growth Strategy"]
  },

  mindset: [
    "Problem-first, not model-first",
    "Evaluation and metrics before deployment",
    "Prefer simple models if they solve the problem",
    "Product and business awareness",
    "Accessibility and inclusion as priorities",
    "Real-world validation through competitions and users"
  ],

  currentFocus: [
    "AIntegra Limited: Scaling AI accessibility solutions and voice-based systems with co-founder Nerea",
    "GoldSense & VietuFusion: Developing new AI products focused on intelligent analysis and data fusion",
    "Open to applied AI roles, early-stage startups and high-impact collaborations"
  ],

  education: {
    degree: "Bachelor's in Computer Engineering",
    university: "Universitat de València (UV)",
    school: "ETSE-UV (School of Engineering)",
    thesis: "Formula 1 Strategy Simulator - AI-based simulation and optimization",
    programs: ["UVemprén 360°", "Samsung Innovation Campus", "International Innovation Bootcamp Sweden"]
  },

  organizations: ["Dedalus", "MAPFRE", "Universitat de València", "VDS", "Samsung Innovation Campus", "UPV", "Naturgy", "Health2Innovation", "Startup Valencia", "IATec UV", "Gennera"]
};

// Enhanced keyword matching for question answering
export function findAnswer(question) {
  const q = question.toLowerCase();

  // Personal info / Who questions
  if (q.match(/who (are you|is sergio|is he)/i) || q.match(/about (you|sergio|yourself)/i) || q.match(/introduce/i) || q.match(/tell me about/i)) {
    return {
      type: "personal",
      answer: `I'm ${knowledgeBase.personal.name}, an ${knowledgeBase.personal.role} based in ${knowledgeBase.personal.location}. ${knowledgeBase.personal.bio}\n\nI'm the co-founder of AIntegra Limited, a startup focused on AI accessibility solutions. I've won 6 major awards in 2025 and I'm open to AI roles and collaborations.`
    };
  }

  // Name question
  if (q.match(/what.*name|your name/i)) {
    return {
      type: "personal",
      answer: `My name is ${knowledgeBase.personal.name}. I'm an AI Engineer and co-founder of AIntegra Limited.`
    };
  }

  // Location
  if (q.match(/where (are you|do you live|is sergio|based)/i) || q.match(/location/i) || q.match(/country|city/i)) {
    return {
      type: "personal",
      answer: `I'm based in ${knowledgeBase.personal.location} (${knowledgeBase.personal.timezone}). I speak ${knowledgeBase.personal.languages.join(' and ')}.`
    };
  }

  // Contact
  if (q.match(/contact|email|phone|reach|hire|connect/i)) {
    return {
      type: "contact",
      answer: `You can reach me at:\n📧 Email: ${knowledgeBase.personal.email}\n📱 Phone: ${knowledgeBase.personal.phone}\n💼 LinkedIn: ${knowledgeBase.personal.linkedin}\n\nI typically respond within 24 hours and I'm ${knowledgeBase.personal.availability.toLowerCase()}.`
    };
  }

  // AINTEGRA SPECIFIC - COMPREHENSIVE
  if (q.match(/aintegra|startup|company|co-?found|nerea|accessibility|voice assistant/i)) {
    const a = knowledgeBase.aintegra;
    return {
      type: "aintegra",
      answer: `🚀 ${a.name}\n\n${a.description}\n\n🎯 Mission: ${a.mission}\n\n👥 Co-founders: ${a.cofounders.join(' & ')}\n\n✅ Validation:\n${a.validation.map(v => `• ${v}`).join('\n')}\n\n💡 Status: ${a.status}\n\n⚠️ Note: ${a.clarification}`
    };
  }

  // What does AIntegra do?
  if (q.match(/what (does|is) aintegra (do|make|build|create)/i) || q.match(/aintegra product/i)) {
    const a = knowledgeBase.aintegra;
    return {
      type: "aintegra",
      answer: `AIntegra Limited develops:\n\n${a.products.map(p => `• ${p}`).join('\n')}\n\n🎯 Target users:\n${a.targetUsers.map(u => `• ${u}`).join('\n')}\n\nOur goal is ${a.vision.toLowerCase()}`
    };
  }

  // Awards
  if (q.match(/award|prize|win|won|recognition|achievement/i)) {
    const awardsList = knowledgeBase.awards.map(a => `🏆 ${a.title} (${a.year})\n   ${a.description}`).join('\n\n');
    return {
      type: "awards",
      answer: `I've won ${knowledgeBase.awards.length} major awards in 2025:\n\n${awardsList}`
    };
  }

  // Projects / Work
  if (q.match(/project|work|built|build|portfolio|case|experience/i)) {
    const mainProjects = knowledgeBase.projects.filter(p => p.priority === 'main' || p.priority === 'high');
    const projectsList = mainProjects.map(p =>
      `• ${p.title}\n  ${p.solution.slice(0, 100)}...`
    ).join('\n\n');
    return {
      type: "projects",
      answer: `Here are my key projects:\n\n${projectsList}\n\nI have ${knowledgeBase.projects.length} total projects spanning AI accessibility, cybersecurity, healthcare, and product development.`
    };
  }

  // Skills
  if (q.match(/skill|technology|tech stack|know|can you|expertise/i)) {
    const skillsList = Object.entries(knowledgeBase.skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('\n');
    return {
      type: "skills",
      answer: `My technical skills:\n\n${skillsList}\n\nI specialize in applied ML with focus on NLP, Computer Vision, and AI security/accessibility.`
    };
  }

  // Specific technologies
  if (q.match(/python|pytorch|tensorflow|nlp|computer vision|cv|ml|machine learning|ai|deep learning/i)) {
    return {
      type: "skills",
      answer: `Yes! I have extensive experience with AI/ML. My core stack:\n\n• Languages: Python, SQL\n• ML Frameworks: PyTorch, TensorFlow, scikit-learn, Hugging Face\n• Specializations: NLP, Computer Vision, Speech Recognition, Deepfake Detection\n\nI apply these in real-world projects for accessibility, security, and healthcare.`
    };
  }

  // Mindset / Philosophy
  if (q.match(/approach|mindset|philosophy|how do you|methodology|way of working/i)) {
    const mindsetList = knowledgeBase.mindset.map(m => `• ${m}`).join('\n');
    return {
      type: "mindset",
      answer: `My approach to building AI products:\n\n${mindsetList}\n\nI focus on applied machine learning: systems that can be evaluated, validated and explained. My work bridges technical depth with real constraints.`
    };
  }

  // Current focus / Availability
  if (q.match(/current|now|working on|available|hiring|looking for|open to/i)) {
    const focusList = knowledgeBase.currentFocus.map(f => `• ${f}`).join('\n');
    return {
      type: "focus",
      answer: `Currently I'm focused on:\n\n${focusList}\n\n🟢 Status: ${knowledgeBase.personal.availability}`
    };
  }

  // Sentinel AX / Cybersecurity
  if (q.match(/sentinel|cybersecurity|security|deepfake|spam|phishing/i)) {
    const project = knowledgeBase.projects.find(p => p.title.includes("Sentinel"));
    return {
      type: "project",
      answer: `🛡️ ${project.title}\n\n${project.solution}\n\n✅ Key outcomes:\n${project.outcomes.slice(0, 4).map(o => `• ${o}`).join('\n')}\n\n🔧 Tech: ${project.stack.slice(0, 8).join(', ')}\n\n🔗 Demo: ${project.demo}`
    };
  }

  // Healthcare / Dedalus
  if (q.match(/health|healthcare|dedalus|datathon|hospital|clinical/i)) {
    const award = knowledgeBase.awards.find(a => a.title.includes("Dedalus"));
    const project = knowledgeBase.projects.find(p => p.title.includes("Health"));
    return {
      type: "project",
      answer: `🏥 ${project.title}\n\n${project.solution}\n\n🏆 Result: ${award.title}\n\n${project.details}`
    };
  }

  // MAPFRE
  if (q.match(/mapfre|insurance|qr/i)) {
    const project = knowledgeBase.projects.find(p => p.title.includes("MAPFRE"));
    return {
      type: "project",
      answer: `💼 ${project.title}\n\n${project.solution}\n\n${project.details}`
    };
  }

  // Naturgy
  if (q.match(/naturgy|energy|mobile app|ux/i)) {
    const project = knowledgeBase.projects.find(p => p.title.includes("Naturgy"));
    return {
      type: "project",
      answer: `📱 ${project.title}\n\n${project.solution}\n\n✅ Outcomes:\n${project.outcomes.map(o => `• ${o}`).join('\n')}`
    };
  }

  // F1 / Thesis
  if (q.match(/formula|f1|thesis|bachelor|university|degree/i)) {
    const project = knowledgeBase.projects.find(p => p.title.includes("Formula"));
    const edu = knowledgeBase.education;
    return {
      type: "education",
      answer: `🎓 Education:\n• ${edu.degree} at ${edu.university}\n• School: ${edu.school}\n\n📄 Thesis: "${edu.thesis}"\n\n${project.solution}\n\n🏅 Programs: ${edu.programs.join(', ')}`
    };
  }

  // Nerea / Team
  if (q.match(/nerea|team|partner|cofounder|co-founder/i)) {
    return {
      type: "team",
      answer: `I co-founded AIntegra Limited together with Nerea. We work as a team on developing AI accessibility solutions.\n\nNerea is my co-founder and we share the vision of making technology accessible to everyone through AI-powered voice and gesture interfaces.`
    };
  }

  // Default fallback
  return {
    type: "fallback",
    answer: `I'm not sure about that specific question. Here are topics I can help with:\n\n• My background and experience\n• AIntegra Limited (my main startup)\n• Projects I've worked on\n• Awards (6 in 2025)\n• Technical skills\n• Contact information\n• Current availability\n\nWhat would you like to know?`
  };
}

// Welcome message
export const welcomeMessage = `👋 Hi! I'm Sergio's AI assistant. I can tell you about his work, projects like AIntegra Limited, awards, skills, and more. What would you like to know?`;

// Quick suggestions
export const quickSuggestions = [
  "What is AIntegra?",
  "What projects have you built?",
  "What awards have you won?",
  "What are your skills?",
  "Are you available for hire?"
];
