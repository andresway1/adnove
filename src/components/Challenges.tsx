import { Calendar, Target, Users, Zap, TrendingDown, Eye } from "lucide-react";

const challenges = [
  {
    icon: Calendar,
    title: "Falta de consistência",
    description: "Calendário de postagens irregular afeta o alcance",
    color: "primary"
  },
  {
    icon: Users,
    title: "Conversão baixa",
    description: "Dificuldade em transformar seguidores em pacientes",
    color: "accent"
  },
  {
    icon: Target,
    title: "Estratégia confusa",
    description: "Ausência de estratégia clara em anúncios pagos",
    color: "primary"
  },
  {
    icon: Eye,
    title: "Pouca diferenciação",
    description: "Dificuldade em se destacar dos concorrentes",
    color: "accent"
  },
  {
    icon: TrendingDown,
    title: "Engajamento baixo",
    description: "Posts não geram interação significativa",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Tempo escasso",
    description: "Falta de tempo para criar conteúdo de qualidade",
    color: "accent"
  }
];

export function Challenges() {
  return (
    <section id="desafios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Desafios Atuais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reconheço os principais obstáculos que profissionais de saúde enfrentam no marketing digital
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Challenges grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const bgColor = challenge.color === "primary" ? "bg-primary-soft" : "bg-accent-soft";
              const iconColor = challenge.color === "primary" ? "text-primary" : "text-accent";
              
              return (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-subtle rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Identifica-se com estes desafios?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tenho as soluções certas para superar cada um deles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}