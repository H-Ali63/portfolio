import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    summary: "Node.js, Python, APIs, auth, real-time services, and backend delivery.",
    skills: [
      { name: "Node.js / Express.js", level: 92, keywords: ["RESTful API", "Socket.io"] },
      { name: "Python / FastAPI", level: 88, keywords: ["AI services", "automation"] },
      { name: "JavaScript / Java", level: 84, keywords: ["services", "backend"] },
      { name: "JWT / RBAC", level: 86, keywords: ["auth", "OTP verification"] },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    icon: "brain",
    summary: "Applied AI, healthcare NLP, OCR, prompt workflows, and model-backed services.",
    skills: [
      { name: "OpenAI / Anthropic", level: 87, keywords: ["LLMs", "prompt engineering"] },
      { name: "Hugging Face", level: 84, keywords: ["NLP", "model integration"] },
      { name: "Google Cloud Vision", level: 82, keywords: ["OCR", "clinical extraction"] },
      { name: "TensorFlow / PyTorch", level: 80, keywords: ["modeling", "deployment"] },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud/DevOps",
    icon: "cloud",
    summary: "Cloud deployment, containers, API gateways, CI/CD, and event-driven systems.",
    skills: [
      { name: "AWS", level: 84, keywords: ["EC2", "S3", "EKS"] },
      { name: "Google Cloud Platform", level: 84, keywords: ["Vision", "Firestore"] },
      { name: "Docker / Kubernetes", level: 82, keywords: ["containers", "scaling"] },
      { name: "Kafka / Kong", level: 80, keywords: ["eventing", "API gateway"] },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    summary: "Document, relational, cache, and cloud databases for production workflows.",
    skills: [
      { name: "MongoDB", level: 90, keywords: ["sharding", "data modeling"] },
      { name: "Firestore", level: 82, keywords: ["healthcare data", "cloud"] },
      { name: "MySQL / Oracle SQL", level: 78, keywords: ["queries", "schema"] },
      { name: "Redis / SQLite", level: 78, keywords: ["cache", "local storage"] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    summary: "Frontend and desktop interfaces for operational tools and user workflows.",
    skills: [
      { name: "React.js / TypeScript", level: 82, keywords: ["web UI", "components"] },
      { name: "HTML / CSS", level: 86, keywords: ["responsive UI", "layouts"] },
      { name: "Vue.js / Django", level: 74, keywords: ["full stack", "apps"] },
      { name: "Tkinter / PyQt6", level: 78, keywords: ["desktop apps", "tools"] },
    ],
  },
];
