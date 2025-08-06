import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-80">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Buscar projetos..."
        className="w-full pl-10 pr-4 py-2 bg-[#0d1117] text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500"
      />
    </div>
  );
}
