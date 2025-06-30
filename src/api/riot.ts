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
export async function getMatchHistory(puuid: string) {
  try {
    const url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching match history: ${err}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching match history:", error);
    return null;
  }
}

// ✅ Fonction 4 : récupérer la maîtrise des champions d'un joueur
export async function getChampionMastery(puuid: string) {
  try {
    const url = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching champion mastery: ${err}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching champion mastery:", error);
    return null;
  }
}

// ✅ Fonction 5 : récupérer le summoner par puuid (version alternative)
export async function getSummonerByPuuidLol(puuid: string) {
  try {
    const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching summoner by puuid: ${err}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching summoner by puuid:", error);
    return null;
  }
}

// ✅ Fonction 6 : récupérer le rang d'un joueur via son summonerId
export async function getSummonerRank(summonerId: string) {
  try {
    const url = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error fetching summoner rank: ${err}`);
    }

    const data = await response.json();
    if (!data || data.length === 0) {
      console.log(`No rank data found for summoner ${summonerId}`);
      return [];  // retourne un tableau vide si pas de données
    }

    return data;
  } catch (error) {
    console.error("Error fetching summoner rank:", error);
    return null;  // en cas d'erreur de fetch, renvoie null
  }
}