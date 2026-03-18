import { useEffect, useState, useRef } from "react";
import CentralChip from "./pcb/CentralChip";
import ProjectNode from "./pcb/ProjectNode";
import StatusBar from "./pcb/StatusBar";
import PCBTraces from "./pcb/PCBTraces";

const PCBBoard = () => {
  return (
    <div className="h-screen w-screen flex flex-col pcb-grid relative overflow-hidden">
      {/* Main board */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-8">
        {/* SVG Traces layer */}
        <PCBTraces />

        {/* Central chip */}
        <CentralChip />

        {/* Project nodes - positioned around the chip */}
        {/* Desktop: absolute positioning, Mobile: below chip */}
        <div className="hidden lg:block">
          <ProjectNode
            title="FL Agent"
            description="Парсер FL.ru с AI-фильтрацией"
            tags={["Python", "NVIDIA NIM", "Telegram"]}
            link="https://github.com/PraslovSergei/fl-agent"
            position="top-[8%] left-[5%]"
            ledColor="green"
            index={0}
          />
          <ProjectNode
            title="FitManager Pro"
            description="Платформа для фитнес-тренеров"
            tags={["React", "Supabase", "AI"]}
            link="https://id-preview--c0a9f5e7-491e-416e-9740-74019f09112e.lovable.app/"
            position="top-[8%] right-[5%]"
            ledColor="green"
            index={1}
          />
          <ProjectNode
            title="AI GEO Agency"
            description="GEO-оптимизация для AI-поиска"
            tags={["GEO", "AI Search", "React"]}
            link="https://github.com/PraslovSergei/ai-geo-agency"
            position="bottom-[18%] left-[5%]"
            ledColor="green"
            index={2}
          />
          <ProjectNode
            title="???"
            description="В разработке"
            tags={["Coming Soon"]}
            position="bottom-[18%] right-[5%]"
            ledColor="amber"
            isWip
            index={3}
          />
          {/* Broken trace - to be continued */}
          <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-pcb-glow/40 font-mono text-sm tracking-widest cursor-blink">_</span>
            <span className="text-muted-foreground font-mono text-[10px] tracking-[0.3em] uppercase">
              продолжение следует
            </span>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden absolute inset-0 flex flex-col items-center pt-4 pb-16 overflow-y-auto">
          <div className="mb-6">
            <CentralChipMobile />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 w-full max-w-lg">
            <ProjectNodeMobile
              title="FL Agent"
              description="Парсер FL.ru с AI-фильтрацией"
              tags={["Python", "NVIDIA NIM", "Telegram"]}
              link="https://github.com/PraslovSergei/fl-agent"
              ledColor="green"
            />
            <ProjectNodeMobile
              title="FitManager Pro"
              description="Платформа для фитнес-тренеров"
              tags={["React", "Supabase", "AI"]}
              link="https://id-preview--c0a9f5e7-491e-416e-9740-74019f09112e.lovable.app/"
              ledColor="green"
            />
            <ProjectNodeMobile
              title="AI GEO Agency"
              description="GEO-оптимизация для AI-поиска"
              tags={["GEO", "AI Search", "React"]}
              link="https://github.com/PraslovSergei/ai-geo-agency"
              ledColor="green"
            />
            <ProjectNodeMobile
              title="???"
              description="В разработке"
              tags={["Coming Soon"]}
              ledColor="amber"
              isWip
            />
            <div className="sm:col-span-2 flex flex-col items-center gap-1 py-4">
              <span className="text-pcb-glow/40 font-mono text-lg cursor-blink">_</span>
              <span className="text-muted-foreground font-mono text-[10px] tracking-[0.3em] uppercase">
                продолжение следует
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />
    </div>
  );
};

/* Mobile-only chip */
const CentralChipMobile = () => (
  <div className="border border-pcb-trace bg-card/80 px-6 py-4 chip-glow relative">
    <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-pcb-glow/50 to-transparent" />
    <div className="text-center">
      <div className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">/// AI ENGINEER ///</div>
      <div className="text-xl font-bold tracking-wider text-pcb-glow" style={{ fontFamily: "'Inter', sans-serif" }}>
        СЕРГЕЙ ПРАСЛОВ
      </div>
      <div className="font-mono text-xs text-pcb-green/70 mt-1">
        <span className="cursor-blink">█</span> SYSTEM ONLINE
      </div>
    </div>
  </div>
);

/* Mobile project card */
const ProjectNodeMobile = ({
  title, description, tags, link, ledColor, isWip
}: {
  title: string; description: string; tags: string[]; link?: string; ledColor: "green" | "amber"; isWip?: boolean;
}) => {
  const Wrapper = isWip ? "div" : "a";
  const wrapperProps = isWip ? {} : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`block border border-pcb-trace bg-card/60 p-3 transition-all duration-300
        ${isWip ? "card-wip cursor-default" : "hover:border-pcb-glow/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] cursor-pointer"}
      `}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`w-2 h-2 rounded-full led-pulse ${ledColor === "green" ? "text-pcb-green bg-pcb-green" : "text-amber-500 bg-amber-500"}`}
          style={{ boxShadow: `0 0 6px ${ledColor === "green" ? "#00ff88" : "#ffaa00"}` }}
        />
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          {isWip ? "WIP" : "ACTIVE"}
        </span>
      </div>
      <h3 className="font-bold text-sm text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-2">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map(tag => (
          <span key={tag} className="font-mono text-[9px] px-1.5 py-0.5 bg-pcb-trace/50 text-pcb-glow/70 border border-pcb-trace">
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default PCBBoard;
