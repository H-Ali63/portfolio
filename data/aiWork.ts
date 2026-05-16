import type { AIWorkItem } from "@/types";

export const aiWork: AIWorkItem[] = [
  {
    eyebrow: "Generative AI",
    title: "Production AI Microservices",
    description:
      "AI-powered backend services that integrate OpenAI, Anthropic, and Hugging Face models into product workflows.",
    capabilities: ["Model integration", "Prompt workflows", "Response validation", "Service APIs"],
    stack: ["OpenAI", "Anthropic", "Hugging Face", "FastAPI"],
  },
  {
    eyebrow: "NLP Systems",
    title: "Healthcare NLP and Summarization",
    description:
      "Prescription understanding workflows that combine OCR, clinical entity extraction, summarization, and fallback logic.",
    capabilities: ["Entity extraction", "Summarization", "Classification", "Q&A prompts"],
    stack: ["Google Cloud Vision", "Healthcare NLP", "Claude", "FHIR"],
  },
  {
    eyebrow: "OCR",
    title: "Prescription Digitization",
    description:
      "Cloud-backed OCR processing for medical prescriptions with clinical extraction, validation, and pharmacy fulfillment workflows.",
    capabilities: ["OCR processing", "Clinical fields", "Patient confirmation", "Delivery tracking"],
    stack: ["Python", "FastAPI", "MongoDB", "Firestore"],
  },
  {
    eyebrow: "Backend Intelligence",
    title: "Analytics and ML-backed APIs",
    description:
      "Analytics and machine learning microservices wired into backend APIs to improve automation and product decision-making.",
    capabilities: ["Product analytics", "API integration", "Logging", "Versioned prompts"],
    stack: ["Node.js", "Express.js", "MongoDB", "Docker"],
  },
];
