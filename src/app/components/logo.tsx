interface LogisticsLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LogisticsLogo({
  className = "",
  width = 160,
  height = 32,
}: LogisticsLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle for the icon */}
      <circle cx="30" cy="30" r="25" fill="#2563eb" fillOpacity="0.1" />

      {/* Truck body */}
      <rect x="8" y="20" width="20" height="12" rx="2" fill="#2563eb" />

      {/* Truck cab */}
      <rect x="28" y="22" width="8" height="10" rx="1" fill="#2563eb" />

      {/* Truck wheels */}
      <circle cx="14" cy="35" r="3" fill="#1e40af" />
      <circle cx="30" cy="35" r="3" fill="#1e40af" />

      {/* Speed lines */}
      <line
        x1="40"
        y1="22"
        x2="46"
        y2="22"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="26"
        x2="48"
        y2="26"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="30"
        x2="44"
        y2="30"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Company name */}
      <text
        x="70"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#1e293b"
      >
        NaviCore Logistics
      </text>

      {/* Tagline */}
      <text
        x="70"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#64748b"
      >
        Delivering Excellence Worldwide!
      </text>

      {/* Decorative dots */}
      <circle cx="185" cy="15" r="2" fill="#60a5fa" />
      <circle cx="190" cy="20" r="1.5" fill="#93c5fd" />
      <circle cx="195" cy="25" r="1" fill="#dbeafe" />
    </svg>
  );
}
