import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-prk-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-prk-teal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-prk-magenta/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-prk-mint uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-prk-magenta animate-pulse"></span>
            Vagas abertas para 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Transformamos Marketing em <span className="text-transparent bg-clip-text bg-gradient-to-r from-prk-teal to-prk-mint">Vendas</span> com Método e Inteligência.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            A PRK Experts é a aceleradora de negócios por trás dos bastidores de empresas que decidiram crescer com previsibilidade. Estratégia, tráfego, CRM e branding em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="flex items-center justify-center gap-2 text-lg">
              Solicitar Diagnóstico Gratuito
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative hidden md:block">
           <div className="relative z-10 glass-card p-6 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl border-t border-l border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard Analytics" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-prk-deepTeal p-4 rounded-xl shadow-xl border border-prk-teal/30">
                 <div className="flex items-center gap-3">
                   <div className="bg-prk-mint/20 p-2 rounded-lg">
                     <ArrowRight className="text-prk-teal rotate-[-45deg]" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400">ROI Atual</p>
                     <p className="text-xl font-bold text-white">+ 450%</p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
