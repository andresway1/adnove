import { Target, Users, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Ajudo profissionais de saúde a se posicionarem no digital com estratégias de conteúdo,
                design e performance. Minha missão é transformar perfis em referências, gerando
                autoridade, engajamento e novos pacientes.
              </p>

              {/* Feature cards */}
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Estratégia Personalizada</h3>
                    <p className="text-sm text-muted-foreground">
                      Cada profissional tem necessidades únicas. Desenvolvo estratégias sob medida para seu nicho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Foco em Resultados</h3>
                    <p className="text-sm text-muted-foreground">
                      Não apenas seguidores, mas pacientes reais e engajamento qualificado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Crescimento Sustentável</h3>
                    <p className="text-sm text-muted-foreground">
                      Construa uma presença digital sólida e duradoura, não apenas viral.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="text-6xl font-bold mb-4">10+</div>
                    <div className="text-xl">Anos de Experiência</div>
                    <div className="text-lg opacity-90 mt-2">em Marketing Digital</div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}