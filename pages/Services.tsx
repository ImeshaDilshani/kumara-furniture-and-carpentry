
import React from 'react';
import { SERVICES, PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import { CheckCircle2, Phone, ArrowRight, Zap, Hammer, Ruler, PenTool } from 'lucide-react';

export default function Services() {
  return (
    <div className="animate-in fade-in duration-500 bg-stone-50 dark:bg-stone-950 transition-colors min-h-screen">
      
      {/* Header Section - Dark & Dramatic like Home Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-stone-950">
         {/* Background Elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent opacity-50"></div>
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-wood-900/20 rounded-full blur-3xl"></div>
             <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-5xl text-center">
            <div className="inline-flex items-center space-x-2 bg-wood-500/10 border border-wood-500/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                <Zap size={14} fill="currentColor" className="text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-wood-300">Professional Carpentry</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold font-display text-white leading-[0.95] mb-8 tracking-tight">
              Mastery in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-wood-300 via-amber-200 to-wood-500 font-serif italic pr-4">
                Every Detail.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
               From structural woodwork to delicate finishes. We bring 15+ years of experience to every corner of your home.
            </p>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-4 py-24 md:py-32 space-y-32 md:space-y-48">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent opacity-60"></div>
               </div>

               {/* Decorative floating elements */}
               <div className="absolute -top-6 -left-6 md:-left-10 bg-wood-600 text-white w-20 h-20 md:w-24 md:h-24 rounded-3xl shadow-xl flex flex-col items-center justify-center border-4 border-stone-50 dark:border-stone-950 z-10">
                  <span className="text-2xl md:text-3xl font-bold font-display leading-none">0{index + 1}</span>
               </div>
               
               {/* Icon Badge */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6 md:-left-10' : '-right-6 md:-right-10'} bg-white dark:bg-stone-800 p-6 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-700 hidden md:block z-10`}>
                   <Hammer className="text-wood-500" size={32} strokeWidth={1.5} />
                </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div>
                   <h2 className="text-4xl md:text-6xl font-bold font-display text-stone-900 dark:text-stone-100 mb-6 leading-tight">
                    {service.title}
                   </h2>
                   <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                     {service.description}
                   </p>
                </div>
                
                {/* Use Cases Box */}
                <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Ruler size={100} className="text-stone-900 dark:text-stone-100" />
                   </div>
                   
                   <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-stone-400 flex items-center space-x-3">
                     <span className="w-8 h-px bg-wood-500"></span>
                     <span>Common Applications</span>
                   </h4>
                   
                   <ul className="grid grid-cols-1 gap-4 relative z-10">
                     {service.useCases.map((useCase, i) => (
                       <li key={i} className="flex items-center space-x-3 group/item">
                         <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                           <CheckCircle2 size={14} strokeWidth={3} />
                         </div>
                         <span className="font-medium text-stone-700 dark:text-stone-300">{useCase}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-wood-600 dark:hover:bg-wood-300 hover:text-white dark:hover:text-stone-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <PenTool size={16} />
                    <span>Get a Quote</span>
                  </a>
                  <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center space-x-3 bg-transparent border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
                  >
                    <span>Call to Discuss</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA - Unique to Services */}
      <section className="container mx-auto px-4 pb-24">
        <div className="bg-gradient-to-br from-wood-900 to-stone-950 text-white rounded-[2.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl border border-wood-800/50">
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-900/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-block p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-8">
               <Zap size={32} className="text-amber-400" fill="currentColor" />
             </div>
            <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 leading-tight">
              Have a custom design <br/> in mind?
            </h2>
            <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              If you can sketch it, we can build it. We specialize in bespoke furniture that fits your space perfectly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-4 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-emerald-900/40 hover:-translate-y-1">
                    <span>Send Design Photo</span>
                    <ArrowRight size={20} />
                 </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
