import ProjectCard from "@/app/components/ProjectCard";
import { getTranslationsWithFallback } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  category?: string;
  featured?: boolean;
}

const projects = [
  {
    title: "E-Kelurahan Kota Padang",
    description: "A comprehensive administrative system for kelurahan (sub-district) management in Kota Padang. Built with Vue.js, TypeScript, and modern web technologies to streamline administrative processes, document management, and citizen services.",
    link: "https://kelurahan.padang.go.id",
    technologies: ["Vue.js", "TypeScript", "API Integration", "Database Management"],
    category: "Government Web Application",
    featured: true
  },
  {
    title: "Website PUPR Kota Padang",
    description: "Official website for the Public Works and Spatial Planning Department of Kota Padang. Features responsive design, public information portal, project showcase, and integrated administrative systems for better public service delivery.",
    link: "https://pupr.padang.go.id",
    technologies: ["Vue.js", "TypeScript", "Responsive Design", "Content Management"],
    category: "Government Website"
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
      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('projects.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
          <p className="text-base text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Showcasing real-world solutions built for government institutions and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Interested in working together? Let&apos;s discuss your project!
          </p>
        </div>
      </div>
    </div>
  );
}