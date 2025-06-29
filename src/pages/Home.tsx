export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-40">
        <h1 className="text-xl font-bold text-cyan-400">Zint.lol</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-cyan-400">Tier List</a>
          <a href="#" className="hover:text-cyan-400">Champions</a>
          <a href="#" className="hover:text-cyan-400">Statistiques</a>
        </nav>
      </header>

      {/* BANNER */}
      <section className="flex flex-col items-center justify-center text-center bg-[url('/bg-stars.jpg')] bg-cover bg-center py-24 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Découvrez votre niveau.<br />Maîtrisez vos champions.
        </h2>
        <button className="mt-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition">
          Analyser mon profil
        </button>
      </section>

      {/* META TIER LIST */}
      <section className="bg-[#121827] p-6 md:px-12 text-sm">
        <h3 className="text-lg font-bold text-white mb-4">Meta Tier List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <table className="w-full text-left border border-gray-700">
            <thead className="text-cyan-400">
              <tr>
                <th className="px-3 py-2">Champ</th>
                <th>Lane</th>
                <th>Tier</th>
                <th>%WR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Kayn</td>
                <td>Mid</td>
                <td className="text-green-400">S-Tier</td>
                <td>52.7%</td>
              </tr>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Kayn</td>
                <td>Top</td>
                <td className="text-yellow-400">B-Tier</td>
                <td>52.7%</td>
              </tr>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Kayn</td>
                <td>Jungle</td>
                <td className="text-blue-400">A-Tier</td>
                <td>52.7%</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full text-left border border-gray-700">
            <thead className="text-cyan-400">
              <tr>
                <th className="px-3 py-2">Champ</th>
                <th>Lane</th>
                <th>Tier</th>
                <th>%WR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Yummi</td>
                <td>Supp</td>
                <td className="text-red-400">D-Tier</td>
                <td>44.7%</td>
              </tr>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Kayn</td>
                <td>Top</td>
                <td className="text-yellow-400">B-Tier</td>
                <td>52.7%</td>
              </tr>
              <tr className="hover:bg-[#1c2433]">
                <td className="px-3 py-2">Kayn</td>
                <td>Mid</td>
                <td className="text-green-400">S-Tier</td>
                <td>52.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CHAMPION SPOTLIGHT */}
      <section className="bg-[#101623] p-6 md:px-12">
        <h3 className="text-lg font-bold text-white mb-4">Champion Spotlight</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Kayn", "Syndra", "Gwen", "Lee Sin"].map((champ) => (
            <div key={champ} className="bg-[#1c2433] p-3 rounded">
              <div className="bg-gray-800 h-32 mb-2 rounded">Image {champ}</div>
              <div className="text-white text-sm">
                <p className="font-bold">{champ}</p>
                <p className="text-xs">WR 64.23%<br />PR 11.98%</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION ICONS */}
      <section className="bg-[#0d121d] py-6 grid grid-cols-2 md:grid-cols-4 text-center text-cyan-400 text-sm">
        <div className="flex flex-col items-center gap-2">
          📊
          <p>Statistiques avancées</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          🛠️
          <p>Recommandation de builds</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          🆚
          <p>Contre-champions</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          🕓
          <p>Historique de performances</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 py-4 bg-black bg-opacity-30">
        © 2025 Outplayed Inc. | Données inspirées de Riot Games
      </footer>
    </div>
  );
}
