import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoAdnove from "@/assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logoAdnove} 
              alt="AdNove"
              className="w-40 h-auto md:w-50 lg:w-56 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#desafios" className="text-foreground/80 hover:text-primary transition-colors">
              Desafios
            </a>
            <a href="#solucoes" className="text-foreground/80 hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#planos" className="text-foreground/80 hover:text-primary transition-colors">
              Planos
            </a>
            <Button variant="hero" size="default">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Sobre
              </a>
              <a href="#desafios" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Desafios
              </a>
              <a href="#solucoes" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Soluções
              </a>
              <a href="#planos" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Planos
              </a>
              <Button variant="hero" size="default" className="w-full mt-2">
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}