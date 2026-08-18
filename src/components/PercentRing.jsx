function PercentRing({ percent }) {
  const value = Math.max(0, Math.min(100, Number(percent)));

  return (
    <svg
      className="h-11 w-11 shrink-0 -rotate-90 sm:h-14 sm:w-14"
      viewBox="0 0 36 36"
      aria-hidden="true"
    >
      <circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        className="stroke-[#161310]/20 dark:stroke-[#f3f0e8]/30"
        strokeWidth="3"
      />
      <circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        className="stroke-brass-500"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray={`${value} 100`}
      />
    </svg>
  );
}

export default PercentRing;
