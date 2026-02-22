import { Target, Users, TrendingUp } from "lucide-react";
import experiencia from "@/assets/experiencia.png";

export default function About() {
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

          {/* Content grid 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                André Oliveira
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Há mais de 3 anos ajudo profissionais a se posicionarem no
                digital com estratégias de conteúdo, design e performance. Minha
                missão é transformar perfis em referências, gerando autoridade,
                engajamento e novos clientes.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square h-[400px] bg-gradient-primary rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src={experiencia}
                  alt="Experiência em Marketing Digital"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async" />

              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl" />
            </div>
          </div>

          {/* Content grid 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Text content */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                André Oliveira
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Estrategista Comercial com sólido histórico em setores de alta complexidade e rigor técnico (Farmacêutico e Logístico). Especialista em transformar processos burocráticos em fluxos de alta performance, Fernando traz para a Adnove a precisão do setor de saúde aplicada ao marketing digital. Com vasta experiência no relacionamento com profissionais liberais, clínicas e hospitais, sua atuação é pautada na confiança, na entrega ágil e na construção de parcerias de longo prazo que visam a escala sustentável de negócios.
              


              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square h-[400px] bg-gradient-primary rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                <img

                  alt="Experiência em Marketing Digital"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async" src="/lovable-uploads/bbbbd0a3-44a0-46b7-bbb1-179349567f49.png" />

              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>);

}