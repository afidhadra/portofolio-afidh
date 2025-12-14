import PostList from "@/app/components/PostList";
import { getSortedPostsData } from "@/lib/posts";
import { getTranslationsWithFallback } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const t = await getTranslationsWithFallback(locale);
  
  return {
    title: `${t('navigation.blog')} | ${t('hero.name')}'s Portfolio`,
    description: t('blog.readMore'),
  };
}

export default function Blog() {
  const posts = getSortedPostsData();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}