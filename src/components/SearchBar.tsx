import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccountByRiotId } from "../api/riot";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface SearchBarProps {
  onSearch?: (gameName: string, tagLine: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const [gameName, tagLine] = searchInput.split("#");

    if (!gameName || !tagLine) {
      setError("Merci d'entrer le pseudo au format Nom#Tag !");
      return;
    }

    try {
      const account = await getAccountByRiotId(gameName.trim(), tagLine.trim());
      if (account) {
        setError(null);

        if (onSearch) {
          // Si onSearch est fourni par un parent → on l'appelle
          onSearch(gameName.trim(), tagLine.trim());
        } else {
          // Sinon, comportement par défaut → navigate
          navigate(`/profile/${gameName.trim()}/${tagLine.trim()}`);
        }
      } else {
        setError("Pseudo introuvable.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la recherche du pseudo.");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative w-64">
        <input
          type="text"
          placeholder="Ex: Bouboule#PROUT"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setError(null);
          }}
          className="w-full pr-10 pl-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D0FF]"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-2 text-[#00D0FF] hover:text-cyan-300"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </form>

      {error && (
        <div className="absolute top-full left-0 mt-1 bg-red-600 bg-opacity-50 text-white text-xs px-3 py-1 rounded shadow z-50">
          {error}
        </div>
      )}
    </div>
  );
}
