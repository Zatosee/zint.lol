export function MainStats() {
  return (
    <div className="bg-[#121a2e] p-6 rounded-lg text-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Statistiques importantes</h3>
      
      <table className="w-full text-sm text-gray-300">
        <tbody>
          <tr>
            <td className="py-2">LP</td>
            <td className="py-2 text-cyan-400">76</td>
          </tr>
          <tr>
            <td className="py-2">Winrate</td>
            <td className="py-2 text-cyan-400">52,7%</td>
          </tr>
          <tr>
            <td className="py-2">Main</td>
            <td className="py-2 text-cyan-400">ADC</td>
          </tr>
          <tr>
            <td className="py-2">Parties jouées</td>
            <td className="py-2 text-cyan-400">74</td>
          </tr>
          {/* Scores moyens ajoutés ici */}
          <tr>
            <td className="py-2">KDA</td>
            <td className="py-2 text-cyan-400">6.8</td>
          </tr>
          <tr>
            <td className="py-2">CS/MIN</td>
            <td className="py-2 text-cyan-400">214</td>
          </tr>
          <tr>
            <td className="py-2">Vision score</td>
            <td className="py-2 text-cyan-400">14.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
