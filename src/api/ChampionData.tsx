// src/api/championData.ts

let championData: Record<string, string> = {};

export async function loadChampionData() {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json"
    );
    const data = await response.json();

    for (const champKey in data.data) {
      const champ = data.data[champKey];
      // champ.key = championId (string)
      // champ.id = champion name
      championData[champ.key] = champ.id;
    }

    console.log("Champion data loaded");
  } catch (error) {
    console.error("Error loading champion data:", error);
  }
}

export function getChampionNameById(id: number): string {
  return championData[id.toString()] || "Unknown";
}
