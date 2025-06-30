interface ProfileHeaderProps {
  profileImage: string;
  username: string;
  rank: string | number;
  mainChampion: string;
}

export function ProfileHeader({
  username,
  rank,
  mainChampion,
}: ProfileHeaderProps) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 items-center border-b border-gray-700 pb-4">
      {/* Colonne droite */}
      <div className="flex flex-col justify-center">
        {/* Ligne 1 : Summoner Name */}
        <h2 className="text-2xl font-bold tracking-widest text-white">
          {username}
        </h2>

        {/* Ligne 2 : Champion info */}
        <div className="flex items-center gap-2 mt-2">
          {/* Champion Icon */}
          {mainChampion !== "Unknown" && (
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/${mainChampion}.png`}
              alt={mainChampion}
              className="w-30 h-30 rounded-full"
            />
          )}

          {/* Champion Name */}
          <p className="text-lg text-cyan-400 font-semibold">
            {mainChampion} Main
          </p>

          {/* Rank badge */}
          {rank && rank !== "Unranked" && (
            <span className="bg-green-600 text-green-100 text-xs px-2 py-0.5 rounded">
              {typeof rank === "string" ? rank : `${rank} LP`}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Debug log for rank and mainChampion
  console.log("Rank:", rank, "Main Champion:", mainChampion);
}
