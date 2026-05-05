export const business = {
  name: "AutoBrilho",
  phone: "71987826487", // placeholder
  hours: "Segunda a Domingo, 08h às 18h",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export type Service = {
  id: number;
  nome: string;
  descricao: string;
  descricaoLonga: string;
  preco: string;
  icone: "droplet" | "sparkles" | "shield" | "sofa" | "gem";
  destaque?: boolean;
  mensagemWhatsapp: string;
};

export const servicos: Service[] = [
  {
    id: 1,
    nome: "Lavagem Básica",
    descricao: "Limpeza externa completa com água pressurizada e secagem manual.",
    descricaoLonga: "Ideal para a manutenção semanal do seu veículo. Inclui pré-lavagem, lavagem com shampoo neutro, enxágue e secagem com toalha de microfibra premium.",
    preco: "R$ 50",
    icone: "droplet",
    mensagemWhatsapp: "Olá! Gostaria de agendar uma Lavagem Básica.",
  },
  {
    id: 2,
    nome: "Lavagem Completa",
    descricao: "Lavagem externa, interna, aspiração e finalização de plásticos.",
    descricaoLonga: "Tratamento completo: parte externa, aspiração detalhada do interior, limpeza de painéis, vidros, e revitalização de plásticos com produtos premium.",
    preco: "R$ 90",
    icone: "sparkles",
    mensagemWhatsapp: "Olá! Tenho interesse na Lavagem Completa.",
  },
  {
    id: 3,
    nome: "Enceramento Premium",
    descricao: "Cera de carnaúba para brilho intenso e proteção duradoura da pintura.",
    descricaoLonga: "Aplicação manual de cera de carnaúba importada, garantindo brilho espelhado, repelência à água e proteção contra raios UV por até 3 meses.",
    preco: "R$ 150",
    icone: "shield",
    destaque: true,
    mensagemWhatsapp: "Olá! Quero agendar o Enceramento Premium.",
  },
  {
    id: 4,
    nome: "Higienização Interna",
    descricao: "Limpeza profunda de bancos, carpetes, teto e painéis com extrator.",
    descricaoLonga: "Higienização profissional com extratora, removendo manchas, ácaros e odores. Bancos, carpetes, forros e teto ficam como novos.",
    preco: "R$ 250",
    icone: "sofa",
    mensagemWhatsapp: "Olá! Gostaria de agendar uma Higienização Interna.",
  },
  {
    id: 5,
    nome: "Premium Detail",
    descricao: "Pacote completo: polimento, cristalização e estética premium.",
    descricaoLonga: "O melhor da estética automotiva: polimento técnico, cristalização da pintura, vitrificação opcional, higienização total e finalização showroom.",
    preco: "R$ 600",
    icone: "gem",
    mensagemWhatsapp: "Olá! Tenho interesse no pacote Premium Detail.",
  },
];

export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(mensagem)}`;
