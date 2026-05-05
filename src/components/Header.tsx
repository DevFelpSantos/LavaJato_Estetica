import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { business } from "@/lib/config";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/#servicos", label: "Serviços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/galeria#contato", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded bg-gradient-red grid place-items-center shadow-red-glow group-hover:scale-110 transition-smooth">
            <Zap className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-wider">
            {business.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container flex flex-col py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-base uppercase tracking-widest py-3 border-b border-border/50 hover:text-primary transition-smooth"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
