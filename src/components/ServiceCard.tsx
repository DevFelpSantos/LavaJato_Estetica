import { useState } from "react";
import { motion } from "framer-motion";
import { Droplet, Sparkles, Shield, Sofa, Gem, MessageCircle, ChevronDown } from "lucide-react";
import { Service, whatsappLink } from "@/lib/config";

const icons = {
  droplet: Droplet,
  sparkles: Sparkles,
  shield: Shield,
  sofa: Sofa,
  gem: Gem,
};

export const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = icons[service.icone];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col p-6 md:p-8 rounded-md border bg-card shadow-card-dark transition-smooth hover:-translate-y-1 hover:border-primary/60 ${
        service.destaque ? "border-primary/40 ring-1 ring-primary/30" : "border-border"
      }`}
    >
      {service.destaque && (
        <span className="absolute -top-3 right-4 bg-gradient-red text-primary-foreground text-[10px] font-bold tracking-widest px-3 py-1 rounded font-display uppercase">
          Mais pedido
        </span>
      )}

      <div className="w-12 h-12 rounded bg-primary/10 grid place-items-center mb-5 group-hover:bg-gradient-red group-hover:shadow-red-glow transition-smooth">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
      </div>

      <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{service.nome}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.descricao}</p>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-sm text-muted-foreground/80 pb-4 leading-relaxed border-l-2 border-primary pl-3 mb-2">
          {service.descricaoLonga}
        </p>
      </motion.div>

      <button
        onClick={() => setOpen(!open)}
        className="text-xs font-display tracking-widest uppercase text-primary flex items-center gap-1 mb-6 hover:gap-2 transition-all"
      >
        {open ? "Ver menos" : "Ver mais"}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div className="mt-auto flex items-end justify-between gap-3 pt-4 border-t border-border">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">A partir de</p>
          <p className="font-display text-2xl font-bold text-primary">{service.preco}</p>
        </div>
        <a
          href={whatsappLink(service.mensagemWhatsapp)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground font-display text-xs uppercase tracking-widest px-4 py-3 rounded shadow-red-glow hover:scale-105 active:scale-95 transition-smooth"
        >
          <MessageCircle className="w-4 h-4" />
          Solicitar
        </a>
      </div>
    </motion.article>
  );
};
