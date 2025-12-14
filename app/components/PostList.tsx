interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.slug} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            <a href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {post.title}
            </a>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
          <a
            href={`/blog/${post.slug}`}
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Read more →
          </a>
        </article>
      ))}
    </div>
  );
}