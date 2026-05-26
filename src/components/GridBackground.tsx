export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(35, 38, 45, 0.35) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(35, 38, 45, 0.35) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}
