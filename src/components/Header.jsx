import { Link } from "react-router";

export function HeaderHub() {
  return (
    <header className="bg-[#0d1117]/90 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"}>
            <div className="flex items-center space-x-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVbk17LhBprbwjFTkRp8R3BwwcVM-zglA4g&s" alt="Sla, aprende a ver" className="w-8 h-8 rounded-lg"/>
              <div>
                <h1 className="text-xl font-semibold text-gray-100">Pedro Henrique Reis Lima</h1>
                <p className="text-sm text-gray-500">32TB</p>
              </div>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
}