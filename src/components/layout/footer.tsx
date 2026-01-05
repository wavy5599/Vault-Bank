import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #edf2fa", padding: "28px 0", marginTop: 48 }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 800 }}>SpendPilot</div>
            <div style={{ color: "#64748b", fontSize: 13 }}>
              built to help teams spend less, ship more.
            </div>
          </div>
          <div style={{ color: "#64748b", fontSize: 13 }}>
            © {new Date().getFullYear()} SpendPilot — demo project
          </div>
        </div>
      </Container>
    </footer>
  );
}
