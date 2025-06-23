import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yunara from "../assets/yunara.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pseudo, setPseudo] = useState("");

  const handleSearch = () => {
    console.log("Recherche pour :", pseudo);
    // TODO: navigation ou appel API
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header onToggleMenu={() => setMenuOpen(!menuOpen)} />

        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        {/* Image de fond */}
        <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${yunara})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        }} />

        {/* Overlay flouté et sombre */}
        <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 20px",
            color: "#fff"
        }}>
            
          {/* Logo au-dessus */}
          <h1 style={{
            fontSize: 48,
            fontWeight: "bold",
            marginBottom: 40
          }}>
            ZINT.<span style={{ color: "#66fcf1" }}>LOL</span>
          </h1>

          {/* Champ de recherche joueur */}
          <div style={{
            display: "flex",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 8,
            overflow: "hidden",
            maxWidth: 500,
            width: "100%"
          }}>
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              placeholder="Rechercher un joueur"
              style={{
                flex: 1,
                padding: "14px 16px",
                border: "none",
                fontSize: 16,
                outline: "none"
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "#66fcf1",
                border: "none",
                padding: "0 20px",
                fontSize: 18,
                cursor: "pointer",
                color: "#0a0a0a",
                fontWeight: "bold"
              }}
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Menu latéral */}
      <aside style={{
        position: "fixed",
        top: 60,
        right: menuOpen ? 0 : "-260px",
        width: 260,
        height: "calc(100% - 60px)",
        backgroundColor: "#4F1924", // CORRIGÉ
        color: "#fff",
        padding: 20,
        transition: "right 0.3s ease",
        zIndex: 10,
        overflowY: "auto"
        }}>
        <h3 style={{ marginBottom: 20, borderBottom: "1px solid #444", paddingBottom: 10 }}>Navigation</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "10px 0", cursor: "pointer" }}>Statistiques</li>
          <li style={{ padding: "10px 0", cursor: "pointer" }}>Champions</li>
          <li style={{ padding: "10px 0", cursor: "pointer" }}>Classement</li>
        </ul>
      </aside>

      <Footer />
    </div>
  );
}
