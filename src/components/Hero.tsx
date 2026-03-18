import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            Доступен для проектов
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
          Сергей
          <br />
          <span className="text-gradient">Прасолов</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mb-10">
          AI-разработчик · Боты · Автоматизация · Веб-сервисы
        </p>

        <div className="flex flex-wrap gap-3">
          {["Python", "AI-assisted dev", "Telegram боты", "Парсинг", "API интеграции", "Vibe coding"].map(
            (skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="px-4 py-2 text-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-colors duration-200"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-16 bg-border mx-auto mb-2" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
