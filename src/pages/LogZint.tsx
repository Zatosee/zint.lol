import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

export default function LoginZint() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    if (data.session) {
      // Session créée, connexion réussie
      // Gérer la persistance selon keepConnected (optionnel, Supabase gère ça automatiquement)
      navigate("/dashboard"); // ou la page d’accueil privée
    } else {
      setErrorMsg("Erreur de connexion : session introuvable");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>ZINT.LOL</h1>
        <p style={subtitleStyle}>Welcome back to zint.lol</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            autoComplete="current-password"
          />
          <div style={optionsStyle}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={keepConnected}
                onChange={() => setKeepConnected(!keepConnected)}
                style={{ marginRight: 6 }}
              />
              Garder connecté
            </label>
            <a href="#" style={linkStyle} onClick={(e) => e.preventDefault()}>
              Mot de passe oublié ?
            </a>
          </div>

          <button type="submit" style={buttonStyle}>
            Se connecter
          </button>
        </form>

        {errorMsg && <p style={{ color: "red", marginTop: 10 }}>{errorMsg}</p>}

        <p style={switchTextStyle}>
          Tu n'as pas encore de compte?{" "}
          <Link to="/signup" style={linkStyle}>
            Créer compte
          </Link>
        </p>
      </div>
    </div>
  );
}

// Styles
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
const optionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 14,
  marginBottom: 10,
};
const linkStyle = {
  color: "#4ea1ff",
  textDecoration: "underline",
  cursor: "pointer",
};
const buttonStyle = {
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
const switchTextStyle: React.CSSProperties = { fontSize: 16, marginTop: 25, textAlign: "left" as const };
