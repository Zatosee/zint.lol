export default function MetaTierList() {
  const leftData = [
    { champ: "Kayn", lane: "Mid", tier: "S-Tier", tierColor: "text-yellow-400", winRate: "52.7%" },
    { champ: "Kayn", lane: "Top", tier: "B-Tier", tierColor: "text-blue-400", winRate: "52.7%" },
    { champ: "Kayn", lane: "Top", tier: "A-Tier", tierColor: "text-green-400", winRate: "52.7%" },
  ];

  const rightData = [
    { champ: "Kayn", lane: "Supp", tier: "D-Tier", tierColor: "text-pink-400", winRate: "44.7%" },
    { champ: "Kayn", lane: "Top", tier: "C-Tier", tierColor: "text-red-400", winRate: "52.7%" },
    { champ: "Kayn", lane: "Mid", tier: "A-Tier", tierColor: "text-green-400", winRate: "52.7%" },
  ];

  return (
    <section className="px-8 py-6 text-white">
      <h2 className="text-xl font-semibold mb-6">Meta Tier List <span className="text-[#00D0FF]">Rank -</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Table */}
        <table className="w-full text-sm bg-[#111a22] rounded-lg overflow-hidden">
          <thead className="bg-[#0F1923] text-gray-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Champ</th>
              <th className="px-4 py-3 text-left">Lane</th>
              <th className="px-4 py-3 text-left">Tier</th>
              <th className="px-4 py-3 text-right">%wr</th>
            </tr>
          </thead>
          <tbody>
            {leftData.map((item, index) => (
              <tr key={index} className="border-t border-[#1f2a36] hover:bg-[#1a2531] transition">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/Kayn.png"
                    alt={item.champ}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-white">{item.champ}</div>
                    <div className="text-xs text-gray-400">Assassin/bruiser</div>
                  </div>
                </td>
                <td className="px-4 py-3">{item.lane}</td>
                <td className={`px-4 py-3 font-semibold ${item.tierColor}`}>{item.tier}</td>
                <td className="px-4 py-3 text-right text-[#00D0FF]">{item.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Right Table */}
        <table className="w-full text-sm bg-[#111a22] rounded-lg overflow-hidden">
          <thead className="bg-[#0F1923] text-gray-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Champ</th>
              <th className="px-4 py-3 text-left">Lane</th>
              <th className="px-4 py-3 text-left">Tier</th>
              <th className="px-4 py-3 text-right">%wr</th>
            </tr>
          </thead>
          <tbody>
            {rightData.map((item, index) => (
              <tr key={index} className="border-t border-[#1f2a36] hover:bg-[#1a2531] transition">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/Kayn.png"
                    alt={item.champ}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-white">{item.champ}</div>
                    <div className="text-xs text-gray-400">Assassin/bruiser</div>
                  </div>
                </td>
                <td className="px-4 py-3">{item.lane}</td>
                <td className={`px-4 py-3 font-semibold ${item.tierColor}`}>{item.tier}</td>
                <td className="px-4 py-3 text-right text-[#00D0FF]">{item.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
