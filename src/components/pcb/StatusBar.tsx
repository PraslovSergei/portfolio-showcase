const StatusBar = () => {
  return (
    <div className="status-bar flex-shrink-0 border-t border-pcb-trace bg-[#060a0e] px-4 py-2.5 flex items-center justify-between gap-4 text-[11px] relative overflow-x-auto">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pcb-glow/20 to-transparent" />

      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full bg-pcb-green led-pulse"
            style={{ boxShadow: "0 0 6px #00ff88" }}
          />
          <span className="text-pcb-green tracking-wider whitespace-nowrap">ДОСТУПЕН ДЛЯ ПРОЕКТОВ</span>
        </div>
        <span className="text-pcb-trace">│</span>
      </div>

      <div className="flex items-center gap-3 text-muted-foreground overflow-x-auto">
        <a href="mailto:openaisergei@proton.me" className="hover:text-pcb-glow transition-colors whitespace-nowrap">
          openaisergei@proton.me
        </a>
        <span className="text-pcb-trace hidden sm:inline">│</span>
        <a
          href="https://github.com/PraslovSergei"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pcb-glow transition-colors whitespace-nowrap hidden sm:inline"
        >
          github.com/PraslovSergei
        </a>
        <span className="text-pcb-trace hidden md:inline">│</span>
        <a
          href="https://t.me/Pritkij"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pcb-glow transition-colors whitespace-nowrap hidden md:inline"
        >
          tg: @Pritkij
        </a>
      </div>

      <div className="font-mono text-muted-foreground/40 shrink-0 hidden lg:block tracking-wider">
        © 2025
      </div>
    </div>
  );
};

export default StatusBar;
