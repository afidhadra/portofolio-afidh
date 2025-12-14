import ProjectCard from "@/app/components/ProjectCard";
import { getTranslationsWithFallback } from "@/lib/utils";

const projects = [
  {
    title: "E-Kelurahan Kota Padang",
    description: "A comprehensive administrative system for kelurahan (sub-district) management in Kota Padang. Built with Vue.js, TypeScript, and modern web technologies to streamline administrative processes, document management, and citizen services.",
    link: "https://kelurahan.padang.go.id",
    technologies: ["Vue.js", "TypeScript", "API Integration", "Database Management"],
    category: "Government Web Application"
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