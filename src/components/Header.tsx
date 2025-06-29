import { UserIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-opacity-40" style={{ backgroundColor: "#111a22" }}>
      
      <Link to="/">
      <h1 className="text-xl font-bold text-cyan-400">Zint.lol</h1>
      </Link>

      <nav className="flex items-center space-x-6 text-sm">
        <a href="#" className="hover:text-cyan-400">Tier List</a>
        <a href="#" className="hover:text-cyan-400">Champions</a>
        <a href="#" className="hover:text-cyan-400">Statistiques</a>

        <Link to="/profile">
        <a href="#" className="group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition hover:brightness-110"
            style={{
              backgroundColor: "#111A22",
              border: "2px solid #595959",
            }}
          >
            <UserIcon className="w-5 h-5" style={{ color: "#00D3F2" }} />
          </div>
        </a>
        </Link>
      </nav>
    </header>
  );
}
