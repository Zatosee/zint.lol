import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getAccountByRiotId,
  getSummonerByPuuidLol,
  getMatchHistory,
  getChampionMastery,
  getSummonerRank,
} from "../api/riot";

import {
  loadChampionData,
  getChampionNameById,
} from "../api/ChampionData";

import { ProfileHeader } from "../components/ProfileHeader";
import { RankEvolution } from "../components/RankEvolution";
import { MainStats } from "../components/MainStats";
import { MainChampions } from "../components/MainChampions";
import { MatchHistory } from "../components/MatchHistory";
import Header from "../components/Header";
import Loader from "../components/Loader";

export default function Profile() {
  const { gameName = "", tagLine = "" } = useParams();

  const [summonerData, setSummonerData] = useState<any>(null);
  const [matchHistory, setMatchHistory] = useState<any>(null);

  // Charger champion.json une seule fois
  useEffect(() => {
    loadChampionData();
  }, []);

  useEffect(() => {
    if (!gameName || !tagLine) return;

    async function fetchData() {
      try {
        // ➤ Étape 1 : récupérer Riot Account via pseudo + tag
        const account = await getAccountByRiotId(gameName, tagLine);
        console.log("account", account);

        if (!account?.puuid) {
          console.error("Account not found or missing puuid");
          return;
        }

        // ➤ Étape 2 : récupérer Summoner info via puuid
        const summoner = await getSummonerByPuuidLol(account.puuid);
        console.log("summoner", summoner);

        if (!summoner?.id) {
          console.error("Summoner not found or missing id");
          return;
        }

        // ➤ Étape 3 : récupérer Champion Mastery
        const mastery = await getChampionMastery(account.puuid);
        let mainChampion = "Unknown";

        if (mastery && mastery.length > 0) {
          const champId = mastery[0].championId;
          mainChampion = getChampionNameById(champId);
          console.log("Main champion:", mainChampion);
        }
        summoner.mainChampion = mainChampion;

        // ➤ Étape 4 : récupérer Rank via summonerId
        const rankData = await getSummonerRank(summoner.id);
        console.log("rankData", rankData);  // Ajout du log pour voir ce qui est renvoyé par l'API

        let rank = "Unranked";

        if (rankData && rankData.length > 0) {
          const soloQ = rankData.find(
            (queue: any) => queue.queueType === "RANKED_SOLO_5x5"
          );
          if (soloQ) {
            rank = `${soloQ.tier} ${soloQ.rank}`;
          }
        } else {
          console.log("❌ Player is unranked or no data found in rankData");
        }

        summoner.rank = rank;
        console.log("Summoner rank:", rank);

        // ➤ Étape 5 : récupérer Match History
        let matches = null;
        if (summoner.puuid) {
          matches = await getMatchHistory(summoner.puuid);
          console.log("Match history:", matches);
        }

        setSummonerData(summoner);
        setMatchHistory(matches);

      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }

    fetchData();
  }, [gameName, tagLine]);

  if (!summonerData) return <Loader />;

  return (
    <div className="bg-[#0b0f1a] text-white font-sans">
      <Header />
      <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ProfileHeader
            profileImage={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${summonerData.profileIconId}.png`}
            username={gameName + "#" + tagLine}
            rank={summonerData.rankData}
            mainChampion={summonerData.mainChampion}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <RankEvolution />
            <MainStats />
          </div>

          <MainChampions />

          {matchHistory && (
            <MatchHistory matchHistory={matchHistory} />
          )}

          <footer className="text-center text-xs text-gray-500 py-10">
            © 2025 Outplayed Inc. | Données inspirées de Riot Games
          </footer>
        </div>
      </div>
    </div>
  );
}
