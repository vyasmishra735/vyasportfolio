/**
 * =========================================================================
 * VYAS MISHRA - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * This file centralizes all personal information, social links, project
 * descriptions, education history, and skills.
 * 
 * To customize:
 * 1. Update the placeholders (LinkedIn, Email, Institute names, Project URLs).
 * 2. Add or modify skills in the categories below.
 * 3. Update project details as projects evolve.
 * =========================================================================
 */

export const personalInfo = {
  fullName: "Vyas Mishra",
  shortName: "Vyas",
  monogram: "VM",
  roleTitle: "Aspiring Software Engineer & AI Developer",
  subTitle: "Computer Science Student • Exploring AI/ML & Modern Web",
  profession: "Aspiring Software Engineer | AI/ML Developer | Computer Science Student",
  location: "Gorakhpur, Uttar Pradesh, India",
  locationShort: "Gorakhpur, India",
  availabilityStatus: "Open to Internships & Junior Roles",
  isAvailable: true,

  // Social & Contact Links (Edit placeholders as needed)
  githubUrl: "https://github.com/vyasmishra735",
  
  /**
   * PLACEHOLDER: Replace with your actual LinkedIn profile URL
   * Example: "https://linkedin.com/in/vyasmishra"
   */
  linkedinUrl: "https://linkedin.com/in/YOUR_LINKEDIN_HERE",
  isLinkedInPlaceholder: true,

  /**
   * PLACEHOLDER: Replace with your actual contact email
   * Example: "vyas.mishra@example.com"
   */
  email: "vyas.mishra.placeholder@example.com",
  isEmailPlaceholder: true,

  hero: {
    tagline: "COMPUTER SCIENCE • SOFTWARE • AI",
    headlineLine1: "Engineering Ideas.",
    headlineLine2: "Crafting Digital Experiences.",
    supportingText:
      "I'm Vyas Mishra, a Computer Science student and aspiring software engineer exploring AI, computer vision, and modern web technologies to build meaningful digital solutions.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Let's Connect",
  },

  about: {
    sectionLabel: "A Little About Me",
    quote: "Bridging analytical hardware discipline with modern AI & software craftsmanship.",
    paragraph1:
      "I am a Computer Science and Engineering student at Maharana Pratap Institute of Technology, driven by an insatiable curiosity for how intelligent software systems transform real-world operations.",
    paragraph2:
      "With a foundational Diploma in Electrical Engineering, I bring an interdisciplinary perspective to software development—appreciating both low-level physical logic and high-level abstract architectures.",
    paragraph3:
      "My current exploration centers on Computer Vision, deep learning workflows (YOLO11, OpenCV), and modern interactive web engineering. I am committed to continuous learning, building practical prototypes, and tackling challenging problems with clean, scalable code.",
    highlights: [
      {
        label: "Primary Focus",
        value: "AI/ML Workflows & Software Engineering",
        accent: "gold",
      },
      {
        label: "Current Education",
        value: "B.Tech in CSE — Maharana Pratap Inst. of Tech.",
        accent: "white",
      },
      {
        label: "Hardware Foundation",
        value: "Diploma in Electrical Engineering",
        accent: "emerald",
      },
      {
        label: "Engineering Mindset",
        value: "Curiosity-Driven Practical Problem Solving",
        accent: "gold",
      },
    ],
  },
};

/**
 * TECHNICAL SKILLS
 * Grouped into 3 logical domains. Marked as active technologies and interests.
 */
export const skillCategories = [
  {
    id: "programming-web",
    name: "Programming & Web Development",
    description: "Core languages and web technologies used for building software and responsive interfaces.",
    skills: [
      { name: "Python", category: "Language", note: "Primary language for AI, data & scripting" },
      { name: "C", category: "Language", note: "Foundational systems programming & memory logic" },
      { name: "JavaScript", category: "Frontend", note: "Modern ES6+, async workflows & dynamic web" },
      { name: "React.js", category: "Frontend", note: "Component architecture, hooks & reactive state" },
      { name: "HTML", category: "Markup", note: "Semantic structure & web accessibility standards" },
      { name: "CSS", category: "Styling", note: "Modern layout models, animations & responsive design" },
    ],
  },
  {
    id: "ai-vision",
    name: "AI, Machine Learning & Computer Vision",
    description: "Frameworks, models, and vision pipelines currently being studied and experimented with.",
    skills: [
      { name: "YOLO11", category: "Object Detection", note: "State-of-the-art real-time detection & tracking" },
      { name: "OpenCV", category: "Vision Processing", note: "Image manipulation, filtering & feature extraction" },
      { name: "Qwen2.5-VL", category: "Multimodal AI", note: "Vision-language reasoning & image understanding" },
      { name: "Computer Vision", category: "Core Discipline", note: "Spatial geometry, segmentation & object localization" },
      { name: "AI/ML Workflows", category: "Pipeline", note: "Data preprocessing, inference & model evaluation" },
    ],
  },
  {
    id: "tools-dev",
    name: "Tools & Development",
    description: "Developer tooling, version control, and containerization environments.",
    skills: [
      { name: "Git", category: "Version Control", note: "Distributed source control & commit workflows" },
      { name: "GitHub", category: "Collaboration", note: "Repository hosting, collaboration & CI/CD basics" },
      { name: "Docker", category: "DevOps", note: "Container packaging & isolated runtimes" },
      { name: "JupyterLab", category: "Environment", note: "Interactive prototyping & model experimentation" },
      { name: "Linux/Ubuntu", category: "Operating System", note: "Command-line administration & development setup" },
    ],
  },
];

/**
 * FEATURED PROJECTS
 * Detailed case studies based strictly on provided project names.
 * All repository links and live URLs are marked as editable placeholders.
 */
export const projectsData = [
  {
    id: "safety-compliance",
    number: "01",
    title: "Intelligent Safety Compliance Assessment",
    category: "AI & Computer Vision",
    subtitle: "Real-time PPE & Workplace Hazard Detection",
    statusBadge: "Concept Architecture & Pipeline",
    description:
      "An automated industrial safety monitoring system concept utilizing computer vision to detect compliance with safety gear (helmets, vests, goggles) and alert on unauthorized hazardous zone intrusions.",
    longDescription:
      "Workplace safety in industrial and construction environments often relies on manual oversight, which is prone to fatigue. This project explores real-time stream ingestion and object detection using modern YOLO architectures to identify whether workers wear required PPE before entering hazardous perimeters.",
    tags: ["Python", "YOLO11", "OpenCV", "Computer Vision", "Real-time Inference"],
    accentColor: "gold",
    /**
     * PLACEHOLDERS: Replace when repository is published
     */
    githubUrl: "https://github.com/vyasmishra735?tab=repositories",
    isGithubPlaceholder: true,
    demoUrl: null, // Clearly marked: no working live demo claimed
    keyHighlights: [
      "Custom class definitions for safety helmets, protective vests, and protective eyewear",
      "Perimeter bounding and coordinate crossing logic for restricted industrial zones",
      "Stream processing pipeline designed for minimal latency inference",
    ],
    technicalArchitecture: [
      "Input stream capture via OpenCV video pipeline",
      "Inference engine driven by YOLO11 detection weights",
      "Compliance scoring logic & alert telemetry event emitter",
    ],
  },
  {
    id: "lane-violation",
    number: "02",
    title: "Smart Lane Violation Detection and Recognition System",
    category: "Intelligent Transportation",
    subtitle: "Automated Traffic Surveillance & Trajectory Tracking",
    statusBadge: "Vision Pipeline Exploration",
    description:
      "A computer-vision-driven traffic intelligence prototype designed to identify lane discipline breaches, unlawful overtaking, and vehicle trajectory tracking from roadway video feeds.",
    longDescription:
      "Traffic violations cause severe congestion and accidents. This project concept examines video processing algorithms to map virtual lane boundaries, track multi-object vehicle trajectories across consecutive frames, and flag unlawful lane crossings automatically.",
    tags: ["Python", "OpenCV", "Object Tracking", "Computer Vision", "Edge AI"],
    accentColor: "emerald",
    githubUrl: "https://github.com/vyasmishra735?tab=repositories",
    isGithubPlaceholder: true,
    demoUrl: null,
    keyHighlights: [
      "Dynamic lane boundary line mapping via edge detection and perspective transforms",
      "Centroid and Kalman filter based multi-vehicle tracking across frames",
      "Vector trajectory calculation to flag abrupt or illegal lane deviations",
    ],
    technicalArchitecture: [
      "Region of interest (ROI) selection and camera calibration matrix",
      "Vehicle bounding box tracking with unique entity identifiers",
      "Timestamped event log generation for compliance review",
    ],
  },
  {
    id: "tumour-delineation",
    number: "03",
    title: "Automated Tumour Delineation System",
    category: "Biomedical AI",
    subtitle: "Deep Learning Medical Image Boundary Segmentation",
    statusBadge: "Research Exploration",
    description:
      "An AI-assisted biomedical image segmentation concept exploring deep learning boundary delineation to assist in identifying and isolating tumour margins from medical imaging scans.",
    longDescription:
      "Accurate delineation of tumour margins is vital for radiation therapy and surgical planning. This project examines convolutional segmentation architectures (such as U-Net paradigms) to separate anomalous tissue structures from surrounding healthy anatomical matter in diagnostic scans.",
    tags: ["Deep Learning", "Computer Vision", "Image Segmentation", "Python", "Medical AI"],
    accentColor: "gold",
    githubUrl: "https://github.com/vyasmishra735?tab=repositories",
    isGithubPlaceholder: true,
    demoUrl: null,
    keyHighlights: [
      "Volumetric scan slice preprocessing and contrast-enhancement normalization",
      "Pixel-level semantic segmentation masks for lesion boundary identification",
      "Dice coefficient and IoU (Intersection over Union) performance benchmarking",
    ],
    technicalArchitecture: [
      "DICOM/NIfTI slice normalization and artifact reduction filters",
      "Encoder-decoder segmentation feature map extraction",
      "Contour extraction and volumetric margin quantification",
    ],
  },
];

/**
 * EDUCATION TIMELINE
 * Strictly verified details with editable placeholder for Diploma institution.
 */
export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Maharana Pratap Institute of Technology",
    location: "Gorakhpur, Uttar Pradesh",
    status: "In Progress / Active Student",
    description:
      "Studying core computer science disciplines including data structures, algorithmic analysis, object-oriented programming, database management systems, artificial intelligence, and operating systems.",
    highlights: [
      "Focus on practical software architecture and algorithm implementation",
      "Independent exploration of machine learning and computer vision frameworks",
      "Collaborative project coursework and peer code reviews",
    ],
    isVerified: true,
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "[Institution Name - Editable Placeholder]",
    location: "Uttar Pradesh, India",
    status: "Completed",
    description:
      "Acquired comprehensive grounding in electrical circuit theory, power systems, analog and digital electronics, microcontroller fundamentals, and systematic diagnostic methodologies.",
    highlights: [
      "Strong hardware logic and physical systems intuition",
      "Mathematical analysis, signal processing foundations, and circuit troubleshooting",
      "Seamless transition from physical electrical engineering to software systems",
    ],
    isInstitutionPlaceholder: true,
    isVerified: true,
  },
];

/**
 * WHAT I EXPLORE
 * Current technical curiosity and research areas.
 */
export const explorationAreas = [
  {
    number: "01",
    title: "Artificial Intelligence & Machine Learning",
    summary:
      "Deepening intuition around neural network architectures, modern training paradigms, multimodal reasoning models, and deploying lightweight models for practical problem solving.",
    topics: ["Neural Networks", "Inference Optimization", "Multimodal Reasoning", "Model Evaluation"],
    icon: "Brain",
  },
  {
    number: "02",
    title: "Computer Vision & Object Detection",
    summary:
      "Experimenting with high-speed object detection pipelines, real-time edge streaming, segmentation masks, and spatial coordinate tracking across dynamic video streams.",
    topics: ["YOLO11", "OpenCV", "Feature Extraction", "Visual Tracking"],
    icon: "Scan",
  },
  {
    number: "03",
    title: "Intelligent Monitoring Systems",
    summary:
      "Designing end-to-end architectures that bridge video feeds with automated telemetry, alert triggers, and compliance verification in safety and transportation domains.",
    topics: ["Real-time Telemetry", "Safety Compliance", "Automated Alerts", "Event Logging"],
    icon: "ShieldAlert",
  },
  {
    number: "04",
    title: "Modern Frontend Development",
    summary:
      "Crafting performant, accessible, and aesthetically arresting web applications using React, motion design principles, and responsive layout architectures.",
    topics: ["React.js", "Framer Motion", "GSAP ScrollTrigger", "Modern CSS & UX"],
    icon: "Layout",
  },
  {
    number: "05",
    title: "DevOps & Containerization",
    summary:
      "Exploring containerized application packaging with Docker, reproducible development environments on Linux/Ubuntu, and clean version control practices.",
    topics: ["Docker", "Linux / CLI", "Git Architecture", "Reproducible Builds"],
    icon: "Cpu",
  },
];

/**
 * QUICK INSTRUCTIONS FOR VYAS
 * Clear guidance on how to customize links and email in this project.
 */
export const customizationNotes = {
  linkedInInstruction:
    "To add your real LinkedIn URL, open `src/data/portfolioData.js` and update `personalInfo.linkedinUrl`.",
  emailInstruction:
    "To add your real email address, open `src/data/portfolioData.js` and update `personalInfo.email`.",
  diplomaInstruction:
    "To set your diploma institution name, update `educationData[1].institution` in `src/data/portfolioData.js`.",
  projectsInstruction:
    "To link your real project GitHub repositories, update `projectsData[i].githubUrl` with your GitHub repo URLs.",
};
