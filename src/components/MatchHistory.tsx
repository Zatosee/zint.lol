export function MatchHistory() {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-6">Historique des parties</h3>
      <div className="space-y-4 text-lg">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="bg-[#121a2e] rounded-lg px-6 py-4 flex justify-between items-center hover:bg-[#1e2a3f] transition">
            <div>
              <p>14/2/15 – 18 V.S 215 CS</p>
            </div>
            <button className="text-cyan-400 text-lg hover:underline">+</button>
          </div>
        ))}
      </div>
    </section>
  );
}
