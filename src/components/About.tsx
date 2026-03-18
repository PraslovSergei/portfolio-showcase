import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Философия</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">О подходе</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Работаю с AI как с основным инструментом разработки — формулирую задачи агентам, 
            контролирую архитектуру, довожу до production.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Специализируюсь на автоматизации бизнес-процессов, Telegram-ботах и веб-сервисах. 
            Каждый проект — это работающий продукт, а не демо.
          </p>
          <div className="pt-4 border-t border-border">
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "3+", label: "Проекта в продакшене" },
                { number: "AI", label: "First подход" },
                { number: "24ч", label: "Среднее время MVP" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
