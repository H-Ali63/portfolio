import {
  Award,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Network,
  Phone,
  Rocket,
  Server,
  Sparkles,
  Twitter,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  award: Award,
  brain: Brain,
  briefcase: BriefcaseBusiness,
  check: CheckCircle2,
  cloud: Cloud,
  code: Code2,
  database: Database,
  external: ExternalLink,
  github: Github,
  globe: Globe,
  linkedin: Linkedin,
  email: Mail,
  leetcode: Code2,
  network: Network,
  phone: Phone,
  rocket: Rocket,
  server: Server,
  sparkles: Sparkles,
  twitter: Twitter,
  website: Globe,
};

export type IconName = keyof typeof iconMap;

export default function Icon({ name, ...props }: LucideProps & { name: string }) {
  const LucideIcon = iconMap[name as IconName] ?? Sparkles;
  return <LucideIcon aria-hidden="true" {...props} />;
}
