import { 
  Calendar, 
  Palette, 
  Video, 
  BarChart3, 
  FileText, 
  Rocket,
  MessageSquare,
  Cpu
} from "lucide-react";

const solutions = [
  {
    icon: Calendar,
    title: "Calendários de conteúdo",
    description: "Planejamento estratégico mensal com datas e temas relevantes",
    gradient: "from-primary to-primary/60"
  },
  {
    icon: Palette,
    title: "Criação de artes",
    description: "Design profissional para posts estáticos e carrosséis",
    gradient: "from-accent to-accent/60"
  },
  {
    icon: Video,
    title: "Roteiros de Reels e Stories",
    description: "Scripts otimizados para vídeos de alto engajamento",
    gradient: "from-primary to-primary/60"
  },
  {
    icon: BarChart3,
    title: "Gestão e programação",
    description: "Publicações automatizadas nos melhores horários",
    gradient: "from-accent to-accent/60"
  },
  {
    icon: FileText,
    title: "Landing pages",
    description: "Páginas de conversão para captar novos pacientes",
    gradient: "from-primary to-primary/60"
  },
  {
    icon: MessageSquare,
    title: "Consultoria estratégica",
    description: "Suporte personalizado e direcionamento contínuo",
    gradient: "from-accent to-accent/60"
  },
  {
    icon: Cpu,
    title: "Uso de IA",
    description: "Tecnologia para acelerar produção e inovação",
    gradient: "from-primary to-primary/60"
  },
  {
    icon: Rocket,
    title: "Tráfego pago",
    description: "Orientações para campanhas de anúncios eficazes",
    gradient: "from-accent to-accent/60"
  }
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Nossas Soluções
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e estratégias completas para transformar sua presença digital
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Solutions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}