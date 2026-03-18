import { motion } from "framer-motion";
import { Github, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Контакт</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
            Давайте <span className="text-gradient">работать</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Открыт для проектов и сотрудничества
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/PraslovSergei"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://t.me/PraslovSergei"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 font-medium"
          >
            <Send className="w-4 h-4" />
            Telegram
          </a>
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border flex justify-between items-center text-sm text-muted-foreground">
        <span>© 2025 Сергей Прасолов</span>
        <span>Сделано с помощью AI</span>
      </div>
    </footer>
  );
};

export default Footer;
