import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

export const Hero = () => (
  <section className="relative min-h-[80vh] md:min-h-[92vh] flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Carro esportivo preto coberto de espuma sob iluminação vermelha"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <Star className="w-3 h-3 fill-primary text-primary" />
          <span className="text-xs font-display tracking-widest uppercase text-primary">
            Estética automotiva premium
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          Seu Carro
          <br />
          Merece <span className="text-primary">Brilhar</span>
          <br />
          <span className="text-stroke">Como Novo</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Lavagem profissional e detalhamento automotivo com produtos premium,
          equipe especializada e resultado garantido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground font-display text-sm uppercase tracking-widest px-8 py-4 rounded shadow-red-glow hover:scale-105 active:scale-95 transition-smooth"
          >
            Ver Serviços
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/galeria"
            className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground font-display text-sm uppercase tracking-widest px-8 py-4 rounded hover:border-primary hover:text-primary transition-smooth"
          >
            Ver Trabalhos
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground"
    >
      <ArrowDown className="w-5 h-5" />
    </motion.div>
  </section>
);
