// src/api/riot.ts

const API_KEY = import.meta.env.VITE_RIOT_API_KEY; // Récupérer la clé API du fichier .env

// ✅ Fonction 1 : récupérer le compte Riot par Riot ID (pseudo + tag)
export async function getAccountByRiotId(gameName: string, tagLine: string) {
  try {
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching account data: ${err}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching account by Riot ID:", error);
    return null;
  }
}

// ✅ Fonction 2 : récupérer le summoner par puuid
export async function getSummonerByPuuid(puuid: string) {
  try {
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching summoner data: ${err}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching summoner data:", error);
    return null;
  }
}

// ✅ Fonction 3 : récupérer l'historique des matchs d'un joueur
export async function getMatchHistory(accountId: string) {
  try {
    const url = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching match history: ${err}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching match history:", error);
    return null;
  }
}
