import { Target, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

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
                Ajudo profissionais a se posicionarem no digital com estratégias
                de conteúdo, design e performance. Minha missão é transformar
                perfis em referências, gerando autoridade, engajamento e novos
                clientes.
              </p>
            </div>

            {/* Image placeholder (substituído pelo Next/Image) */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/experiencia.png"   // coloque o arquivo em /public/experiencia.png
                  alt="Experiência em Marketing Digital"
                  width={400}
                  height={400}
                  className="h-auto w-auto max-h-64 object-contain"
                  priority
                />
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
