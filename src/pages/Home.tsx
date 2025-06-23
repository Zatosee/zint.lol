import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yunara from "../assets/yunara.png";
import logo from "../assets/logo.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adaptation styles selon taille écran
  const isMobile = windowWidth < 768;

  const logoWidth = isMobile ? 80 : 128;
  const fontSize = isMobile ? 48 : 96;
  const blockHeight = isMobile ? 150 : 220;
  const searchHeight = isMobile ? 40 : 50;
  const gapBlocks = isMobile ? 20 : 40;
  const paddingOverlay = isMobile ? "20px 10px" : "40px 20px";

  const handleSearch = () => {
    console.log("Recherche pour :", pseudo);
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
            padding: paddingOverlay,
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
              style={{ width: logoWidth, height: "auto", objectFit: "contain" }}
            />
            <h1
              style={{
                fontSize: fontSize,
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
            backgroundColor: "rgba(79, 25, 36, 0.85)",
            borderRadius: 12,
            overflow: "hidden",
            maxWidth: 500,
            width: "100%",
            height: searchHeight,
            marginBottom: 40,
            boxShadow: "0 4px 10px rgba(79, 25, 36, 0.6)",
        }}
        >
         {/* Bloc Région */}
        <div
            style={{
            backgroundColor: "rgb(225, 198, 153)",
            color: "rgb(79, 25, 36)",
            fontWeight: "700",
            padding: "0 16px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
            fontFamily: "anton, sans-serif",
            fontSize: 16,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            borderRight: "1px solid rgba(79, 25, 36, 0.3)",
            transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(255, 220, 180)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(225, 198, 153)")}
        >
            EUW
        </div>

        {/* Input texte */}
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
            color: "#fff",
            backgroundColor: "transparent",
            fontFamily: "anton, sans-serif",
            }}
        />

        {/* Bouton recherche */}
        <button
            onClick={handleSearch}
            style={{
            backgroundColor: "rgb(225, 198, 153)",
            border: "none",
            padding: "0 10px",
            fontSize: 22,
            cursor: "pointer",
            color: "rgb(79, 25, 36)",
            fontWeight: "900",
            height: "100%",
            transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(255, 220, 180)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(225, 198, 153)")}
        >
            🔍
        </button>
        </div>
          {/* Trois blocs en dessous */}
          <div
            style={{
              display: isMobile ? "block" : "flex",
              gap: gapBlocks,
              maxWidth: 900,
              width: "100%",
              justifyContent: "center",
              margin: "0 auto",
              flexWrap: "wrap", 
              zIndex: 2,
              position: "relative",
            }}
          >
            <div
              style={{
                flex: isMobile ? "unset" : 1,
                height: blockHeight,
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                marginBottom: isMobile ? 20 : 0,
                zIndex: 2,
                position: "relative",
              }}
            />
            <div
              style={{
                flex: isMobile ? "unset" : 1,
                height: blockHeight,
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                marginBottom: isMobile ? 20 : 0,
                zIndex: 2,
                position: "relative",
              }}
            />
            <div
              style={{
                flex: isMobile ? "unset" : 1,
                height: blockHeight,
                backgroundColor: "rgb(79, 25, 36)",
                borderRadius: 10,
                zIndex: 2,
                position: "relative",
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
          // Sur mobile, on peut cacher la sidebar par défaut
          display: isMobile ? (menuOpen ? "block" : "none") : "block",
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
