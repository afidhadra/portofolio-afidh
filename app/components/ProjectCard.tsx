interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  category?: string;
  featured?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group h-full p-8 border rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] animate-slide-up min-h-[400px] flex flex-col relative ${
      project.featured ? 'border-blue-300 dark:border-blue-600 shadow-blue-500/10' : 'border-gray-200 dark:border-gray-700'
    } hover:shadow-blue-500/10`}>
      {project.featured && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ⭐ Featured
        </div>
      )}
      <div className="flex-1 mb-6">
        {project.category && (
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-4 border border-blue-200 dark:border-blue-800">
            {project.category}
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {project.description}
        </p>
        {project.technologies && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto">
        <a
          href={project.link}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold transform hover:scale-105 shadow-md hover:shadow-lg group/btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}