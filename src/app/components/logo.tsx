interface LogisticsLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LogisticsLogo({
  className = "",
  width = 200,
  height = 60,
}: LogisticsLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="30" cy="30" r="25" fill="#2563eb" fillOpacity="0.1" />

      {/* Truck icon */}
      <g>
        <rect x="10" y="20" width="20" height="12" rx="2" fill="#2563eb" />
        <rect x="30" y="22" width="8" height="10" rx="1" fill="#2563eb" />
        <circle cx="16" cy="35" r="3" fill="#1e40af" />
        <circle cx="32" cy="35" r="3" fill="#1e40af" />
      </g>

      {/* Speed lines */}
      <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
        <line x1="42" y1="22" x2="48" y2="22" />
        <line x1="44" y1="26" x2="50" y2="26" />
        <line x1="42" y1="30" x2="46" y2="30" />
      </g>

      {/* Company name */}
      <text
        x="70"
        y="28"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="#1e293b"
      >
        NaviCore Logistics
      </text>

      {/* Tagline */}
      <text
        x="70"
        y="43"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontSize="10"
        fill="#64748b"
      >
        Delivering Excellence Worldwide!
      </text>

      {/* Decorative dots */}
      <g>
        <circle cx="190" cy="12" r="2" fill="#60a5fa" />
        <circle cx="196" cy="18" r="1.5" fill="#93c5fd" />
        <circle cx="202" cy="24" r="1" fill="#dbeafe" />
      </g>
    </svg>
  );
}
