export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Impulsa">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="55%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#logoGrad)" />
      <g transform="translate(32,33)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-8.5"
            rx="6"
            ry="9"
            fill="white"
            fillOpacity="0.95"
            transform={`rotate(${deg}) translate(0,0)`}
          />
        ))}
        <circle cx="0" cy="0" r="4.2" fill="#fbbf24" />
      </g>
    </svg>
  );
}
