import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Differentials } from "@/components/Differentials";
import { servicos, whatsappLink } from "@/lib/config";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main>
      <Hero />

      <section id="servicos" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">Nossos Serviços</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Escolha o cuidado <span className="text-primary">ideal</span>
            </h2>
            <p className="text-muted-foreground">
              Do trato semanal ao detalhamento completo. Solicite seu orçamento direto pelo WhatsApp.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Differentials />

      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-br from-card to-background p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-red opacity-10" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Pronto para ver seu carro <span className="text-primary">brilhar?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Atendimento rápido pelo WhatsApp. Reserve seu horário em segundos.
              </p>
              <a
                href={whatsappLink("Olá! Gostaria de agendar um serviço.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground font-display text-sm uppercase tracking-widest px-8 py-4 rounded shadow-red-glow hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                Agende Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Index;
