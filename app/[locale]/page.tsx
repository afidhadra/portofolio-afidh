import Hero from "@/app/components/Hero";

export default async function Home({ params }: { params?: Promise<{ locale?: string }> } = {}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  return <Hero locale={locale} />;
}
