import React from 'react';
import { Button } from './Button';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-prk-deepTeal relative overflow-hidden">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-prk-magenta to-purple-800 py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Você está a uma conversa de transformar seu marketing em um sistema real de vendas.
          </h2>
          <div className="mt-8">
             <Button variant="secondary" className="text-lg px-12 py-4 shadow-xl text-prk-deepTeal font-extrabold">
                Solicitar Diagnóstico Gratuito
             </Button>
          </div>
        </div>
      </div>

      {/* Links & Copy */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-2xl font-bold text-white tracking-tighter">
             prk<span className="text-prk-teal">.</span>
           </div>
           
           <div className="flex gap-6">
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
             <a href="mailto:contato@prkexperts.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
           </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; 2024-2026 PRK Experts. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
