import { BarChart3, Palette, Share2, Globe, Database, TrendingUp, Users, Target, Zap, Search } from 'lucide-react';

export const COLORS = {
  black: '#171822',
  deepTeal: '#022939',
  teal: '#64ccc5',
  mint: '#94fadb',
  light: '#e8edee',
  magenta: '#ba16bb',
};

export const SERVICES = [
  {
    title: "Tráfego Pago Multicanal",
    description: "Gestão estratégica de anúncios em Meta Ads, Google Ads e LinkedIn para maximizar ROI.",
    icon: BarChart3
  },
  {
    title: "Branding Estratégico",
    description: "Criação de identidade visual e posicionamento de marca que transmite autoridade.",
    icon: Palette
  },
  {
    title: "Gestão de Redes Sociais",
    description: "Conteúdo, design e estratégia para engajar e converter seguidores em clientes.",
    icon: Share2
  },
  {
    title: "Sites & Landing Pages",
    description: "Desenvolvimento de páginas de alta conversão otimizadas para performance.",
    icon: Globe
  },
  {
    title: "Implementação de CRM",
    description: "Organização comercial e qualificação de leads para garantir vendas previsíveis.",
    icon: Database
  }
];

export const DIFFERENTIATORS = [
  {
    title: "Estratégia Real",
    description: "Pensada por publicitária com experiência em conversão real, não apenas teórica.",
    icon: Target
  },
  {
    title: "Criativos Validados",
    description: "Designs e copies testados em múltiplos nichos para garantir performance.",
    icon: Palette
  },
  {
    title: "Diagnóstico Completo",
    description: "Análise de funil, copy e oferta incluída em todos os planos.",
    icon: Search
  },
  {
    title: "Processos Ágeis",
    description: "Análise diária, relatórios semanais e foco total na velocidade de implementação.",
    icon: Zap
  },
  {
    title: "Foco em Resultado",
    description: "Metas baseadas em vendas e ROI, não apenas em métricas de vaidade como likes.",
    icon: TrendingUp
  }
];

// New CONTENT object structure for the updated Cases component
export const CONTENT = {
  cases: {
    title: "Resultados que falam por nós",
    items: [
      {
        id: 1,
        title: "Uniformes Profissionais",
        result: "Faturou R$ 50.000 em 2 meses",
        highlights: [
            "Investimento de apenas R$ 1.600",
            "Estratégia de Fundo de Funil",
            "LP de Alta Conversão"
        ]
      },
      {
        id: 2,
        title: "Clínica de Estética",
        result: "Crescimento de 230% em leads",
        highlights: [
            "Resultados em 45 dias",
            "Campanha Multicanal",
            "Reestruturação de Funil"
        ]
      },
      {
        id: 3,
        title: "Software B2B",
        result: "Corte de 58% no custo/lead",
        highlights: [
            "Aumento de 2x na Conversão",
            "Otimização de Copy",
            "Segmentação Avançada"
        ]
      },
      {
        id: 4,
        title: "Material de Construção",
        result: "De 4 para 15 vendas semanais",
        highlights: [
            "Campanha Local",
            "Segmentação Geográfica",
            "Presença Digital Google"
        ]
      }
    ]
  }
};

// Deprecated CASES array removed in favor of CONTENT.cases.items, 
// but keeping TESTIMONIALS as requested.
export const CASES = []; // Keeping empty or removing, CONTENT is now the source of truth for Cases component.

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ricardo Silva",
    role: "CEO, TechSolutions",
    content: "A PRK mudou nosso jogo. Antes queimávamos dinheiro com leads ruins, hoje temos um processo previsível.",
    type: "video"
  },
  {
    id: 2,
    name: "Ana Martins",
    role: "Diretora, Estética Avançada",
    content: "Profissionalismo ímpar. O diagnóstico inicial abriu nossos olhos para erros que cometíamos há anos.",
    type: "text"
  },
  {
    id: 3,
    name: "Felipe Costa",
    role: "Fundador, ConstruMix",
    content: "Velocidade na entrega e clareza nos relatórios. Sei exatamente para onde vai cada centavo investido.",
    type: "text"
  }
];