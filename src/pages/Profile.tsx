import { ProfileHeader } from "../components/ProfileHeader";
import { RankEvolution } from "../components/RankEvolution";
import { MainStats } from "../components/MainStats";
import { MainChampions } from "../components/MainChampions";
import { MatchHistory } from "../components/MatchHistory";
import Header from '../components/Header';

const profileData = {
  profileImage: "https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/Kalista.png", 
  username: "S H I N O A #RORO",
  rank: "Platine I",
  mainChampion: "Kalista",
};

export default function Profile() {
  return (
    <div className="bg-[#0b0f1a] text-white font-sans">
      
      <Header/>

      <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Profile Header */}
          <ProfileHeader {...profileData} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <RankEvolution />
            <MainStats />
          </div>

          {/* Main Champions */}
          <MainChampions />

          {/* Match History */}
          <MatchHistory />

          {/* Footer */}
          <footer className="text-center text-xs text-gray-500 py-10">
            © 2025 Outplayed Inc. | Données inspirées de Riot Games
          </footer>
        </div>
      </div>
    </div>
  );
}
