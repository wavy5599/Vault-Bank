import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #edf2fa",
        zIndex: 10,
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#0b5cff",
                display: "grid",
                placeItems: "center",
                color: "white",
                fontWeight: 800,
              }}
            >
              S
            </div>
            <div style={{ fontWeight: 800, letterSpacing: -0.2 }}>SpendPilot</div>
            <span style={{ color: "#64748b", fontSize: 13 }}>
              AI finance ops
            </span>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="#features" style={{ color: "#334155", fontWeight: 600 }}>
              Features
            </a>
            <a href="#how" style={{ color: "#334155", fontWeight: 600 }}>
              How it works
            </a>
            <a href="#security" style={{ color: "#334155", fontWeight: 600 }}>
              Security
            </a>
            <Button variant="ghost">Sign in</Button>
            <Button>Request demo</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
