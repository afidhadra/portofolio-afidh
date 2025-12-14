interface Project {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <a
        href={project.link}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}