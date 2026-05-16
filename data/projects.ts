import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bitebuddie-food-delivery",
    title: "Bitebuddie Food Delivery",
    category: "Backend",
    description:
      "Food delivery mobile application backend with microservices, live order tracking, and secure role-based access.",
    longDescription:
      "Architected a scalable microservices platform for a food ordering ecosystem with API gateway patterns, service discovery, Kafka-backed event processing, MongoDB sharding, and Socket.io real-time order updates.",
    image: "/assets/project-api.svg",
    techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "Kafka"],
    githubUrl: "https://github.com/H-Ali63",
    featured: true,
    outcomes: ["20+ independent services", "Real-time order tracking", "JWT and OTP-based RBAC"],
  },
  {
    id: "healthism-healthcare-platform",
    title: "Healthism Healthcare Platform",
    category: "AI/ML",
    description:
      "Healthcare platform with prescription digitization, AI summarization, appointment workflows, and secure data services.",
    longDescription:
      "Built healthcare microservices for prescription OCR, clinical entity extraction, summarization, appointment management, FHIR-aware data handling, pharmacy fulfillment, and secure multi-stakeholder access.",
    image: "/assets/project-ocr.svg",
    techStack: ["Node.js", "FastAPI", "MongoDB", "Firestore", "Google Cloud Vision", "Claude"],
    githubUrl: "https://github.com/H-Ali63",
    featured: true,
    outcomes: ["Reduced manual review", "Clinical entity extraction", "FHIR-aligned storage"],
  },
  {
    id: "glass-measurement-desktop",
    title: "Glass Measurement Desktop App",
    category: "Full Stack",
    description:
      "Python desktop application for glass measurement calculations, reporting, and bulk data workflows.",
    longDescription:
      "Improved a PyQt6 desktop application with MongoDB persistence, Excel import/export, real-time unit conversion, cost and area calculations, historical reporting, and editable data tables.",
    image: "/assets/project-console.svg",
    techStack: ["Python", "PyQt6", "MongoDB", "Excel Integration", "Data Validation"],
    githubUrl: "https://github.com/H-Ali63",
    featured: true,
    outcomes: ["Automated calculations", "Excel reporting", "Batch update workflows"],
  },
];
