import { motion } from "framer-motion";
import React, { useState } from "react";

const TechSVG = () => {
  // Track which node is hovered
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Animation variants for nodes
  const nodeVariants = {
    idle: { scale: 1, filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))" },
    hover: {
      scale: 1.15,
      filter: "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))",
      transition: { duration: 0.3 },
    },
  };

  // Animation for the center hub
  const hubVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8 },
    },
  };

  // Animation for grid lines
  const gridLineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: [0, 0.6],
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-xl"
      aria-label="Programming technologies visualization"
    >
      {/* Background Circle with subtle pulse - LIGHTER COLOR */}
      <motion.circle
        cx="300"
        cy="250"
        r="200"
        fill="#18126D" 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 1 },
        }}
      />

      {/* Network Grid Lines with drawing animation */}
      <g>
        <motion.path
          d="M150 250 L450 250"
          stroke="#A234FD"
          strokeWidth="1"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        />
        <motion.path
          d="M300 100 L300 400"
          stroke="#A234FD"
          strokeWidth="1"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        />
        <motion.path
          d="M200 150 L400 350"
          stroke="#651FFF"
          strokeWidth="1"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        />
        <motion.path
          d="M200 350 L400 150"
          stroke="#651FFF"
          strokeWidth="1"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.path
          d="M250 150 L350 150"
          stroke="#A234FD"
          strokeWidth="1"
          opacity="0.4"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        />
        <motion.path
          d="M250 350 L350 350"
          stroke="#A234FD"
          strokeWidth="1"
          opacity="0.4"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        />
        <motion.path
          d="M150 200 L150 300"
          stroke="#651FFF"
          strokeWidth="1"
          opacity="0.4"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
        />
        <motion.path
          d="M450 200 L450 300"
          stroke="#651FFF"
          strokeWidth="1"
          opacity="0.4"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.9 }}
        />
      </g>

      {/* Programming Language & Tech Nodes */}
      <g>
        {/* Center - Main Technology Hub */}
        <motion.g variants={hubVariants} initial="initial" animate="animate">
          <motion.circle
            cx="300"
            cy="250"
            r="32"
            fill="#ffffff"
            animate={{
              scale: [1, 1.03, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
          <circle cx="300" cy="250" r="28" fill="#18126D" />{" "}
          {/* Updated background color to match */}
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
        </motion.g>

        {/* JavaScript Node */}
        <motion.g
          onHoverStart={() => setHoveredNode("js")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: hoveredNode === "js" ? 1.15 : 1,
            filter:
              hoveredNode === "js"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.3, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* Python Node */}
        <motion.g
          onHoverStart={() => setHoveredNode("py")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: hoveredNode === "py" ? 1.15 : 1,
            filter:
              hoveredNode === "py"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.35, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* React Node */}
        <motion.g
          onHoverStart={() => setHoveredNode("react")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: hoveredNode === "react" ? 1.15 : 1,
            filter:
              hoveredNode === "react"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            rotate: [0, 360],
            transition: {
              delay: 0.4,
              duration: 0.3,
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            },
          }}
        >
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
        </motion.g>

        {/* Node.js */}
        <motion.g
          onHoverStart={() => setHoveredNode("node")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: hoveredNode === "node" ? 1.15 : 1,
            filter:
              hoveredNode === "node"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.45, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* TypeScript */}
        <motion.g
          onHoverStart={() => setHoveredNode("ts")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: hoveredNode === "ts" ? 1.15 : 1,
            filter:
              hoveredNode === "ts"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.5, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* PHP */}
        <motion.g
          onHoverStart={() => setHoveredNode("php")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: hoveredNode === "php" ? 1.15 : 1,
            filter:
              hoveredNode === "php"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.55, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* Go */}
        <motion.g
          onHoverStart={() => setHoveredNode("go")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: hoveredNode === "go" ? 1.15 : 1,
            filter:
              hoveredNode === "go"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.6, duration: 0.3 },
          }}
        >
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
        </motion.g>

        {/* Java */}
        <motion.g
          onHoverStart={() => setHoveredNode("java")}
          onHoverEnd={() => setHoveredNode(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: hoveredNode === "java" ? 1.15 : 1,
            filter:
              hoveredNode === "java"
                ? "drop-shadow(0px 0px 8px rgba(162, 52, 253, 0.6))"
                : "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))",
            transition: { delay: 0.65, duration: 0.3 },
          }}
        >
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
        </motion.g>
      </g>

      {/* Orbiting Elements - Cloud Services */}
      <motion.g
        animate={{
          rotate: 360,
          transition: { duration: 50, repeat: Infinity, ease: "linear" },
        }}
        style={{ transformOrigin: "300px 250px" }}
      >
        {/* AWS */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
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
        </motion.g>

        {/* Azure */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
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
        </motion.g>

        {/* Firebase */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
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
        </motion.g>

        {/* Docker */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
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
        </motion.g>
      </motion.g>

      {/* Database Nodes - Another rotation group */}
      <motion.g
        animate={{
          rotate: -360,
          transition: { duration: 40, repeat: Infinity, ease: "linear" },
        }}
        style={{ transformOrigin: "300px 250px" }}
      >
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
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
        </motion.g>

        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
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
        </motion.g>
      </motion.g>

      {/* Mobile Development */}
      <motion.g
        animate={{
          y: [0, -5, 0],
          transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
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
        </motion.g>

        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
        >
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
        </motion.g>
      </motion.g>

      {/* Frontend Technologies - Floating in a wave pattern */}
      <motion.g
        animate={{
          x: [0, 5, 0, -5, 0],
          transition: { duration: 6, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
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
        </motion.g>

        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
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
        </motion.g>

        <motion.g
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
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
        </motion.g>
      </motion.g>

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
