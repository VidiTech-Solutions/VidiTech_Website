const TechSVG = () => {
  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-xl"
      aria-label="Programming technologies visualization"
    >
      {/* Background Circle */}
      <circle cx="300" cy="250" r="200" fill="#090042" />

      {/* Network Grid Lines */}
      <g opacity="0.6">
        <path d="M150 250 L450 250" stroke="#A234FD" strokeWidth="1" />
        <path d="M300 100 L300 400" stroke="#A234FD" strokeWidth="1" />
        <path d="M200 150 L400 350" stroke="#651FFF" strokeWidth="1" />
        <path d="M200 350 L400 150" stroke="#651FFF" strokeWidth="1" />
        <path
          d="M250 150 L350 150"
          stroke="#A234FD"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M250 350 L350 350"
          stroke="#A234FD"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M150 200 L150 300"
          stroke="#651FFF"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M450 200 L450 300"
          stroke="#651FFF"
          strokeWidth="1"
          opacity="0.4"
        />
      </g>

      {/* Programming Language & Tech Nodes */}
      <g>
        {/* Center - Main Technology Hub */}
        <circle cx="300" cy="250" r="32" fill="#ffffff" />
        <circle cx="300" cy="250" r="28" fill="#090042" />
        <text
          x="300"
          y="255"
          fontFamily="monospace"
          fontSize="14"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          &lt;/&gt;
        </text>

        {/* JavaScript Node */}
        <circle cx="150" cy="250" r="25" fill="#F7DF1E" />
        <text
          x="150"
          y="255"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          JS
        </text>

        {/* Python Node */}
        <circle cx="450" cy="250" r="25" fill="#3776AB" />
        <text
          x="450"
          y="255"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          PY
        </text>

        {/* React Node */}
        <circle cx="300" cy="100" r="25" fill="#61DAFB" />
        <text
          x="300"
          y="105"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          REACT
        </text>

        {/* Node.js */}
        <circle cx="300" cy="400" r="25" fill="#339933" />
        <text
          x="300"
          y="405"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          NODE
        </text>

        {/* TypeScript */}
        <circle cx="200" cy="150" r="20" fill="#3178C6" />
        <text
          x="200"
          y="155"
          fontFamily="monospace"
          fontSize="11"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          TS
        </text>

        {/* PHP */}
        <circle cx="400" cy="350" r="20" fill="#777BB4" />
        <text
          x="400"
          y="355"
          fontFamily="monospace"
          fontSize="11"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          PHP
        </text>

        {/* Go */}
        <circle cx="200" cy="350" r="20" fill="#00ADD8" />
        <text
          x="200"
          y="355"
          fontFamily="monospace"
          fontSize="11"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          GO
        </text>

        {/* Java */}
        <circle cx="400" cy="150" r="20" fill="#007396" />
        <text
          x="400"
          y="155"
          fontFamily="monospace"
          fontSize="11"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          JAVA
        </text>
      </g>

      {/* Orbiting Elements - Cloud Services */}
      <g>
        {/* AWS */}
        <circle cx="500" cy="200" r="18" fill="#FF9900" />
        <text
          x="500"
          y="205"
          fontFamily="monospace"
          fontSize="10"
          fontWeight="bold"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          AWS
        </text>

        {/* Azure */}
        <circle cx="480" cy="320" r="15" fill="#0078D4" />
        <text
          x="480"
          y="325"
          fontFamily="monospace"
          fontSize="9"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          AZURE
        </text>

        {/* Firebase */}
        <circle cx="120" cy="180" r="15" fill="#FFCA28" />
        <text
          x="120"
          y="185"
          fontFamily="monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          FB
        </text>

        {/* Docker */}
        <circle cx="130" cy="320" r="18" fill="#2496ED" />
        <text
          x="130"
          y="325"
          fontFamily="monospace"
          fontSize="9"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          DOCKER
        </text>
      </g>

      {/* Database Nodes */}
      <g>
        <circle cx="220" cy="260" r="15" fill="#4479A1" />
        <text
          x="220"
          y="265"
          fontFamily="monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          SQL
        </text>

        <circle cx="380" cy="260" r="15" fill="#47A248" />
        <text
          x="380"
          y="265"
          fontFamily="monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          MONGO
        </text>
      </g>

      {/* Mobile Development */}
      <g>
        <circle cx="260" cy="180" r="15" fill="#A4C639" />
        <text
          x="260"
          y="185"
          fontFamily="monospace"
          fontSize="7"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ANDROID
        </text>

        <circle cx="340" cy="180" r="15" fill="#000000" />
        <text
          x="340"
          y="185"
          fontFamily="monospace"
          fontSize="7"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          iOS
        </text>
      </g>

      {/* Frontend Technologies */}
      <g>
        <circle cx="260" cy="320" r="12" fill="#E34F26" />
        <text
          x="260"
          y="325"
          fontFamily="monospace"
          fontSize="7"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          HTML
        </text>

        <circle cx="300" cy="330" r="12" fill="#1572B6" />
        <text
          x="300"
          y="335"
          fontFamily="monospace"
          fontSize="7"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          CSS
        </text>

        <circle cx="340" cy="320" r="12" fill="#7952B3" />
        <text
          x="340"
          y="325"
          fontFamily="monospace"
          fontSize="7"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          BS
        </text>
      </g>

      {/* Animated Pulse Rings */}
      <circle
        cx="300"
        cy="250"
        r="50"
        fill="none"
        stroke="#A234FD"
        strokeWidth="2"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          from="50"
          to="250"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.5"
          to="0"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="300"
        cy="250"
        r="30"
        fill="none"
        stroke="#651FFF"
        strokeWidth="2"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          from="30"
          to="250"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.5"
          to="0"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default TechSVG;
