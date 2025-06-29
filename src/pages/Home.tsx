import bgStars from '../assets/bg-stars.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const metaData = [
    { champion: "Kayn", role: "Mid", tier: "S-Tier", winrate: "52.7%", color: "text-green-400" },
    { champion: "Syndra", role: "Top", tier: "B-Tier", winrate: "52.7%", color: "text-yellow-400" },
    { champion: "Xayah", role: "Jungle", tier: "A-Tier", winrate: "52.7%", color: "text-blue-400" },
    { champion: "Yuumi", role: "Supp", tier: "D-Tier", winrate: "44.7%", color: "text-red-400" },
    { champion: "Warwick", role: "Top", tier: "B-Tier", winrate: "52.7%", color: "text-yellow-400" },
    { champion: "Leona", role: "Mid", tier: "S-Tier", winrate: "52.7%", color: "text-green-400" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      <Header />

      {/* BANNER */}
      <section
        className="flex flex-col items-center justify-center text-center bg-cover bg-center py-24 px-4"
        style={{ backgroundImage: `url(${bgStars})` }}
      >
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
          {[0, 1].map((tableIndex) => (
            <table key={tableIndex} className="w-full text-left border border-gray-700">
              <thead className="text-cyan-400">
                <tr>
                  <th className="px-3 py-2">Champ</th>
                  <th>Lane</th>
                  <th>Tier</th>
                  <th>%WR</th>
                </tr>
              </thead>
              <tbody>
                {metaData.slice(tableIndex * 3, tableIndex * 3 + 3).map((champ, index) => (
                  <tr key={index} className="hover:bg-[#1c2433]">
                    <td className="px-3 py-2 flex items-center gap-2">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/${champ.champion}.png`}
                        alt={champ.champion}
                        className="w-6 h-6 rounded"
                      />
                      {champ.champion}
                    </td>
                    <td>{champ.role}</td>
                    <td className={champ.color}>{champ.tier}</td>
                    <td>{champ.winrate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>

      {/* CHAMPION SPOTLIGHT */}

      <section className="bg-[#101623] p-6 md:px-12">
        <h3 className="text-lg font-bold text-white mb-4">Champion Spotlight</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Kayn", "Syndra", "Gwen", "LeeSin"].map((champ) => (
            <div key={champ} className="bg-[#1c2433] p-3 rounded">
              <div className="w-full h-40 bg-[#0b0f1a] rounded flex items-center justify-center overflow-hidden">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/${champ}.png`}
                  alt={champ}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white text-sm text-center mt-2">
                <p className="font-bold">{champ}</p>
                <p className="text-xs">
                  WR 64.23%<br />
                  PR 11.98%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION ICONS */}
      <section className="py-6 grid grid-cols-2 md:grid-cols-4 text-center text-cyan-400 text-sm">
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

      <Footer />
    </div>
  );
}