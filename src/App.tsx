import React, { useState } from 'react';
import { Menu, X, PenTool, TrendingUp, Users, MessageSquare, Check, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-navy-dark text-white font-sans selection:bg-electric-cyan selection:text-navy-dark min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="flex items-center transition-transform hover:scale-105">
              <img 
                src="https://i.postimg.cc/m2MK5k8F/Logo-para-site.png" 
                alt="AdNove Consultoria de Marketing Digital" 
                className="h-10 md:h-[58px] w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
            <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#tecnologia" className="hover:text-blue-600 transition-colors">Tecnologia</a>
            <a href="#resultados" className="hover:text-blue-600 transition-colors">Resultados</a>
          </div>
          
          <a href="https://api.whatsapp.com/send/?phone=551931405902&text=Ol%C3%A1%21+Quero+fazer+um+diagn%C3%B3stico+do+meu+neg%C3%B3cio&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all duration-300">
            Diagnóstico Gratuito
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-800">
              <a href="#servicos" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors py-2">Serviços</a>
              <a href="#tecnologia" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors py-2">Tecnologia</a>
              <a href="#resultados" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors py-2">Resultados</a>
              <a href="https://api.whatsapp.com/send/?phone=551931405902&text=Ol%C3%A1%21+Quero+fazer+um+diagn%C3%B3stico+do+meu+neg%C3%B3cio&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all duration-300 text-center mt-2">
                Diagnóstico Gratuito
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden hero-gradient tech-pattern">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-cyan rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-4xl text-center mx-auto">
            <motion.span 
              variants={fadeInUp} initial="hidden" animate="visible"
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-electric-cyan uppercase border border-electric-cyan/30 rounded-full bg-electric-cyan/10"
            >
              Full Service & Tech Agency
            </motion.span>
            <motion.h1 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            >
              Não somos apenas uma agência. Somos a camada de <span className="text-electric-cyan">Inteligência</span> e Performance que escala o seu lucro.
            </motion.h1>
            <motion.p 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed mx-auto"
            >
              Unimos estratégia de dados, tecnologia proprietária e criatividade para transformar cliques em clientes fiéis e faturamento recorde.
            </motion.p>
            <motion.div 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://api.whatsapp.com/send/?phone=551931405902&text=Ol%C3%A1%21+Quero+fazer+um+diagn%C3%B3stico+do+meu+neg%C3%B3cio&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-electric-cyan text-navy-dark px-6 py-4 md:px-8 rounded-lg font-bold text-base md:text-lg hover:scale-105 transition-transform glow-cyan text-center">
                Agendar Consultoria Estratégica
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-4 md:px-8 rounded-lg font-semibold text-base md:text-lg transition-all text-center">
                Conhecer Soluções
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-navy-dark tech-pattern">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ecossistema de Performance</h2>
            <div className="w-20 h-1 bg-electric-cyan mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PenTool, title: "Conteúdo", desc: "Estratégia criativa focada em retenção e autoridade, transformando sua marca em uma referência no nicho." },
              { icon: TrendingUp, title: "Performance", desc: "Gestão de tráfego pago baseada em dados reais, otimizando seu ROI com as melhores ferramentas do mercado." },
              { icon: Users, title: "CRM Próprio", desc: "Gestão de relacionamento customizada para o seu pipeline de vendas, centralizando dados em um só lugar." },
              { icon: MessageSquare, title: "Agentes IA", desc: "Atendimento via WhatsApp automatizado por IA que qualifica leads e fecha vendas 24 horas por dia." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.6 } } }}
                className="glass-card p-8 rounded-2xl hover:border-electric-cyan/50 hover:brightness-110 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 mb-6 text-electric-cyan">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Highlight Section */}
      <section id="tecnologia" className="py-24 bg-navy-medium relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Controle total e Atendimento 24/7 na palma da mão</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Nossa stack tecnológica integra um CRM de alta performance com agentes de Inteligência Artificial para garantir que nenhum lead seja perdido e toda interação seja uma oportunidade de venda.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-cyan rounded-full flex items-center justify-center shrink-0">
                  <Check size={12} className="text-navy-dark stroke-[3]" />
                </div>
                <span>Dashboard em tempo real para tomada de decisão</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-cyan rounded-full flex items-center justify-center shrink-0">
                  <Check size={12} className="text-navy-dark stroke-[3]" />
                </div>
                <span>Automação inteligente de fluxos de venda</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Right Visual (Mockup) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2 relative w-full"
          >
            {/* CRM Mockup Shape */}
            <div className="relative z-10 glass-card p-6 rounded-2xl w-full aspect-video overflow-hidden border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 h-2 w-32 bg-white/10 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 h-40 bg-white/5 rounded-lg p-4 border border-white/5 flex flex-col justify-end">
                  <div className="h-4 w-1/2 bg-electric-cyan/20 rounded mb-auto"></div>
                  <div className="flex items-end gap-2 h-20">
                    <div className="flex-1 bg-electric-cyan/40 h-[40%] rounded-t"></div>
                    <div className="flex-1 bg-electric-cyan/60 h-[70%] rounded-t"></div>
                    <div className="flex-1 bg-electric-cyan h-[100%] rounded-t"></div>
                    <div className="flex-1 bg-electric-cyan/50 h-[60%] rounded-t"></div>
                  </div>
                </div>
                <div className="col-span-1 h-40 bg-white/5 rounded-lg border border-white/5"></div>
              </div>
            </div>
            
            {/* Floating WhatsApp Bubble */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-2 md:-bottom-10 md:-left-10 z-20 glass-card p-3 md:p-4 rounded-2xl flex items-center gap-3 md:gap-4 max-w-[280px] md:max-w-xs border-electric-cyan/30"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-electric-cyan">IA Agente</p>
                <p className="text-xs md:text-sm">"Olá! Vi que você se interessou. Posso agendar sua consultoria agora?"</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="resultados" className="py-24 bg-navy-dark overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O que dizem nossos parceiros</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Com o trabalho de marketing da Adnove já consegui fechar alguns novos projetos.", name: "Valeria Paes", role: "Valeria Paes Arquitetura", image: "https://i.postimg.cc/T2WBdGq5/06.png" },
              { quote: "Meu posicionamento no digital era muito ruim. Agora já estou recebendo vários contatos por dia.", name: "Adriana Potye", role: "Psicóloga Clínica", border: true, image: "https://i.postimg.cc/43mBWbW7/03A.png" },
              { quote: "Fizeram um site e também colocaram um agente de IA que responde meu Whatsapp o dia todo. Adorei!.", name: "Patricia Mariano", role: "Lash Designer", image: "https://i.ibb.co/0V8N9JM9/Paty-3.png" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } } }}
                className={`glass-card p-8 rounded-2xl relative ${testimonial.border ? 'border-electric-cyan/30' : ''}`}
              >
                <div className="text-electric-cyan mb-4">
                  <Quote size={32} className="fill-current" />
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">Quem está à frente da sua estratégia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Sócio 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-8 rounded-full bg-gray-200 overflow-hidden shadow-md flex-shrink-0">
                {/* Profile Image */}
                <img src="https://i.postimg.cc/8z4Gc3hH/experiencia.png" alt="André Oliveira" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="text-blue-600">André Oliveira</span> <span className="text-gray-500 font-medium text-xl block mt-1 md:inline md:mt-0">- Gestor de Operações</span>
              </h3>
              <p className="text-gray-700 text-center leading-relaxed max-w-md">
                Minha especialidade é transformar o conhecimento técnico de especialistas em ativos digitais de alta conversão. Na Adnove, sou o responsável por garantir que cada estratégia de design e tráfego não seja apenas visualmente impecável, mas operacionalmente lucrativa.
              </p>
            </motion.div>

            {/* Sócio 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-8 rounded-full bg-gray-200 overflow-hidden shadow-md flex-shrink-0">
                {/* Profile Image */}
                <img src="https://i.postimg.cc/htyYHqLs/Fernando-1024x1024px.png" alt="Fernando Silvestre" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="text-blue-600">Fernando Silvestre</span> <span className="text-gray-500 font-medium text-xl block mt-1 md:inline md:mt-0">- Diretor Comercial</span>
              </h3>
              <p className="text-gray-700 text-center leading-relaxed max-w-md">
                Estrategista Comercial com sólido histórico em setores de alta complexidade e rigor técnico (Farmacêutico e Logístico). Especialista em transformar processos burocráticos em fluxos de alta performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-24 bg-navy-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-gradient-to-br from-navy-medium to-navy-dark p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric-cyan opacity-10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pronto para o próximo nível de escala?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Não deixe seu lucro na mesa por falta de tecnologia e estratégia. Nossos especialistas estão prontos para analisar o seu negócio.
            </p>
            <a href="https://api.whatsapp.com/send/?phone=551931405902&text=Ol%C3%A1%21+Quero+fazer+um+diagn%C3%B3stico+do+meu+neg%C3%B3cio&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-block bg-electric-cyan text-navy-dark px-6 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-xl hover:scale-105 transition-all glow-cyan uppercase tracking-wide">
              Solicitar Diagnóstico Gratuito
            </a>
            <p className="mt-6 text-sm text-gray-500">Vagas limitadas para novos parceiros este mês.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-navy-dark text-gray-500">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
          <p className="text-sm text-center md:text-left">© 2026 AdNove Consultoria em Marketing. Todos os direitos reservados.</p>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/554784641781?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20marketing%20para%20minha%20empresa"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 group pointer-events-auto"
        aria-label="WhatsApp"
      >
        <img 
          src="https://i.postimg.cc/7LJ2KsqH/whatsapp.png" 
          alt="WhatsApp" 
          className="w-7 h-7 object-contain drop-shadow-md"
          referrerPolicy="no-referrer"
        />
        <span className="absolute right-full mr-4 bg-navy-light text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 shadow-xl">
          Fale Conosco
        </span>
      </motion.a>
    </div>
  );
}
