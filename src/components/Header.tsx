import { UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-opacity-40" style={{ backgroundColor: "#111a22" }}>
      
      <Link to="/">
        <h1 className="text-xl font-light">
          <span className="text-white">Zint</span>
          <span className="text-[#00D0FF]">.lol</span>
        </h1>
      </Link>
      
      <div className="flex items-center gap-8">
        <SearchBar />
        <nav className="flex items-center space-x-6 text-sm">
          <Link to="#" className="hover:text-cyan-400">Tier List</Link>
          <Link to="#" className="hover:text-cyan-400">Champions</Link>
          <Link to="#" className="hover:text-cyan-400">Statistiques</Link>

          <Link to="/profile" className="group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition hover:brightness-110"
              style={{
                backgroundColor: "#111A22",
                border: "2px solid #595959",
              }}
            >
              <UserIcon className="w-5 h-5" style={{ color: "#00D3F2" }} />
            </div>
          </Link>
        </nav>

      </div>
    </header>
  );
}
