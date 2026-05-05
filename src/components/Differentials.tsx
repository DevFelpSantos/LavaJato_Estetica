import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";

const items = [
  { icon: Award, title: "Produtos Premium", desc: "Marcas importadas e certificadas para máxima proteção." },
  { icon: Users, title: "Equipe Profissional", desc: "Detailers treinados com anos de experiência no setor." },
  { icon: Zap, title: "Agilidade & Cuidado", desc: "Serviço rápido sem abrir mão da qualidade impecável." },
];

export const Differentials = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-dark" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">Diferenciais</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          Por que escolher <span className="text-primary">a gente?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded border border-border bg-card/40 backdrop-blur hover:border-primary/50 transition-smooth"
          >
            <item.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
