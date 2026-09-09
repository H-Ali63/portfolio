import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    summary: "Production APIs, authentication, real-time services, and backend delivery.",
    skills: [
      { name: "Python / Node.js", level: 92, keywords: ["TypeScript", "Java"] },
      { name: "Django / FastAPI / Flask", level: 88, keywords: ["RESTful API", "services"] },
      { name: "Express.js / Socket.io", level: 86, keywords: ["real-time", "websockets"] },
      { name: "JWT / RBAC / Kong", level: 86, keywords: ["auth", "API gateway"] },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    icon: "brain",
    summary: "LLM services, healthcare NLP, OCR, prompt workflows, and model-backed systems.",
    skills: [
      { name: "OpenAI / Anthropic", level: 87, keywords: ["GPT", "Claude", "prompt engineering"] },
      { name: "Hugging Face / scikit-learn", level: 84, keywords: ["NLP", "model integration"] },
      { name: "TensorFlow / PyTorch", level: 80, keywords: ["modeling", "deployment"] },
      { name: "Healthcare NLP / OCR", level: 82, keywords: ["FHIR", "clinical extraction"] },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud/DevOps",
    icon: "cloud",
    summary: "Cloud deployment, containers, CI/CD, API gateways, and event-driven systems.",
    skills: [
      { name: "AWS / GCP / Oracle Cloud", level: 84, keywords: ["EC2", "S3", "Firestore"] },
      { name: "Docker / Kubernetes", level: 82, keywords: ["containers", "scaling"] },
      { name: "Terraform / GitHub Actions", level: 80, keywords: ["IaC", "CI/CD"] },
      { name: "Apache Kafka / Nginx", level: 80, keywords: ["eventing", "delivery"] },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    summary: "Document, relational, cache, and cloud databases for production workflows.",
    skills: [
      { name: "MongoDB", level: 90, keywords: ["sharding", "data modeling"] },
      { name: "PostgreSQL / MySQL / Oracle", level: 82, keywords: ["queries", "schema"] },
      { name: "Firestore / SQLite", level: 80, keywords: ["healthcare data", "cloud"] },
      { name: "Redis", level: 78, keywords: ["cache", "sessions"] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    summary: "Web and desktop interfaces for operational tools and user workflows.",
    skills: [
      { name: "React.js / TypeScript", level: 82, keywords: ["web UI", "components"] },
      { name: "HTML / CSS", level: 86, keywords: ["responsive UI", "layouts"] },
      { name: "Vue.js", level: 74, keywords: ["full stack", "apps"] },
      { name: "PyQt6", level: 78, keywords: ["desktop apps", "tools"] },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "layers",
    summary: "System design patterns for dependable, secure, and maintainable platforms.",
    skills: [
      { name: "Microservices", level: 88, keywords: ["service discovery", "scalability"] },
      { name: "Event-driven architecture", level: 84, keywords: ["Kafka", "async workflows"] },
      { name: "FHIR standards", level: 76, keywords: ["healthcare", "interoperability"] },
      { name: "Communication & leadership", level: 82, keywords: ["presentations", "client meetings"] },
    ],
  },
];
