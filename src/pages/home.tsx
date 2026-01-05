import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section style={{ padding: "56px 0 24px", background: "linear-gradient(180deg, #f5f9ff 0%, #ffffff 65%)" }}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 24, alignItems: "center" }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid #dbe7ff",
                    background: "white",
                    padding: "6px 10px",
                    borderRadius: 999,
                    color: "#0b5cff",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  AI insights • spend controls • vendor clarity
                </div>

                <h1 style={{ margin: "14px 0 10px", fontSize: 44, lineHeight: 1.05, letterSpacing: -1 }}>
                  modern finance ops, powered by AI
                </h1>

                <p style={{ margin: 0, color: "#475569", fontSize: 16, maxWidth: 560 }}>
                  SpendPilot helps teams track transactions, spot waste, and turn messy spending into clean decisions —
                  fast. built for startups that want speed without losing control.
                </p>

                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <Button>Request demo</Button>
                  <Button variant="ghost">View dashboard preview</Button>
                </div>

                <div style={{ marginTop: 14, color: "#64748b", fontSize: 13 }}>
                  demo app • no real payments • built with React + TypeScript
                </div>
              </div>

              {/* Mini preview card */}
              <div
                style={{
                  border: "1px solid #e6ecf5",
                  borderRadius: 18,
                  background: "white",
                  padding: 16,
                  boxShadow: "0 10px 30px rgba(11, 18, 32, 0.08)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontWeight: 800 }}>AI assistant</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>live demo</div>
                </div>

                <div style={{ border: "1px solid #e6ecf5", borderRadius: 14, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: "#64748b", fontSize: 12, marginBottom: 6 }}>ask:</div>
                  <div style={{ fontWeight: 700 }}>“why did marketing spend spike?”</div>
                </div>

                <div style={{ border: "1px solid #dbe7ff", background: "#f5f9ff", borderRadius: 14, padding: 12 }}>
                  <div style={{ color: "#0b5cff", fontWeight: 800, marginBottom: 6 }}>insight</div>
                  <div style={{ color: "#334155" }}>
                    top driver: ads increased +18% week-over-week. two new recurring subscriptions detected.
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
                  <div style={{ border: "1px solid #e6ecf5", borderRadius: 14, padding: 12 }}>
                    <div style={{ color: "#64748b", fontSize: 12 }}>this month</div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>$42,190</div>
                  </div>
                  <div style={{ border: "1px solid #e6ecf5", borderRadius: 14, padding: 12 }}>
                    <div style={{ color: "#64748b", fontSize: 12 }}>savings found</div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>$3,740</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section id="features" style={{ padding: "26px 0" }}>
          <Container>
            <h2 style={{ margin: "0 0 10px", letterSpacing: -0.5 }}>built for finance teams that move fast</h2>
            <p style={{ margin: "0 0 18px", color: "#475569" }}>
              clean UI, strong defaults, and AI-style insights you can explain.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              <Card title="smart categorization">
                auto groups spend by merchant + category so your dashboard stays readable.
              </Card>
              <Card title="controls + guardrails">
                set limits, detect spikes, and surface subscriptions before they creep.
              </Card>
              <Card title="explainable “AI”">
                insights show the “why” — not just a number. designed to be trusted.
              </Card>
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section id="how" style={{ padding: "26px 0" }}>
          <Container>
            <h2 style={{ margin: "0 0 14px", letterSpacing: -0.5 }}>how it works</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              <Card title="1) ingest">
                transactions flow in (demo uses mocked data). later: connect real providers.
              </Card>
              <Card title="2) analyze">
                we compute deltas, detect recurring charges, and rank top drivers.
              </Card>
              <Card title="3) act">
                you get alerts + recommendations you can apply immediately.
              </Card>
            </div>
          </Container>
        </section>

        {/* Security */}
        <section id="security" style={{ padding: "26px 0" }}>
          <Container>
            <h2 style={{ margin: "0 0 10px", letterSpacing: -0.5 }}>security-first mindset</h2>
            <p style={{ margin: "0 0 18px", color: "#475569", maxWidth: 760 }}>
              this demo doesn’t handle real card data — but the product design assumes strict access control, least
              privilege, audit logs, and secure-by-default architecture.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ padding: "8px 10px", border: "1px solid #e6ecf5", borderRadius: 999, color: "#334155" }}>
                least privilege
              </span>
              <span style={{ padding: "8px 10px", border: "1px solid #e6ecf5", borderRadius: 999, color: "#334155" }}>
                auditability
              </span>
              <span style={{ padding: "8px 10px", border: "1px solid #e6ecf5", borderRadius: 999, color: "#334155" }}>
                secure defaults
              </span>
              <span style={{ padding: "8px 10px", border: "1px solid #e6ecf5", borderRadius: 999, color: "#334155" }}>
                privacy by design
              </span>
            </div>

            <div style={{ marginTop: 18 }}>
              <Button>Request demo</Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
