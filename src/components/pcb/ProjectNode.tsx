interface ProjectNodeProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  position: string;
  ledColor: "green" | "amber";
  isWip?: boolean;
  index: number;
}

const ProjectNode = ({ title, description, tags, link, position, ledColor, isWip, index }: ProjectNodeProps) => {
  const Wrapper = isWip ? "div" : "a";
  const wrapperProps = isWip ? {} : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`absolute ${position} w-[260px] project-card border border-pcb-trace bg-card/60 backdrop-blur-sm p-5
        ${isWip ? "card-wip cursor-default" : "hover:border-pcb-glow/50 cursor-pointer group"}
      `}
      data-trace-index={index}
    >
      {/* Top edge glow */}
      <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-pcb-trace to-transparent group-hover:via-pcb-glow/40 transition-all duration-500" />

      {/* LED + Status */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-2 h-2 rounded-full led-pulse shrink-0 ${
            ledColor === "green" ? "text-pcb-green bg-pcb-green" : "text-amber-500 bg-amber-500"
          }`}
          style={{
            boxShadow: `0 0 6px ${ledColor === "green" ? "#00ff88" : "#ffaa00"}`,
            animationDelay: `${index * 0.5}s`,
          }}
        />
        <span className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
          {isWip ? "STATUS: WIP" : "STATUS: ACTIVE"}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-base text-foreground mb-1 tracking-wide">{title}</h3>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[9px] px-2 py-0.5 bg-pcb-trace/40 text-pcb-glow/60 border border-pcb-trace/60 tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom connector marks */}
      {!isWip && (
        <div className="mt-3 pt-2 border-t border-pcb-trace/40 flex items-center justify-between">
          <span className="font-mono text-[9px] text-pcb-glow/40 group-hover:text-pcb-glow/80 transition-colors tracking-widest">
            OPEN →
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-1 h-1 bg-pcb-trace group-hover:bg-pcb-glow/40 transition-colors" />
            ))}
          </div>
        </div>
      )}

      {isWip && (
        <div className="mt-3 pt-2 border-t border-pcb-trace/40">
          <span className="font-mono text-[9px] text-amber-500/50 tracking-widest led-pulse-slow">
            ● PENDING...
          </span>
        </div>
      )}
    </Wrapper>
  );
};

export default ProjectNode;
