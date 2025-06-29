// src/components/MatchHistory.tsx
import React from "react";

// Définir le type attendu pour les props
interface MatchHistoryProps {
  matchHistory: any; // Tu peux définir un type plus spécifique si nécessaire
}

export const MatchHistory: React.FC<MatchHistoryProps> = ({ matchHistory }) => {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-6">Historique des parties</h3>
      <div className="space-y-4 text-lg">
        {matchHistory?.matches?.map((match: any, i: number) => (
          <div key={i} className="bg-[#121a2e] rounded-lg px-6 py-4 flex justify-between items-center hover:bg-[#1e2a3f] transition">
            <div>
              <p>{match.gameMode} – {match.champion}</p>
              <p>{match.kills}/{match.deaths}/{match.assists} – {match.cs} CS</p>
            </div>
            <button className="text-cyan-400 text-lg hover:underline">+</button>
          </div>
        ))}
      </div>
    </section>
  );
};
