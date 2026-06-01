export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      // mix-blend-multiply is intentionally avoided — known Android Chrome bug
      // where some GPUs render it as a fully opaque black layer, breaking the
      // whole page. Hidden below md so mobile users don't pay the cost either.
      className="hidden md:block fixed inset-0 z-50 pointer-events-none select-none"
      style={{ opacity: 0.035 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.78"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
