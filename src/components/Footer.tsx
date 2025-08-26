import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Digital Health Marketing
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Transformando profissionais de saúde em autoridades digitais. 
                Estratégias personalizadas para gerar engajamento e novos pacientes.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#planos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  contato@digitalhealth.com
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Digital Health Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}