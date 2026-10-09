const weaveLines = [
  {
    d: "M-90 210C40 196 150 72 286 108S520 188 760 48",
    opacity: 0.34,
    fromX: "-22px",
    fromY: "16px",
    toX: "34px",
    toY: "-24px",
    duration: "9s",
  },
  {
    d: "M-70 248C70 130 210 176 348 78S560 36 790 118",
    opacity: 0.55,
    fromX: "-16px",
    fromY: "22px",
    toX: "42px",
    toY: "-14px",
    duration: "11s",
  },
  {
    d: "M-110 156C50 214 186 36 328 92S548 206 800 74",
    opacity: 0.72,
    fromX: "-28px",
    fromY: "10px",
    toX: "26px",
    toY: "-30px",
    duration: "7.5s",
  },
  {
    d: "M-30 262C130 188 214 208 366 124S572 28 820 96",
    opacity: 0.42,
    fromX: "-12px",
    fromY: "26px",
    toX: "38px",
    toY: "-18px",
    duration: "12s",
  },
  {
    d: "M-60 132C96 86 198 186 344 148S590 84 780 28",
    opacity: 0.28,
    fromX: "-20px",
    fromY: "8px",
    toX: "30px",
    toY: "-26px",
    duration: "8.5s",
  },
] as const;

type WeavePanelProps = {
  className?: string;
};

export function WeavePanel({ className = "" }: WeavePanelProps) {
  return (
    <div className={`weave-panel h-full ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 240"
        preserveAspectRatio="xMidYMid slice"
      >
        {weaveLines.map((line) => (
          <path
            key={line.d}
            className="weave-line"
            d={line.d}
            style={{
              opacity: line.opacity,
              animationDuration: line.duration,
              "--from-x": line.fromX,
              "--from-y": line.fromY,
              "--to-x": line.toX,
              "--to-y": line.toY,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
