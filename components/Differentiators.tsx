import React from 'react';
import { DIFFERENTIATORS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Differentiators: React.FC = () => {
  return (
    <section className="py-24 bg-prk-black relative overflow-hidden">
        {/* Background Accents */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-prk-teal/10 to-transparent blur-3xl opacity-30" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white">
              Por que a <span className="text-prk-teal">PRK Experts</span> é diferente?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              O mercado está cheio de promessas vazias. Nós entregamos processo, método e clareza.
            </p>
            
            <div className="space-y-6">
              {DIFFERENTIATORS.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-prk-magenta" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-prk-magenta to-prk-deepTeal rounded-2xl transform rotate-6 opacity-30 blur-lg"></div>
             <div className="relative bg-prk-deepTeal border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <h3 className="font-bold text-white">Performance em Tempo Real</h3>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                {/* Abstract Data Representation */}
                <div className="space-y-4">
                    <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                        <div className="h-full bg-prk-teal w-[75%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>Meta de Leads</span>
                        <span className="text-prk-teal">75% atingida (Dia 15)</span>
                    </div>

                    <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden mt-6">
                        <div className="h-full bg-prk-magenta w-[92%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>ROAS (Retorno)</span>
                        <span className="text-prk-magenta">9.2x</span>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-300 italic">
                        "Foco total em resultado — e não só em likes ou cliques."
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
