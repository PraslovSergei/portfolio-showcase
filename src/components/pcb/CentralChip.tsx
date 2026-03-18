const CentralChip = () => {
  return (
    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {/* Chip pins - top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-1 h-3 bg-pcb-trace" />
        ))}
      </div>
      {/* Chip pins - bottom */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-1 h-3 bg-pcb-trace" />
        ))}
      </div>
      {/* Chip pins - left */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-3 h-1 bg-pcb-trace" />
        ))}
      </div>
      {/* Chip pins - right */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-3 h-1 bg-pcb-trace" />
        ))}
      </div>

      {/* Main chip body */}
      <div className="border-2 border-pcb-trace bg-[#0a1210] px-10 py-8 chip-glow relative min-w-[280px]">
        {/* Corner markers */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pcb-glow/30" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-pcb-glow/30" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-pcb-glow/30" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-pcb-glow/30" />
        
        {/* Pin 1 indicator */}
        <div className="absolute top-3 left-3 w-3 h-3 rounded-full border border-pcb-glow/20" />

        <div className="text-center">
          <div className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] mb-2">
            /// AI ENGINEER ///
          </div>
          <div className="text-2xl font-extrabold tracking-[0.15em] text-pcb-glow leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
            СЕРГЕЙ
          </div>
          <div className="text-2xl font-extrabold tracking-[0.15em] text-pcb-glow leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
            ПРАСЛОВ
          </div>
          <div className="mt-3 font-mono text-xs text-pcb-green/80 flex items-center justify-center gap-1">
            <span className="cursor-blink text-pcb-green">█</span>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="mt-1 font-mono text-[9px] text-muted-foreground/50 tracking-widest">
            v2.0.26 // READY
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralChip;
