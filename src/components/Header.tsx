interface HeaderProps {
  onToggleMenu: () => void;
}

import { useEffect, useState } from "react";

export default function Header({ onToggleMenu }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
    <nav style={{
      height: 60,
      backgroundColor: "#4F1924",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0 30px"
    }}>
      {!isMobile ? null : (
      <button
        onClick={onToggleMenu}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 24,
          cursor: "pointer"
        }}
        aria-label="Ouvrir menu"
      >
        ☰
      </button>
      )}
    </nav>
      <div style={{ backgroundColor: "#2b0e15", height: 20 }} />
    </div>
  );
}
