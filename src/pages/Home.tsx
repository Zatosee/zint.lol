import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yunara from "../assets/yunara.png";
import logo from "../assets/logo.png";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiTargetPrize, GiPodiumWinner } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const logoWidth = isMobile ? 80 : 256; // Largeur du logo
  const fontSize = isMobile ? 48 : 196;
  const blockHeight = isMobile ? 150 : 220;
  const searchHeight = isMobile ? 40 : 100;
  const gapBlocks = isMobile ? 20 : 200;
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
                color: "rgba(79, 25, 36, 0.85)",
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
              maxWidth: 1200,
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
                padding: isMobile ? "0 16px" : "0 30px", // plus large en desktop
                height: "100%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
                fontFamily: "anton, sans-serif",
                fontSize: isMobile ? 16 : 28, // plus gros en desktop
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                borderRight: "1px solid rgba(79, 25, 36, 0.3)",
                transition: "background-color 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(255, 220, 180)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(225, 198, 153)")
              }
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
                padding: isMobile ? "0 16px" : "0 30px",
                border: "none",
                fontSize: isMobile ? 18 : 28, // plus grand en desktop
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
                padding: isMobile ? "0 10px" : "0 20px",
                fontSize: isMobile ? 22 : 32,
                cursor: "pointer",
                color: "rgb(79, 25, 36)",
                fontWeight: "900",
                height: "100%",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(255, 220, 180)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(225, 198, 153)")
              }
            >
              🔍
            </button>
          </div>

          {/* Trois blocs en dessous */}
          <div
            style={{
              display: isMobile ? "block" : "flex",
              gap: gapBlocks,
              maxWidth: isMobile ? "100%" : 1800, // largeur barre nav pc
              width: "100%",
              marginTop: isMobile ? 0 : 80,
              justifyContent: "center",
              margin: "0 auto",
              flexWrap: "nowrap", // pas de wrapping pour garder en ligne
              zIndex: 2,
              position: "relative",
            }}
          >
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                style={{
                  flex: isMobile ? "unset" : "0 1 800px", // max width 800px en desktop
                  maxHeight: isMobile ? 1800 : "none", // max height mobile
                  minHeight: isMobile ? blockHeight : 600,
                  backgroundColor: "rgb(79, 25, 36)",
                  borderRadius: 10,
                  marginBottom: isMobile ? 20 : 0,
                  padding: 20, // padding pour contenu à l'intérieur
                  boxSizing: "border-box",
                  zIndex: 2,
                  position: "relative",
                }}
              />
            ))}
          </div>
        </div>
      </div>


    {/* Menu latéral */}
    {isMobile ? (
      // 📱 Menu mobile classique
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
           {/* Logo site */}
        

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
          <li style={{ padding: "10px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <AiOutlineBarChart size={28} />
            Statistiques
          </li>
          <li style={{ padding: "10px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <GiTargetPrize size={28} />
            Champions
          </li>
          <li style={{ padding: "10px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <GiPodiumWinner size={28} />
            Classement
          </li>
          <li
            style={{
              padding: "10px 0",
              cursor: "pointer",
              borderTop: "1px solid #444",
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CgProfile size={28} />
            Compte
          </li>
        </ul>
      </aside>
    ) : (
      // 🖥️ Sidebar desktop : réduite par défaut, s'agrandit au hover
      <aside
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 60,
          right: 0,
          height: "calc(100% - 60px)",
          width: menuOpen ? 220 : 60,
          backgroundColor: "#4F1924",
          color: "#fff",
          padding: menuOpen ? 20 : "0px",
          transition: "width 0.3s ease",
          zIndex: 10,
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // place le bloc compte en bas
        }}
      >
       

        {/* Haut de la barre */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            alignItems: menuOpen ? "flex-start" : "center",
          }}
        >
          
   

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            
            <AiOutlineBarChart size={28} />
            {menuOpen && <span>Statistiques</span>}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <GiTargetPrize size={28} />
            {menuOpen && <span>Champions</span>}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <GiPodiumWinner size={28} />
            {menuOpen && <span>Classement</span>}
          </div>
        </div>

        {/* Bas de la barre - Mon compte */}
        <div
          style={{
            backgroundColor: "#fff",
            color: "#4F1924",
            padding: "12px 16px",
            marginTop: 20,
            marginRight: 0,
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f7e9e2")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          <CgProfile size={28} />
          {menuOpen && <span>Mon compte</span>}
        </div>
      </aside>
    )}

      {/*<Footer />*/}
      
    </div>
  );
}
