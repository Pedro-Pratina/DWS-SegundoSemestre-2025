import { Calculator } from "lucide-react";

import { HeaderHub } from "../components/Header.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { Cards } from "../components/Cards.jsx";
export function PersonalHub() {
  const projects = [
    {
      id: 1,
      name: "SomaInput",
      description: "Soma de números, pegos de uma input, e exibe o resultado.",
      icon: Calculator,
      color: "text-blue-500",
      data: "04/08/2025",
      dif: null,
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <HeaderHub />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Meus Projetos</h2>
              <p className="text-gray-400 mt-1">{projects.length} projetos no total</p>
            </div>
            <SearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Cards key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}