import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0f1016] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-prk-teal/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-prk-magenta/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-prk-teal font-bold tracking-widest text-xs uppercase mb-3 block">
            Nossa Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Soluções completas para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prk-teal to-prk-mint">escalar seu negócio</span>
          </h2>
          <p className="text-lg text-gray-400">
            Ultrapassamos o básico. Atuamos como um braço estratégico focado em trazer previsibilidade e lucro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-[#171822] border border-white/5 hover:border-prk-teal/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-prk-teal/10 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-prk-teal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-[#232431] rounded-2xl flex items-center justify-center group-hover:bg-prk-teal transition-colors duration-300 shadow-inner group-hover:shadow-prk-teal/40">
                        <service.icon size={28} className="text-prk-teal group-hover:text-[#171822] transition-colors duration-300" />
                    </div>
                    
                    <ArrowUpRight className="text-gray-600 group-hover:text-prk-teal transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-prk-teal transition-colors duration-300">
                    {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="w-full h-[1px] bg-white/5 group-hover:bg-prk-teal/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};