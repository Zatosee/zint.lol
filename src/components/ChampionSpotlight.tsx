export default function ChampionSpotlight() {
  const champions = [
    {
      name: "Kayn",
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
      WR: "64.23%",
      BR: "17.28%",
      PR: "11.98%",
    },
    {
      name: "Syndra",
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
      WR: "58.28%",
      BR: "13.11%",
      PR: "7.98%",
    },
    {
      name: "Gwen",
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",
      WR: "64.23%",
      BR: "17.28%",
      PR: "11.98%",
    },
    {
      name: "LeeSin",
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
      WR: "64.23%",
      BR: "17.28%",
      PR: "11.98%",
    },
  ];

  return (
    <section className="px-8 py-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Champion Spotlight</h2>
        <a href="#" className="text-[#00D0FF] text-sm hover:underline">Voir plus &gt;</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {champions.map((champ, index) => (
          <div key={index} className="bg-[#111a22] rounded-lg overflow-hidden hover:brightness-110 transition">
            <img src={champ.image} alt={champ.name} className="w-full h-32 object-cover" />
            <div className="p-4 text-sm">
              <h3 className="text-lg font-semibold mb-2">{champ.name}</h3>
              <div className="text-gray-400">
                <div>WR <span className="text-white">{champ.WR}</span></div>
                <div>BR <span className="text-white">{champ.BR}</span></div>
                <div>PR <span className="text-white">{champ.PR}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
