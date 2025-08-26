import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft rounded-full mb-6">
              <MessageCircle className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Consultoria Gratuita
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Pronto para Transformar sua{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Presença Digital?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Agende uma consultoria gratuita de 30 minutos e descubra como posso ajudar 
              você a atrair mais pacientes e construir autoridade no digital.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-primary-soft rounded-lg">
                <p className="font-semibold text-primary">Análise Gratuita</p>
                <p className="text-xs text-primary/80 mt-1">do seu perfil atual</p>
              </div>
              <div className="p-4 bg-accent-soft rounded-lg">
                <p className="font-semibold text-accent">Estratégia Personalizada</p>
                <p className="text-xs text-accent/80 mt-1">para seu nicho</p>
              </div>
              <div className="p-4 bg-primary-soft rounded-lg">
                <p className="font-semibold text-primary">Sem Compromisso</p>
                <p className="text-xs text-primary/80 mt-1">apenas orientação</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <MessageCircle className="mr-2 h-4 w-4" />
                Agendar via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Enviar E-mail
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}