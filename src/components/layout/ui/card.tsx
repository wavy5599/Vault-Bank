import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid #e6ecf5",
        borderRadius: 16,
        padding: 16,
        background: "white",
        boxShadow: "0 6px 20px rgba(11, 18, 32, 0.06)",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div style={{ color: "#334155" }}>{children}</div>
    </div>
  );
}
