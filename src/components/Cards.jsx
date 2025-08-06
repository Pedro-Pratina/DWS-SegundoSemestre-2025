import { Link } from "react-router";

export function Cards({ project }) {
  const IconComponent = project.icon;
  const dif = project.dif === 1 ? "Fácil" : project.dif === 2 ? "Médio" : project.dif === 3 ? "Difícil" : "Por que você me faz perder tempo?";

  return (
    <div className="group bg-[#161b22] rounded-xl border border-gray-700 shadow transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-[#0d1117] ${project.color}`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-400">Data: {project.data}</span>
          </div>
        </div>
        <Link to={`/project/${project.id}`}>
          <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors mb-2">
            {project.name}
          </h3>
        </Link>
      </div>
      <div className="px-6 pb-6">
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <span className="text-xs text-gray-500">Nível: {dif}</span>
          <a
            href={`https://github.com/Pedro-Pratina/DWS-SegundoSemestre-2025/projects/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 font-medium"
          >
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  );
}