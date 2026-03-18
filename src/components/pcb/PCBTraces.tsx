import { useEffect, useRef, useState } from "react";

const PCBTraces = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      if (svgRef.current) {
        const parent = svgRef.current.parentElement;
        if (parent) {
          setDims({ w: parent.clientWidth, h: parent.clientHeight });
        }
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (dims.w === 0) return <svg ref={svgRef} className="absolute inset-0 w-full h-full hidden lg:block" />;

  const cx = dims.w / 2;
  const cy = dims.h / 2;

  // Project positions (matching the absolute positioning of cards)
  // Top-left, Top-right, Bottom-left, Bottom-right, Bottom-center (broken)
  const targets = [
    { x: dims.w * 0.05 + 130, y: dims.h * 0.08 + 80 },   // FL Agent (top-left)
    { x: dims.w * 0.95 - 130, y: dims.h * 0.08 + 80 },   // FitManager (top-right)
    { x: dims.w * 0.05 + 130, y: dims.h * 0.82 - 40 },   // AI GEO (bottom-left)
    { x: dims.w * 0.95 - 130, y: dims.h * 0.82 - 40 },   // WIP (bottom-right)
    { x: cx, y: dims.h * 0.88 },                           // Broken trace (bottom-center)
  ];

  const generatePath = (target: { x: number; y: number }, index: number) => {
    const dx = target.x - cx;
    const dy = target.y - cy;

    // Create PCB-style right-angle paths
    if (index === 4) {
      // Broken trace - goes straight down then stops
      const breakY = cy + (dy * 0.6);
      return `M ${cx} ${cy} L ${cx} ${breakY}`;
    }

    // For other traces: go out from chip, then turn at right angles
    const midX = cx + dx * 0.3;
    const midY = cy + dy * 0.3;

    return `M ${cx} ${cy} L ${midX} ${cy} L ${midX} ${target.y} L ${target.x} ${target.y}`;
  };

  const traceColors = ["#00d4ff", "#00d4ff", "#00d4ff", "#ffaa00", "#00d4ff"];

  return (
    <svg ref={svgRef} className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        {traceColors.map((color, i) => (
          <filter key={`glow-${i}`} id={`trace-glow-${i}`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {targets.map((target, i) => {
        const path = generatePath(target, i);
        return (
          <g key={i}>
            {/* Base trace */}
            <path
              d={path}
              fill="none"
              stroke="#1a3a2a"
              strokeWidth="2"
            />
            {/* Glow trace (subtle) */}
            <path
              d={path}
              fill="none"
              stroke={traceColors[i]}
              strokeWidth="1"
              opacity="0.15"
              filter={`url(#trace-glow-${i})`}
            />
            {/* Animated dot */}
            <circle r="3" fill={traceColors[i]} opacity="0.8" filter={`url(#trace-glow-${i})`}>
              <animateMotion
                dur={`${2.5 + i * 0.5}s`}
                repeatCount="indefinite"
                path={path}
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur={`${2.5 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Second dot with offset */}
            <circle r="2" fill={traceColors[i]} opacity="0.5">
              <animateMotion
                dur={`${2.5 + i * 0.5}s`}
                repeatCount="indefinite"
                path={path}
                begin={`${1.2 + i * 0.3}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                dur={`${2.5 + i * 0.5}s`}
                repeatCount="indefinite"
                begin={`${1.2 + i * 0.3}s`}
              />
            </circle>

            {/* For broken trace, add a blinking endpoint */}
            {i === 4 && (
              <circle
                cx={cx}
                cy={cy + (target.y - cy) * 0.6}
                r="3"
                fill="#00d4ff"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.1;0.6"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* Small circuit nodes at intersections */}
      {targets.slice(0, 4).map((target, i) => {
        const dx = target.x - cx;
        const midX = cx + dx * 0.3;
        return (
          <g key={`node-${i}`}>
            <circle cx={midX} cy={cy} r="3" fill="none" stroke="#1a3a2a" strokeWidth="1.5" />
            <circle cx={midX} cy={cy} r="1" fill="#1a3a2a" />
            <circle cx={midX} cy={target.y} r="3" fill="none" stroke="#1a3a2a" strokeWidth="1.5" />
            <circle cx={midX} cy={target.y} r="1" fill="#1a3a2a" />
          </g>
        );
      })}
    </svg>
  );
};

export default PCBTraces;
