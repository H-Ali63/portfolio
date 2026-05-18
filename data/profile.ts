import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Md Haidar Ali",
  title: "Machine Learning and Backend Engineer",
  roles: [
    "Machine Learning Engineer",
    "Backend Engineer",
    "AI Engineer",
    "LLM Application Developer",
    "Microservices Builder",
  ],
  intro:
    "I build LLM-powered backend platforms, real-time systems, and cloud-deployed services that turn product workflows into reliable software.",
  bio:
    "Machine Learning and Backend Engineer with 2+ years building LLM-powered, microservices-based platforms across Node.js, Python, FastAPI, MongoDB, Kafka, AWS, and GCP.",
  location: "Navi Mumbai, India",
  email: "haidar.ali.npg@gmail.com",
  phone: "+91-8200030659",
  avatar: "/assets/profile.jpeg",
  resume: "/assets/resume.pdf",
  availability: "Open to Software Development, Machine Learning, Backend, and Applied AI roles",
  sectionOrder: [
    "hero",
    "about",
    "skills",
    "experience",
    "projects",
    "ai-work",
    "achievements",
    "github",
    "contact",
  ],
  metrics: [
    { label: "Years of experience", value: "2+" },
    { label: "Services architected", value: "20+" },
    { label: "Engagement lift", value: "50%" },
    { label: "Cloud platforms", value: "AWS/GCP" },
  ],
  seo: {
    siteUrl: "https://backend-ai-portfolio.vercel.app",
    title: "Md Haidar Ali | Machine Learning and Backend Engineer",
    description:
      "Portfolio of Md Haidar Ali, a Machine Learning and Backend Engineer building LLM-powered microservices, cloud APIs, healthcare NLP workflows, and real-time systems.",
    keywords: [
      "Md Haidar Ali",
      "Machine Learning Engineer",
      "Backend Engineer",
      "AI Engineer",
      "Node.js",
      "FastAPI",
      "Microservices",
      "Kafka",
      "Next.js Portfolio",
      "Cloud",
      "Healthcare NLP",
    ],
  },
  about: {
    headline: "I build backend and machine learning systems with measurable product impact.",
    paragraphs: [
      "My work centers on scalable APIs, microservices, authentication, real-time communication, and database-backed workflows for production web and mobile products.",
      "On the AI side, I build practical integrations across OpenAI, Anthropic, Hugging Face, Google Cloud Vision, and healthcare NLP, with prompt workflows, validation, and cloud deployments in mind.",
    ],
    experienceOverview:
      "Across food delivery and healthcare platforms, I have delivered Node.js, Python, FastAPI, MongoDB, Kafka, Docker, Kubernetes, AWS, and GCP systems from implementation through deployment.",
    careerGoals: [
      "Build AI-backed products that are useful, measurable, and practical to operate",
      "Own backend systems where security, scalability, and developer experience all matter",
      "Turn ML prototypes and prompt workflows into services teams can trust in production",
    ],
  },
  contact: {
    headline: "Let us build reliable AI-backed systems together.",
    description:
      "For backend engineering, machine learning, LLM integration, or cloud API roles, send a note and I will reply with context.",
    formEndpoint: "",
  },
};
