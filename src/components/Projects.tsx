import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, link, linkLabel, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group block p-8 md:p-10 rounded-2xl bg-card border border-border hover-lift cursor-pointer"
    >
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0 ml-4" />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <span className="text-sm font-medium text-primary group-hover:tracking-wider transition-all duration-300">
          {linkLabel} →
        </span>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "FL Agent",
      description:
        "Парсер FL.ru с AI-фильтрацией. Анализирует заказы через Llama 3.1 70B, присылает только подходящие в Telegram каждые 15 минут.",
      tags: ["Python", "NVIDIA NIM", "Telegram Bot", "RSS"],
      link: "https://github.com/PraslovSergei/fl-agent",
      linkLabel: "GitHub",
    },
    {
      title: "FitManager Pro",
      description:
        "Платформа для фитнес-тренеров. Клиенты фотографируют еду, AI считает КБЖУ, тренер видит прогресс в личном кабинете.",
      tags: ["React", "Supabase", "AI"],
      link: "https://id-preview--c0a9f5e7-491e-416e-9740-74019f09112e.lovable.app/",
      linkLabel: "Демо",
    },
    {
      title: "AI GEO Agency",
      description:
        "Агентство по GEO-оптимизации — продвижение сайтов в AI-поиске (Perplexity, ChatGPT, Яндекс Нейро). Полный сервис с аудитом и внедрением.",
      tags: ["GEO", "AI Search", "React"],
      link: "https://github.com/PraslovSergei/ai-geo-agency",
      linkLabel: "GitHub",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-sm text-muted-foreground tracking-widest uppercase">Избранное</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Проекты</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <ProjectCard {...projects[0]} index={0} />
        </div>
        {projects.slice(1).map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i + 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
