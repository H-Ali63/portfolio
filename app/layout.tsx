import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import Providers from '@/components/common/Providers';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollProgress from '@/components/common/ScrollProgress';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(profile.seo.siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.name}`,
  },
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    url: profile.seo.siteUrl,
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: '/assets/og-image.svg', width: 1200, height: 630, alt: `${profile.name} portfolio preview` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    images: ['/assets/og-image.svg'],
  },
  icons: { icon: '/assets/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <Providers>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
