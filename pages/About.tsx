
import React from 'react';
import { BUSINESS_NAME, TAGLINE } from '../constants';
import { Heart, Star, Users, MapPin, Award, UserCheck, Ruler, Fingerprint } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Heart className="w-6 h-6" />, title: "Family Values", text: "Treating every customer like a neighbor." },
    { icon: <Award className="w-6 h-6" />, title: "Skilled Legacy", text: "Generations of knowledge in every joint." },
    { icon: <Users className="w-6 h-6" />, title: "Direct Access", text: "Talk directly to Kumara, your lead carpenter." },
    { icon: <Star className="w-6 h-6" />, title: "Local Pride", text: "Supporting local homes with local talent." },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-stone-50 dark:bg-stone-950 transition-colors">
      
      {/* Hero / Intro */}
      <section className="pt-32 pb-20 px-4 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
             <div className="absolute inset-0 bg-wood-500 rounded-[3rem] rotate-6 opacity-20 blur-xl group-hover:rotate-3 transition-transform duration-700"></div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-stone-100 dark:border-stone-800 -rotate-2 group-hover:rotate-0 transition-transform duration-700 bg-stone-200">
              <img src="https://images.unsplash.com/photo-1572916118970-fb5c8a1cb3d1?auto=format&fit=crop&q=80&w=1200" alt="Carpenter Story" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-10 left-10 text-white">
                 <div className="flex items-center space-x-3 mb-2">
                   <UserCheck className="text-wood-400" size={24} />
                   <span className="text-sm font-bold uppercase tracking-widest text-wood-200">Lead Carpenter</span>
                 </div>
                 <h3 className="text-3xl font-display font-bold">Mr. Kumara</h3>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-stone-900 text-white p-8 md:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center border-4 border-stone-50 dark:border-stone-900">
              <span className="text-5xl md:text-6xl font-bold font-display leading-none text-wood-500">15+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60 text-center">Years<br/>Experience</span>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
                <span className="inline-block py-1 px-3 rounded-lg bg-wood-100 dark:bg-wood-900/30 text-wood-800 dark:text-wood-300 font-black uppercase tracking-[0.2em] text-xs mb-6">
                    Our Story
                </span>
                <h1 className="text-6xl md:text-8xl font-bold font-display text-stone-900 dark:text-stone-100 leading-[0.9]">
                  Heritage <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-600 to-amber-600 dark:from-wood-400 dark:to-amber-400">& Craft.</span>
                </h1>
            </div>
            
            <div className="pl-6 border-l-4 border-wood-500/30 space-y-6">
                 <p className="text-2xl leading-relaxed text-stone-800 dark:text-stone-200 font-serif italic">
                "We believe a home is built on pieces that last. Not flat-pack boards, but solid timber carved with care."
                </p>
            </div>

            <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              <p>
                Started from a small workshop at our family home in the outskirts of the city, <span className="text-stone-900 dark:text-stone-100 font-bold">{BUSINESS_NAME}</span> was born from a simple need: quality furniture at a price neighbors can afford.
              </p>
              <p>
                Kumara spent his youth learning the language of wood—the way it breathes, the way it settles, and the way it becomes part of a family's history. Today, he leads every project personally, ensuring that the legacy of true craftsmanship never fades.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-8 border-t border-stone-200 dark:border-stone-800">
               <div className="flex items-center space-x-3">
                  <Ruler className="text-wood-500" />
                  <span className="text-sm font-bold uppercase tracking-wide text-stone-500">Precision</span>
               </div>
               <div className="flex items-center space-x-3">
                  <Fingerprint className="text-wood-500" />
                  <span className="text-sm font-bold uppercase tracking-wide text-stone-500">Unique</span>
               </div>
               <div className="flex items-center space-x-3">
                  <Heart className="text-wood-500" />
                  <span className="text-sm font-bold uppercase tracking-wide text-stone-500">Passion</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-stone-100 dark:bg-stone-900 py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-stone-900 dark:text-stone-100 mb-6">Built on Principles</h2>
            <div className="w-24 h-1 bg-wood-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-10 bg-white dark:bg-stone-950 rounded-[2.5rem] border border-stone-200 dark:border-stone-800 hover:border-wood-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-stone-200/50 dark:shadow-none hover:shadow-wood-900/10">
                <div className="w-14 h-14 bg-stone-100 dark:bg-stone-900 rounded-2xl flex items-center justify-center text-wood-600 dark:text-wood-400 group-hover:bg-wood-500 group-hover:text-white transition-colors duration-500 mb-8 shadow-inner">
                    {v.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-stone-900 dark:text-stone-100 mb-4">{v.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Brand Statement */}
      <section className="py-24 px-4 container mx-auto">
        <div className="p-12 md:p-24 bg-stone-950 text-white rounded-[3rem] text-center relative overflow-hidden shadow-2xl border border-stone-800">
           <div className="relative z-10 max-w-4xl mx-auto">
             <Award className="w-16 h-16 text-amber-500 mx-auto mb-8 animate-pulse" />
             <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 leading-tight">
               Honest Craft. <br/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-200 via-amber-200 to-wood-200 italic">No Shortcuts.</span>
             </h2>
             <p className="text-xl md:text-2xl text-stone-400 mb-12 font-light max-w-2xl mx-auto">
               When you choose us, you're not just buying furniture. You're supporting a local craftsman who stands behind every screw, every joint, and every polish.
             </p>
             <div className="inline-block border border-white/20 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md">
                <span className="font-black tracking-[0.3em] uppercase text-xs text-wood-300">
                  {TAGLINE}
                </span>
             </div>
           </div>
           
           {/* Abstract Background */}
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wood-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}
