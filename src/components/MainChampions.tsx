export function MainChampions() {
  const champions = [
    { name: "Kalista", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg", games: 53, winrate: "72%" },
    { name: "Lee Sin", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg", games: 15, winrate: "33%" },
    { name: "Gwen", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg", games: 1, winrate: "100%" },
    { name: "Syndra", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg", games: 5, winrate: "54%" },
  ];

  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-6">Main champions</h3>
      <div className="flex flex-wrap gap-6 text-lg">
        {champions.map((champ, index) => (
          <div key={index} className="bg-[#1c2433] px-6 py-4 rounded-lg w-48">
            <img src={champ.image} alt={champ.name} className="w-full h-32 object-cover rounded mb-2" />
            <p className="font-semibold">{champ.name}</p>
            <p className="text-gray-400">{champ.games} games</p>
            <p className="text-cyan-400">{champ.winrate} Winrate</p>
          </div>
        ))}
      </div>
    </section>
  );
}
