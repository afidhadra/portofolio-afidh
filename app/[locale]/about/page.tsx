import { getTranslationsWithFallback } from "@/lib/utils";
import Link from "next/link";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

interface WorkExperienceItem {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface SkillCategory {
  name: string;
  items: Array<{name: string; level: string}>;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return {
    title: `${t('navigation.about')} | ${t('hero.name')}'s Portfolio`,
    description: t('about.description'),
  };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Short Bio */}
        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.shortBio')}
          </p>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">{t('about.education.title')}</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {t.raw('about.education.items').map((item: EducationItem, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{item.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">{t('about.workExperience.title')}</h2>
          <div className="space-y-6">
            {t.raw('about.workExperience.items').map((item: WorkExperienceItem, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{item.period}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">{t('about.skills.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.raw('about.skills.categories').map((category: SkillCategory, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill: {name: string; level: string}, skillIndex: number) => (
                    <li key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        skill.level === 'Expert' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        skill.level === 'Advanced' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        skill.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">{t('about.certifications.title')}</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {t.raw('about.certifications.items').map((cert: CertificationItem, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">{t('about.contact.title')}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`https://wa.me/${t('about.contact.whatsapp').replace(/\D/g, '')}`} 
               className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
               target="_blank" rel="noopener noreferrer">
              <span className="mr-2">📱</span> WhatsApp
            </a>
            <a href={`mailto:${t('about.contact.email')}`} 
               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="mr-2">✉️</span> Email
            </a>
          </div>
          <Link href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('contact.title')}
          </Link>
        </div>
      </div>
    </div>
  );
}