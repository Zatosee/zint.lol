import bgStars from '../assets/bg-stars.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaTierList from '../components/MetaTierList';
import ChampionSpotlight from '../components/ChampionSpotlight';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      <Header />

      {/* BANNIÈRE FULL WIDTH */}
      <section
        className="w-full bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${bgStars})` }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Découvrez votre niveau.<br />Maîtrisez vos champions.
          </h2>
          <button className="mt-6 px-6 py-3 bg-[#00D0FF] text-black font-semibold rounded-full hover:bg-cyan-300 transition">
            Analyser mon profil
          </button>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 py-10 space-y-10">
        {/* META TIER LIST */}
        <MetaTierList />

        {/* CHAMPION SPOTLIGHT */}
        <ChampionSpotlight />

        {/* ACTION ICONS */}
        <section className="grid grid-cols-2 md:grid-cols-4 text-center text-[#00D0FF] text-sm gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">📊</span>
            <p>Statistiques avancées</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">🛠️</span>
            <p>Recommandation de builds</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">🆚</span>
            <p>Contre-champions</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">🕓</span>
            <p>Historique de performances</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}