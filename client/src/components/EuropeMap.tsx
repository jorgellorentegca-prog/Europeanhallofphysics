import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

// A simplified SVG representation of Europe for visual impact
// In a real app with react-simple-maps this would be geojson based
// Here we use a stylized approach consistent with the aesthetic
export function EuropeMap() {
  const countries = [
    { id: "FR", name: "France", x: 35, y: 60, color: "rgba(255, 204, 0, 0.8)" },
    { id: "DE", name: "Germany", x: 45, y: 50, color: "rgba(255, 204, 0, 0.7)" },
    { id: "IT", name: "Italy", x: 50, y: 70, color: "rgba(255, 204, 0, 0.6)" },
    { id: "UK", name: "United Kingdom", x: 30, y: 40, color: "rgba(255, 204, 0, 0.5)" },
    { id: "ES", name: "Spain", x: 25, y: 75, color: "rgba(255, 204, 0, 0.6)" },
    { id: "PL", name: "Poland", x: 55, y: 45, color: "rgba(255, 204, 0, 0.5)" },
    { id: "SE", name: "Sweden", x: 50, y: 25, color: "rgba(255, 204, 0, 0.4)" },
    { id: "CH", name: "Switzerland", x: 42, y: 62, color: "rgba(255, 204, 0, 0.9)" }, // CERN
  ];

  return (
    <div className="relative w-full h-[500px] bg-[#002266]/30 rounded-xl overflow-hidden border border-gold/20 backdrop-blur-sm shadow-2xl">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Abstract Map Background Grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,204,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.05) 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        {/* Connection Lines */}
        <motion.path
          d="M30 40 L35 60 L45 50 L55 45 M35 60 L25 75 M35 60 L42 62 L50 70 M45 50 L42 62 M45 50 L50 25"
          fill="none"
          stroke="rgba(255, 204, 0, 0.3)"
          strokeWidth="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Country Nodes */}
        {countries.map((country) => (
          <g key={country.id} data-tooltip-id="map-tooltip" data-tooltip-content={country.name}>
            <motion.circle
              cx={country.x}
              cy={country.y}
              r="1.5"
              fill={country.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5, fill: "#FFF" }}
              transition={{ duration: 0.5, delay: Math.random() }}
              className="cursor-pointer"
            />
            <motion.circle
              cx={country.x}
              cy={country.y}
              r="3"
              fill="transparent"
              stroke={country.color}
              strokeWidth="0.2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </g>
        ))}
      </svg>

      <Tooltip id="map-tooltip" style={{ backgroundColor: "#003399", color: "#FFCC00", fontFamily: "Cinzel", border: "1px solid #FFCC00" }} />
      
      <div className="absolute bottom-4 right-4 text-xs font-mono text-gold/60">
        INTERACTIVE NETWORK VISUALIZATION
      </div>
    </div>
  );
}
