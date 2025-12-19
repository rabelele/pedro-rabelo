import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, PlayCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-prk-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-2xl relative flex flex-col h-full hover:bg-white/5 transition-colors">
              <Quote className="text-prk-magenta/50 mb-6" size={40} />
              
              {t.type === 'video' ? (
                <div className="w-full aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center group cursor-pointer border border-white/10 relative overflow-hidden">
                    <img src={`https://picsum.photos/seed/${t.id}/400/300`} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Video thumbnail" />
                    <PlayCircle size={48} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all">
                        <span className="sr-only">Play Video</span>
                    </div>
                </div>
              ) : null}

              <p className="text-gray-300 mb-6 flex-grow italic">"{t.content}"</p>
              
              <div className="border-t border-white/10 pt-6 mt-auto">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-prk-teal">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
