import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-prk-deepTeal relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-prk-black rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <div className="grid md:grid-cols-2">
            <div className="h-full min-h-[400px] relative">
               {/* 
                 IMPORTANT: This image source matches the visual concept. 
                 In production, this should be the specific attachment provided by the user.
                 Since I cannot access local files, I will use a high-quality placeholder that matches the description 
                 or a generic professional portrait, but designed to easily swap.
               */}
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                 alt="Fundador PRK Experts" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-prk-black to-transparent opacity-80 md:bg-gradient-to-r"></div>
               
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white">Alexandre</h3>
                  <p className="text-prk-teal font-medium">Fundador & Estrategista</p>
               </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="w-16 h-1 bg-prk-magenta mb-8"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Quem Somos</h2>
              <blockquote className="text-xl text-gray-300 italic mb-8 leading-relaxed">
                "A PRK Experts nasceu da visão de transformar agências em verdadeiros centros de performance. Hoje, atuamos como um braço estratégico de empresas que querem parar de brincar de anunciar e realmente escalar resultados."
              </blockquote>
              <p className="text-gray-400">
                Lideramos uma equipe multidisciplinar focada em unir criatividade publicitária com a precisão da engenharia de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
