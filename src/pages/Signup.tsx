import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [region, setRegion] = useState("EUW");
  const navigate = useNavigate();
  const regions = ["EUW", "NA", "EUNE", "KR", "OCE"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Ajouter création compte Supabase ici
    console.log("Signup", { email, password, pseudo, region });
    // Exemple : navigate("/login") après inscription réussie
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        {/* Bouton Accueil */}
        <button
          onClick={() => navigate("/")}
          style={homeButtonStyle}
          aria-label="Retour à l'accueil"
        >
          🏠 Accueil
        </button>

        <h1 style={titleStyle}>ZINT.LOL</h1>
        <p style={subtitleStyle}>Create your account</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
            style={inputStyle}
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>Creer compte</button>
        </form>

        <p style={switchTextStyle}>
          Déjà un compte?{" "}
          <Link to="/login" style={linkStyle}>
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

// Styles (identiques à LoginPage, on peut factoriser plus tard)
const containerStyle = {
  minHeight: "100vh",
  backgroundColor: "rgb(79, 25, 36)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
};

const boxStyle = {
  backgroundColor: "rgb(121, 40, 56)",
  borderRadius: 12,
  padding: 30,
  maxWidth: 420,
  width: "100%",
  color: "#fff",
  fontFamily: "anton, sans-serif",
  position: "relative" as const,
};

const homeButtonStyle = {
  position: "absolute" as const,
  top: 15,
  left: 15,
  backgroundColor: "transparent",
  border: "none",
  color: "#4ea1ff",
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer",
  textDecoration: "underline",
};

const titleStyle: React.CSSProperties = { fontSize: 48, margin: "0 0 10px", textAlign: "left" };
const subtitleStyle: React.CSSProperties = { fontSize: 20, margin: "0 0 20px", textAlign: "left" };
const formStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 15 };
const inputStyle: React.CSSProperties = {
  padding: "12px 15px",
  borderRadius: 6,
  border: "none",
  fontSize: 16,
  fontFamily: "anton, sans-serif",
  outline: "none",
};
const buttonStyle: React.CSSProperties = {
  backgroundColor: "#4ea1ff",
  border: "none",
  padding: "12px 0",
  borderRadius: 8,
  color: "#fff",
  fontWeight: "bold",
  fontSize: 18,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
const switchTextStyle: React.CSSProperties = { fontSize: 16, marginTop: 25, textAlign: "left" };
const linkStyle: React.CSSProperties = {
  color: "#4ea1ff",
  textDecoration: "underline",
  cursor: "pointer",
};
