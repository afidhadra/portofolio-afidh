import { getTranslationsWithFallback } from "@/lib/utils";
import Button from "./ui/Button";

export default async function Hero({ locale }: { locale?: string }) {
  const resolvedLocale = locale || 'en';
  const t = await getTranslationsWithFallback(resolvedLocale);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
          {t('hero.greeting')} <span className="text-blue-600 dark:text-blue-400">{t('hero.name')}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          {t('hero.role')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none">
          <Button variant="primary" href={`/${resolvedLocale}/projects`} className="w-full sm:w-auto">
            {t('hero.viewWork')}
          </Button>
          <Button variant="outline" href={`/${resolvedLocale}/contact`} className="w-full sm:w-auto">
            {t('hero.getInTouch')}
          </Button>
        </div>
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}