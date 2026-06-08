function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/30
        backdrop-blur-xl
        border border-white/50
        rounded-[28px]
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;