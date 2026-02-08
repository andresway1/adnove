import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp, Crown } from "lucide-react";

const plans = [
  {
    name: "Plano Essencial",
    subtitle: "Autoridade Digital",
    price: "Sob Consulta",
    icon: Star,
    color: "primary",
    features: [
      "8 posts por mês (Reels + Carrosséis + Stories)",
      "Calendário editorial",
      "Criação de artes e legendas",
      "Programação e agendamento dos posts"
    ],
    highlighted: false
  },
  {
    name: "Plano Profissional",
    subtitle: "Crescimento & Engajamento",
    price: "Sob Consulta",
    icon: TrendingUp,
    color: "accent",
    features: [
      "12 posts por mês (Reels + Carrosséis + Stories)",
      "Calendário editorial ajustado com métricas",
      "Criação de artes, legendas e roteiros otimizados",
      "Programação e agendamento",
      "Estratégias de engajamento (enquetes, quizzes, séries)",
      "Relatório mensal de desempenho"
    ],
    highlighted: true,
    badge: "Mais Popular"
  },
  {
    name: "Plano Premium",
    subtitle: "Autoridade + Conversão",
    price: "Sob Consulta",
    icon: Crown,
    color: "primary",
    features: [
      "Tudo do Plano Profissional",
      "Landing page otimizada para captação de pacientes",
      "Consultoria estratégica de posicionamento",
      "Suporte em fluxos de DMs (respostas inteligentes)",
      "Orientações para tráfego pago (sem gestão direta)"
    ],
    highlighted: false
  }
];

export function PricingPlans() {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Planos de Trabalho
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para transformar sua presença digital e atrair mais clientes
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isHighlighted = plan.highlighted;
              const gradient = plan.color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent";
              const iconBg = plan.color === "primary" ? "bg-primary-soft" : "bg-accent-soft";
              const iconColor = plan.color === "primary" ? "text-primary" : "text-accent";
              
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                    isHighlighted 
                      ? 'shadow-xl scale-105 border-2 border-primary/20' 
                      : 'shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {/* Badge for highlighted plan */}
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className={`px-4 py-1 ${gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8 bg-card rounded-2xl h-full flex flex-col">
                    {/* Plan header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`h-8 w-8 ${iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-foreground mx-1">{plan.price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      variant={isHighlighted ? "hero" : plan.color === "accent" ? "accent" : "default"}
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        const links: { [key: string]: string } = {
                          "Plano Essencial": "https://api.whatsapp.com/send/?phone=5519995659229&text=Ol%C3%A1%21+Quero+o+plano+essencial&type=phone_number&app_absent=0",
                          "Plano Profissional": "https://api.whatsapp.com/send/?phone=5519995659229&text=Ol%C3%A1%21+Quero+o+plano+profissional&type=phone_number&app_absent=0",
                          "Plano Premium": "https://api.whatsapp.com/send/?phone=5519995659229&text=Ol%C3%A1%21+Quero+o+plano+premium&type=phone_number&app_absent=0"
                        };
                        window.open(links[plan.name], '_blank');
                      }}
                    >
                      Escolher {plan.name.split(' ')[1]}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center p-6 bg-gradient-subtle rounded-xl">
            <p className="text-muted-foreground">
              Todos os planos incluem: Análise inicial gratuita • Suporte via WhatsApp • 
              Garantia de 30 dias • Cancelamento sem multa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
