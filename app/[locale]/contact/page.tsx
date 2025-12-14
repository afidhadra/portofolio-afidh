import ContactForm from "@/app/components/ContactForm";
import { getTranslationsWithFallback } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return {
    title: `${t('navigation.contact')} | ${t('hero.name')}'s Portfolio`,
    description: t('contact.subtitle'),
  };
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.connectTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              feel free to reach out. I&apos;m always open to discussing new opportunities and interesting ideas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:afidh12@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    afidh12@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🐙</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                  <a href="https://github.com/afidh" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/afidh
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💼</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                  <a href="https://linkedin.com/in/afidh-adra" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/afidh-adra
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Muara Bungo, Jambi</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}