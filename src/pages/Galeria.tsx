import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { whatsappLink } from "@/lib/config";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Polimento de carro vermelho" },
  { src: g3, alt: "SUV preto com espuma" },
  { src: g5, alt: "Sedan branco polido" },
  { src: g2, alt: "Interior em couro detalhado" },
  { src: g4, alt: "Roda cromada brilhando" },
  { src: g6, alt: "Grade frontal com espuma" },
];

const reviews = [
  { name: "Carlos M.", text: "Meu carro saiu como zero! Atendimento impecável.", stars: 5 },
  { name: "Juliana R.", text: "Profissionais atenciosos e resultado surpreendente.", stars: 5 },
  { name: "Rafael S.", text: "Melhor estética da região. Recomendo demais!", stars: 5 },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome} (${form.telefone}). ${form.mensagem}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mb-12"
            >
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">Portfólio</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Veja nosso <span className="text-primary">trabalho</span>
              </h1>
              <p className="text-muted-foreground">
                Resultados reais de clientes que confiaram seu veículo a nós.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setLightbox(img.src)}
                  className="relative group overflow-hidden rounded aspect-square border border-border hover:border-primary transition-smooth"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card/30 border-y border-border">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">Sobre Nós</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Paixão por carros, <span className="text-primary">obsessão</span> por detalhes.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Há mais de 10 anos transformando veículos com técnicas profissionais
                de detalhamento, produtos premium e uma equipe que ama o que faz.
                Cada carro recebe atenção como se fosse o nosso próprio.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "10+", label: "Anos" },
                  { num: "5K+", label: "Carros" },
                  { num: "98%", label: "Satisfação" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.num}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={g1}
              alt="Equipe trabalhando"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-lg border border-border shadow-card-dark"
            />
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
              O que dizem <span className="text-primary">nossos clientes</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded border border-border bg-card"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{r.text}"</p>
                  <p className="font-display text-sm uppercase tracking-widest">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-padding bg-gradient-dark">
          <div className="container max-w-2xl">
            <div className="text-center mb-10">
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">Contato</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Fale <span className="text-primary">conosco</span>
              </h2>
              <p className="text-muted-foreground">Envie sua mensagem e entraremos em contato pelo WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-6 md:p-8 rounded-lg border border-border bg-card">
              <input
                required
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:border-primary outline-none transition-smooth"
              />
              <input
                required
                type="tel"
                placeholder="Telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:border-primary outline-none transition-smooth"
              />
              <textarea
                required
                rows={4}
                placeholder="Mensagem"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:border-primary outline-none transition-smooth resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground font-display text-sm uppercase tracking-widest px-6 py-4 rounded shadow-red-glow hover:scale-[1.02] transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md grid place-items-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border grid place-items-center hover:bg-primary"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Galeria expandida"
              className="max-w-full max-h-[90vh] rounded-lg border border-border"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
