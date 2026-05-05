import { Instagram, Facebook, MessageCircle, Zap } from "lucide-react";
import { business, whatsappLink } from "@/lib/config";

export const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded bg-gradient-red grid place-items-center">
            <Zap className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold">{business.name}</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Estética automotiva profissional. Cuidamos do seu carro como se fosse nosso.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm tracking-widest text-primary mb-3">Horário</h4>
        <p className="text-sm text-muted-foreground">{business.hours}</p>
      </div>
      <div>
        <h4 className="font-display text-sm tracking-widest text-primary mb-3">Siga-nos</h4>
        <div className="flex gap-3">
          <a href={whatsappLink("Olá!")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded border border-border grid place-items-center hover:bg-primary hover:border-primary transition-smooth">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded border border-border grid place-items-center hover:bg-primary hover:border-primary transition-smooth">
            <Instagram className="w-4 h-4" />
          </a>
          <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded border border-border grid place-items-center hover:bg-primary hover:border-primary transition-smooth">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© 2026 {business.name}. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">Política de Privacidade</a>
          <a href="#" className="hover:text-primary">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);
