export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(15, 17, 21, 0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(15, 17, 21, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: "88px 88px",
      }}
    />
  );
}
