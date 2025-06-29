import Header from "../components/Header";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white p-6 md:px-12">
      <Header/>
      
      {/* PROFILE HEADER */}
      <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
        <img
          src="/kalista-icon.png"
          alt="Kalista Icon"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold tracking-widest">S H I N O A <span className="text-gray-400">#RORO</span></h2>
          <p className="text-sm text-cyan-400">Kalista Main <span className="bg-cyan-600 text-xs px-2 py-1 rounded ml-2">Platine I</span></p>
        </div>
      </div>

      {/* RANK EVOLUTION + STATS */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* COURBE DE RANK (placeholder) */}
        <div className="md:col-span-2 bg-[#121a2e] p-4 rounded">
          <h3 className="text-lg font-semibold mb-2 text-white">Évolution du rang – Saison 15</h3>
          <div className="bg-black h-48 rounded flex items-center justify-center text-gray-500 text-sm">[ Graphique ici ]</div>
        </div>

        {/* STATS */}
        <div className="bg-[#121a2e] p-4 rounded text-sm">
          <h3 className="text-lg font-semibold mb-2 text-white">Statistiques importantes</h3>
          <p><span className="text-cyan-400">76 LP</span></p>
          <p><span className="text-cyan-400">52,7% Winrate</span></p>
          <p><span className="text-cyan-400">ADC</span> Main</p>
          <p><span className="text-cyan-400">74</span> Parties jouées</p>
        </div>
      </div>

      {/* MAIN CHAMPIONS */}
      <section className="mt-8">
        <h3 className="text-lg font-bold mb-4">Main champions</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          {[
            { name: "Kalista", games: 53, winrate: "72%" },
            { name: "Lee sin", games: 15, winrate: "33%" },
            { name: "Gwen", games: 1, winrate: "100%" },
            { name: "Syndra", games: 5, winrate: "54%" },
          ].map((champ) => (
            <div key={champ.name} className="bg-[#1c2433] px-4 py-3 rounded">
              <p className="font-semibold">{champ.name}</p>
              <p className="text-gray-400">{champ.games} games</p>
              <p className="text-cyan-400">{champ.winrate} Winrate</p>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORIQUE DES PARTIES */}
      <section className="mt-8">
        <h3 className="text-lg font-bold mb-4">Historique des parties</h3>
        <div className="space-y-2 text-sm">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="bg-[#121a2e] rounded px-4 py-2 flex justify-between items-center hover:bg-[#1e2a3f] transition">
              <div>
                <p>14/2/15 – 18 V.S 215 CS</p>
              </div>
              <button className="text-cyan-400 text-sm hover:underline">+</button>
            </div>
          ))}
        </div>
      </section>

      {/* SCORE MOYEN */}
      <section className="mt-8 bg-[#121a2e] p-4 rounded">
        <h3 className="text-lg font-bold mb-2">Scores moyen</h3>
        <p><span className="text-cyan-400">6.8</span> KDA</p>
        <p><span className="text-cyan-400">214</span> CS/MIN</p>
        <p><span className="text-cyan-400">14.7</span> Vision score</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 py-8">
        © 2025 Outplayed Inc. | Données inspirées de Riot Games
      </footer>
    </div>
  );
}
