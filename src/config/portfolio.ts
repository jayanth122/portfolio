export const portfolio = {
  // ----------------------------------------------------------
  // Personal Info
  // ----------------------------------------------------------
  name: "Jayanth Chennupati",
  initials: "JC",
  role: "Full Stack Developer",
  location: "Toronto, Ontario",
  bio: "I work across the stack with technologies like React, Angular, Node.js, Spring Boot, Azure, and CI/CD tools. I’m especially interested in AI-powered systems, including LLMs, RAG-based chatbots, and applications that make information easier to access and use. I care about building software that is clean, maintainable, secure, and practical. Whether it’s a frontend feature, backend API, or AI-driven tool, I enjoy turning complex problems into simple and dependable solutions.",
  shortBio: "Full Stack Developer based in Toronto, building clean and performant web experiences.",
  avatar: "/avatar.jpg",

  // ----------------------------------------------------------
  // Contact & Social
  // ----------------------------------------------------------
  email: "jayanthchennupati2000@gmail.com",
  github: "https://github.com/jayanth122",
  linkedin: "https://www.linkedin.com/in/jayanth-chennupati/",

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "HTML5",
    "CSS3",
    "Bash",
    "JSON",
    "React",
    "Angular",
    "Next.js",
    "Tailwind CSS",
    "NgRx",
    "Express.js",
    "Microservices",
    "REST APIs",
    "Spring Boot",
    "JUnit",
    "Jasmine",
    "Karma",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Lombok",
    "Git",
    "CI/CD",
    "Jenkins",
    "Jira",
    "Confluence",
    "Postman",
    "PyCharm",
    "IntelliJ",
    "Eclipse",
    "MongoDB",
    "Kanban",
    "Microsoft Azure",
    "AWS",
    "GCP",
  ],

  // Tech stack logos shown in the animated strip (name + icon key)
  techStack: [
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "SQL" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Bash" },
    { name: "JSON" },
    { name: "React" },
    { name: "Angular" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "NgRx" },
    { name: "Express.js" },
    { name: "Microservices" },
    { name: "REST APIs" },
    { name: "Spring Boot" },
    { name: "JUnit" },
    { name: "Jasmine" },
    { name: "Karma" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "Scikit-Learn" },
    { name: "Lombok" },
    { name: "Git" },
    { name: "CI/CD" },
    { name: "Jenkins" },
    { name: "Jira" },
    { name: "Confluence" },
    { name: "Postman" },
    { name: "PyCharm" },
    { name: "IntelliJ" },
    { name: "Eclipse" },
    { name: "MongoDB" },
    { name: "Kanban" },
    { name: "Microsoft Azure" },
    { name: "AWS" },
    { name: "GCP" },
  ],

  // ----------------------------------------------------------
  // Projects
  // ----------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "DocBot",
      description:
        "DocBot is a full-stack document intelligence application designed to enable users to interact conversationally with their own uploaded PDF documents. The system implements a Retrieval-Augmented Generation (RAG) architecture to ensure that responses are grounded strictly in user-provided content, reducing hallucination risk and improving contextual accuracy.",
      image: "/projects/docubot.jpg",
      tech: ["Next.js", "Flask", "LLM", "RAG", "Supabase", "Pinecone", "LLM"],
      github: "https://github.com/jayanth122/DocBot",
      live: "https://doc-bot-d3m0.vercel.app/",
      category: "Web",
      featured: true,
    },
    {
      id: 2,
      title: "Executive Email Assistant",
      description:
        "An AI-powered assistant that reads, classifies, and responds to emails with contextual actions like scheduling meetings, checking calendar availability, and sending priority summaries.",
      image: "/projects/executive-email-assistant.jpg",
      tech: [
        "Python",
        "LangChain",
        "LLaMA3",
        "Groq",
        "Google Calendar API",
      ],
      github: "https://github.com/jayanth122/executive-email-assistant",
      live: "",
      category: "AI/ML",
      featured: true,
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce storefront with product filtering, cart management, and Stripe checkout. Fully responsive with optimized performance.",
      image: "/projects/ecommerce.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/jayanth122/ecommerce",
      live: "",
      category: "Web",
      featured: false,
    },
    {
      id: 4,
      title: "AI Chatbot Angular UI",
      description:
        "A UI-focused Angular 17 chatbot interface built with Angular CLI for managing conversational workflows and chatbot content in a CMS-style experience.",
      image: "/projects/chatbot-cms.jpg",
      tech: ["Angular", "TypeScript", "Angular CLI", "Karma"],
      github: "https://github.com/jayanth122/ChatbotCMS",
      live: "",
      category: "UI",
      featured: false,
    },
    {
      id: 5,
      title: "TBD Bank",
      description:
        "A modern banking application with secure transactions, account management, and real-time notifications built with React Native.",
      image: "/projects/banking-app.jpg",
      tech: ["React Native", "Expo", "Firebase", "TypeScript"],
      github: "https://github.com/jayanth122/banking-app",
      live: "",
      category: "Web",
      featured: true,
    },
    {
      id: 6,
      title: "Sentiment Analysis on IMDB Movie Reviews",
      description:
        "A natural language processing project that classifies IMDB movie reviews as positive or negative using text preprocessing, vectorization, and supervised learning models.",
      image: "/projects/imdb-sentiment.jpg",
      tech: ["Python", "Jupyter Notebook", "NLP", "Scikit-learn"],
      github:
        "https://github.com/jayanth122/Sentiment-Analysis-on-IMDB-Movie-Reviews",
      live: "",
      category: "AI/ML",
      featured: false,
    },
    {
      id: 7,
      title: "Image Classification using CNN",
      description:
        "A deep learning project for image classification using convolutional neural networks, including model training, evaluation, and performance analysis.",
      image: "/projects/cnn-image-classification.jpg",
      tech: ["Python", "Jupyter Notebook", "CNN", "TensorFlow"],
      github: "https://github.com/jayanth122/Image-Classification-using-CNN",
      live: "",
      category: "AI/ML",
      featured: false,
    },
    {
      id: 8,
      title: "Secure Pharmacy Management Software",
      description:
        "A secure Java-based pharmacy inventory platform with encrypted SQL data storage, real-time stock tracking, automated low-stock ordering, and detailed reporting for operational insights.",
      image: "/projects/secure-pharmacy.jpg",
      tech: ["Java", "SQL", "Encryption", "Inventory Management"],
      github:
        "https://github.com/jayanth122/Secure-pharmacy-managment-software",
      live: "",
      category: "Desktop",
      featured: false,
    },
  ],

  // ----------------------------------------------------------
  // Experience
  // ----------------------------------------------------------
  experience: [
    {
      logo: "/manulife.jpg",
      company: "Manulife",
      role: "Associate Full-stack Developer",
      period: "Jul 2025 — Present",
      location: "Toronto, Canada",
      description:
        "Built an internal AI advisor-assist chatbot tool, delivering full-stack features across frontend and backend APIs, shaping architecture, and implementing RAG/LLM workflows with strong reliability and incident support practices.",
      tech: [
        "React",
        "Node.js",
        "Java",
        "Spring Boot",
        "RAG",
        "LLM",
        "Jenkins",
        "AKS",
        "Jira",
        "Confluence",
      ],
    },
    {
      logo: "/fdm.jpg",
      company: "FDM Group",
      role: "IT Consultant",
      period: "Oct 2024 — Jun 2025",
      location: "Toronto, Canada",
      description:
        "Developed internal retail applications with Spring Boot and React, shipping full-stack features end-to-end and helping drive a left-shift security approach through Snyk enforcement in team workflows.",
      tech: [
        "React",
        "Java",
        "Spring Boot",
        "Node.js",
        "MongoDB",
        "Snyk",
        "Agile",
      ],
    },
    {
      logo: "/ai_focal.jpg",
      company: "AI Focal Inc.",
      role: " Full Stack Developer",
      period: "Sept 2023 — Feb 2024",
      location: "Mississauga, Canada",
      description:
        "Built an AI chatbot CMS platform with React and Express.js, integrating secure context-aware LLM pipelines and defining scalable frontend-backend architecture and API contracts.",
      tech: ["React", "Express.js", "LLM", "API Design", "TypeScript"],
    },
    {
      logo: "/lgsi.jpg",
      company: "LGSI",
      role: "Software Engineer Intern",
      period: "Sep 2021 - Dec 2021",
      location: "Remote",
      description:
        "Built and showcased a prototype webOS application for LG Smart TVs that recognized remote-based hand gestures to control key TV functions, including volume adjustment, channel navigation, and input switching, as part of my internship project.",
      tech: ["webOS", "JavaScript", "React", "Gesture Recognition"],
    }
  ],

  // ----------------------------------------------------------
  // Education
  // ----------------------------------------------------------
  education: [
    {
      logo: "/uw.jpg",
      institution: "University of Waterloo",
      degree: "Master of Engineering in Software Engineering",
      period: "2022 — 2024",
      description:
        "Graduated with distinction, specializing in Software Engineering.",
    },
    {
      logo: "/vit.jpg",
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology in Computer Science",
      period: "2018 — 2022",
      description:
        "Graduated with honors, specializing in Network Engineering.",
    },
  ],

  // ----------------------------------------------------------
  // Project filter categories
  // ----------------------------------------------------------
  categories: ["All", "Web", "UI", "AI/ML", "Desktop"],
} as const;

export type Project = typeof portfolio.projects[number];
export type Experience = typeof portfolio.experience[number];
export type Education = typeof portfolio.education[number];
