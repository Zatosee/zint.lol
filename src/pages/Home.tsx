import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yunara from "../assets/yunara.png";
import logo from "../assets/logo.png";  // n’oublie pas de l’importer

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${yunara})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* Overlay flouté et sombre */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 20px",
            color: "#fff",
          }}
        >
          {/* Logo + Titre alignés */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 20,
              marginBottom: 40,
              userSelect: "none",
            }}
          >
            <img
              src={logo}
              alt="Logo ZINT.LOL"
              style={{ width: 128, height: 'auto', objectFit: "contain" }}
            />
            <h1
  style={{
    fontSize: 96,
    fontWeight: "900",
    margin: 0,
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "flex-end",
    fontFamily: "anton, sans-serif",
    color: "rgb(255, 190, 200)", 
    WebkitTextStroke: "0.7px rgb(43, 14, 21)",
    cursor: "default",
    textShadow: `3px 3px 6px rgba(43, 14, 21, 0.9), 0 0 8px rgba(150, 80, 90, 0.7), 0 0 15px rgba(150, 80, 90, 0.5)`,
  }}
>
  ZINT.
  <span
    style={{
      color: "rgb(225, 198, 153)",
      transition: "color 0.3s ease",
    }}
  >
    LOL
  </span>
</h1>

          </div>

          {/* Barre de recherche */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 8,
              overflow: "hidden",
              maxWidth: 500,
              width: "100%",
              height: 50,
              marginBottom: 40,
            }}
          >
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              placeholder="Rechercher un joueur"
              style={{
                flex: 1,
                padding: "0 16px",
                border: "none",
                fontSize: 18,
                outline: "none",
                height: "100%",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "#66fcf1",
                border: "none",
                padding: "0 20px",
                fontSize: 22,
                cursor: "pointer",
                color: "#0a0a0a",
                fontWeight: "bold",
                height: "100%",
              }}
            >
              🔍
            </button>
          </div>

          {/* Trois blocs en dessous */}
          <div
            style={{
                display: "flex",
                gap: 40,               // plus d’espace entre blocs
                maxWidth: 900,
                width: "100%",
                justifyContent: "center",
                margin: "0 auto",      // centre horizontalement le container
            }}
            >
            <div
                style={{
                flex: 1,
                height: 220,         // blocs plus grands
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                }}
            />
            <div
                style={{
                flex: 1,
                height: 220,
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                }}
            />
            <div
                style={{
                flex: 1,
                height: 220,
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                }}
            />
            </div>
        </div>
      </div>

      {/* Menu latéral */}
      <aside
        style={{
          position: "fixed",
          top: 60,
          right: menuOpen ? 0 : "-260px",
          width: 260,
          height: "calc(100% - 60px)",
          backgroundColor: "#4F1924",
          color: "#fff",
          padding: 20,
          transition: "right 0.3s ease",
          zIndex: 10,
          overflowY: "auto",
        }}
      >
        <h3
          style={{
            marginBottom: 20,
            borderBottom: "1px solid #444",
            paddingBottom: 10,
          }}
        >
          Navigation
        </h3>
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
