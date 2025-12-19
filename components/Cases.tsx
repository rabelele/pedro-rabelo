import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export const Cases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CONTENT.cases.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CONTENT.cases.items.length) % CONTENT.cases.items.length);
  };

  return (
    <section id="cases" className="py-24 bg-[#022939] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64ccc5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-[#e8edee] mb-4">
                {CONTENT.cases.title}
                </h2>
                <p className="text-[#94fadb] text-lg">Histórias reais de empresas que escalaram com nossa metodologia.</p>
            </div>
            
            <div className="flex space-x-4 mt-8 md:mt-0">
                <button onClick={prevSlide} className="p-3 rounded-full border border-gray-600 text-white hover:bg-[#64ccc5] hover:border-[#64ccc5] hover:text-[#022939] transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full border border-gray-600 text-white hover:bg-[#ba16bb] hover:border-[#ba16bb] transition-all">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        <div className="relative h-auto min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Active Card - Highlighted */}
            <div 
                key={currentIndex}
                className="bg-[#171822] rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl relative overflow-hidden group animate-fade-slide-up"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba16bb] filter blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                <span className="inline-block px-4 py-1 rounded-full bg-[#64ccc5]/10 text-[#64ccc5] text-sm font-bold mb-6 border border-[#64ccc5]/20">
                    CASE DE SUCESSO
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {CONTENT.cases.items[currentIndex].title}
                </h3>

                <div className="mb-8">
                    <p className="text-[#94fadb] text-4xl md:text-5xl font-extrabold leading-tight">
                        {CONTENT.cases.items[currentIndex].result.split(' ').slice(0, 1).join(' ')}
                        <span className="text-white text-2xl md:text-3xl block mt-2">
                             {CONTENT.cases.items[currentIndex].result.split(' ').slice(1).join(' ')}
                        </span>
                    </p>
                </div>

                <div className="space-y-3">
                    {CONTENT.cases.items[currentIndex].highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-[#ba16bb] mr-3" />
                            <span>{hl}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Card Preview (Visual Context) */}
            <div className="hidden md:flex flex-col justify-center space-y-6 opacity-60 scale-95 pointer-events-none select-none">
                 {CONTENT.cases.items.map((item, idx) => (
                     <div 
                        key={item.id} 
                        className={`p-6 rounded-xl border-l-4 transition-all duration-300 ${idx === currentIndex ? 'bg-[#171822] border-[#ba16bb] scale-105 opacity-100 shadow-lg' : 'border-gray-700 hover:bg-[#171822]/50'}`}
                     >
                        <h4 className={`font-bold text-lg ${idx === currentIndex ? 'text-white' : 'text-gray-400'}`}>{item.title}</h4>
                        <p className="text-sm text-gray-500 truncate">{item.result}</p>
                     </div>
                 ))}
            </div>
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {CONTENT.cases.items.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-[#64ccc5] w-6' : 'bg-gray-600'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};