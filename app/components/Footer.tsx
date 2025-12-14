import { getTranslationsWithFallback } from "@/lib/utils";

export default async function Footer({ locale }: { locale?: string }) {
  const resolvedLocale = locale || 'en';
  const t = await getTranslationsWithFallback(resolvedLocale);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('footer.description')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              📍 {t('footer.location')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href={`/${resolvedLocale}/about`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">👤</span>{t('navigation.about')}</a></li>
              <li><a href={`/${resolvedLocale}/projects`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">💼</span>{t('navigation.projects')}</a></li>
              <li><a href={`/${resolvedLocale}/blog`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">📝</span>{t('navigation.blog')}</a></li>
              <li><a href={`/${resolvedLocale}/contact`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">📧</span>{t('navigation.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
                🐙
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
                💼
              </a>
              <a href={`https://wa.me/${t('about.contact.whatsapp').replace(/\D/g, '')}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
                📱
              </a>
              <a href={`mailto:${t('about.contact.email')}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
                ✉️
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-300">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}