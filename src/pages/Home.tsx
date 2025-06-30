import bgStars from '../assets/bg-stars.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaTierList from '../components/MetaTierList';
import ChampionSpotlight from '../components/ChampionSpotlight';
import SearchBar from '../components/SearchBar';
import {ChartBarIcon,WrenchScrewdriverIcon,ShieldExclamationIcon,ClockIcon} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      <Header/>
        <section
          className="w-full bg-cover bg-center py-24"
          style={{ backgroundImage: `url(${bgStars})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Découvrez votre niveau.<br />Maîtrisez vos champions.
            </h2>
            <div className="w-full max-w-md mx-auto mt-6">
              <SearchBar
                onSearch={(gameName, tagLine) => {
                  navigate(`/profile/${gameName}/${tagLine}`);
                }}
              />
            </div>
            <button className="mt-6 px-6 py-3 bg-[#00D0FF] text-black font-semibold rounded-full hover:bg-cyan-300 transition">
              Analyser mon profil
            </button>
          </div>
        </section>

        <main className="max-w-[1200px] mx-auto px-6 py-10 space-y-10">
        <MetaTierList />

        <ChampionSpotlight />

            <section className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 py-10">
            <div className="flex flex-col items-center gap-3">
              <ChartBarIcon className="w-15 h-15 text-[#00D0FF]" />
              <p className="text-lg text-gray-300">Statistiques avancées</p> {/* Augmenté ici */}
            </div>
            <div className="flex flex-col items-center gap-3">
              <WrenchScrewdriverIcon className="w-15 h-15 text-[#00D0FF]" />
              <p className="text-lg text-gray-300">Recommandation de builds</p> {/* Augmenté ici */}
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldExclamationIcon className="w-15 h-15 text-[#00D0FF]" />
              <p className="text-lg text-gray-300">Contre-champions</p> {/* Augmenté ici */}
            </div>
            <div className="flex flex-col items-center gap-3">
              <ClockIcon className="w-15 h-15 text-[#00D0FF]" />
              <p className="text-lg text-gray-300">Historique de performances</p> {/* Augmenté ici */}
            </div>
          </section>

      </main>

      <Footer />
    </div>
  );
}