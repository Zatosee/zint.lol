export function ProfileHeader({ profileImage, username, rank, mainChampion }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-700 pb-6">
      <img
        src={profileImage}
        alt={`${username} Icon`}
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h2 className="text-3xl font-bold tracking-wider">{username}</h2>
        <p className="text-lg text-cyan-400">{mainChampion} Main <span className="bg-cyan-600 text-xs px-2 py-1 rounded ml-2">{rank}</span></p>
      </div>
    </div>
  );
}
