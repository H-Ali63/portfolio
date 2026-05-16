export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "ai-work"
  | "achievements"
  | "github"
  | "testimonials"
  | "writing"
  | "contact";

export type SocialPlatform = "github" | "linkedin" | "email" | "twitter" | "website" | "leetcode" | "phone";

export type SocialLink = {
  label: string;
  href: string;
  platform: SocialPlatform;
  ariaLabel: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  title: string;
  roles: string[];
  intro: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resume: string;
  availability: string;
  sectionOrder: SectionId[];
  metrics: Metric[];
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
  };
  about: {
    headline: string;
    paragraphs: string[];
    experienceOverview: string;
    careerGoals: string[];
  };
  contact: {
    headline: string;
    description: string;
    formEndpoint?: string;
  };
};

export type Skill = {
  name: string;
  level: number;
  keywords: string[];
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  skills: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
};

export type ProjectCategory = "Backend" | "AI/ML" | "Cloud" | "Full Stack";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  outcomes: string[];
};

export type AIWorkItem = {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  stack: string[];
};

export type AchievementType = "Certification" | "Education" | "Award" | "Leadership" | "Open Source";

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  type: AchievementType;
  description: string;
  link?: string;
};

export type ContributionWeek = {
  week: string;
  days: number[];
};

export type GitHubProfile = {
  username: string;
  url: string;
  highlights: Metric[];
  contributionWeeks: ContributionWeek[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  tags: string[];
};
