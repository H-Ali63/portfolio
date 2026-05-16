import type { ComponentType } from "react";
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import AIWork from '@/components/sections/AIWork';
import Achievements from '@/components/sections/Achievements';
import GitHubActivity from '@/components/sections/GitHubActivity';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import Contact from '@/components/sections/Contact';
import { profile } from "@/data/profile";
import type { SectionId } from "@/types";

const sections: Record<SectionId, ComponentType> = {
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  "ai-work": AIWork,
  achievements: Achievements,
  github: GitHubActivity,
  testimonials: Testimonials,
  writing: BlogPreview,
  contact: Contact,
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    url: profile.seo.siteUrl,
    image: `${profile.seo.siteUrl}${profile.avatar}`,
    sameAs: [
      "https://github.com/H-Ali63",
      "https://linkedin.com/in/md-haidar-ali-733464218/",
      "https://leetcode.com/haidardriems/",
    ],
    knowsAbout: profile.seo.keywords,
  };

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {profile.sectionOrder.map((sectionId) => {
        const Section = sections[sectionId];
        return Section ? <Section key={sectionId} /> : null;
      })}
    </main>
  );
}
