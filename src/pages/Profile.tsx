import { useEffect, useState } from "react";
import { getAccountByRiotId, getSummonerByPuuid, getMatchHistory } from "../api/riot";

import { ProfileHeader } from "../components/ProfileHeader";
import { RankEvolution } from "../components/RankEvolution";
import { MainStats } from "../components/MainStats";
import { MainChampions } from "../components/MainChampions";
import { MatchHistory } from "../components/MatchHistory";
import Header from '../components/Header';

export default function Profile() {
  const [summonerData, setSummonerData] = useState<any>(null);
  const [matchHistory, setMatchHistory] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Étape 1 : Chercher le compte via Riot ID
        const account = await getAccountByRiotId("BoubouleDePipi", "PROUT");
        if (!account) {
          console.error("Account not found");
          return;
        }
        console.log("account", account);

        // Étape 2 : Chercher Summoner via puuid
        const summoner = await getSummonerByPuuid(account.puuid);
        if (!summoner) {
          console.error("Summoner not found");
          return;
        }
        console.log("summoner", summoner);

        // Si on trouve le Summoner, on met à jour les données
        setSummonerData(summoner);

        // Étape 3 : Vérifier si accountId existe avant de récupérer l'historique des matchs
        if (summoner.accountId) {
          const matches = await getMatchHistory(summoner.accountId);
          setMatchHistory(matches);
        } else {
          console.error("No accountId found for summoner.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!summonerData) return <div>Loading...</div>;

  return (
    <div className="bg-[#0b0f1a] text-white font-sans">
      <Header />
      <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ProfileHeader
            profileImage={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${summonerData.profileIconId}.png`}
            username={summonerData.name}
            rank={summonerData.summonerLevel}
            mainChampion="Kalista"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <RankEvolution />
            <MainStats />
          </div>
          <MainChampions />
          {matchHistory && <MatchHistory matchHistory={matchHistory} />}
          <footer className="text-center text-xs text-gray-500 py-10">
            © 2025 Outplayed Inc. | Données inspirées de Riot Games
          </footer>
        </div>
      </div>
    </div>
  );
}
