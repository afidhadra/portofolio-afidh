import ProjectCard from "@/app/components/ProjectCard";
import { getTranslationsWithFallback } from "@/lib/utils";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration with Stripe, and admin dashboard.",
    link: "https://example.com/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    link: "https://example.com/taskapp",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather and forecasts using OpenWeatherMap API, with beautiful data visualizations.",
    link: "https://example.com/weather",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and optimized performance.",
    link: "https://example.com/portfolio",
  },
  {
    title: "Blog Platform",
    description: "A headless CMS blog platform with Markdown support, SEO optimization, and fast loading times using Next.js and MDX.",
    link: "https://example.com/blog",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard for managing multiple social media accounts with analytics, scheduling posts, and engagement tracking.",
    link: "https://example.com/social",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return {
    title: `${t('navigation.projects')} | ${t('hero.name')}'s Portfolio`,
    description: t('projects.subtitle'),
  };
}

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together? Let&apos;s discuss your project!
          </p>
        </div>
      </div>
    </div>
  );
}