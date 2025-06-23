interface HeaderProps {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
  return (
    <nav style={{
      height: 60,
      backgroundColor: "#4F1924",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0 30px"
    }}>
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
    </nav>
  );
}
