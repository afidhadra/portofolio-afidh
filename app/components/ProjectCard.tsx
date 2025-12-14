interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  category?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-slide-up">
      <div className="mb-4">
        {project.category && (
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-3 animate-scale-in">
            {project.category}
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      {project.technologies && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      <a
        href={project.link}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium transform hover:translate-x-1 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
        <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}