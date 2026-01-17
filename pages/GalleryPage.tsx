
import React, { useState } from 'react';
import { GALLERY, PHONE_NUMBER } from '../constants';
import { ArrowUpRight, Camera, Hammer } from 'lucide-react';

export default function GalleryPage() {
  const categories = ['All', ...new Set(GALLERY.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = activeCategory === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-stone-950 overflow-hidden">
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-wood-800/20 rounded-full blur-3xl"></div>
             <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl"></div>
         </div>
         
         <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-stone-800 pb-12">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center space-x-2 bg-wood-500/10 border border-wood-500/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                      <Camera size={14} fill="currentColor" className="text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-wood-300">Project Showcase</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-bold font-display text-white leading-none tracking-tight">
                    Crafted <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-300 to-amber-200 font-serif italic">Masterpieces.</span>
                  </h1>
               </div>
               <p className="text-stone-400 max-w-sm text-lg font-light leading-relaxed mb-2">
                 Real projects from real homes. Explore the quality we deliver across Sri Lanka.
               </p>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-300 ${activeCategory === cat 
                ? 'bg-wood-600 text-white border-wood-600 shadow-lg shadow-wood-600/20 scale-105' 
                : 'bg-white dark:bg-stone-900 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-800 hover:border-wood-400 dark:hover:border-wood-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-[2rem] bg-stone-200 dark:bg-stone-900 shadow-md hover:shadow-2xl hover:shadow-wood-900/20 transition-all duration-500 hover:-translate-y-2 border border-stone-100 dark:border-stone-800 ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-50 group-hover:saturate-100"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-wood-500/20 backdrop-blur-md border border-wood-500/30 rounded-lg text-wood-200 text-[10px] font-black uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.beforeImageUrl && (
                      <span className="inline-block px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-lg text-amber-200 text-[10px] font-black uppercase tracking-widest">
                         Restoration
                      </span>
                    )}
                  </div>
                  <h3 className="text-white text-2xl font-bold font-display leading-tight mb-4 group-hover:text-wood-200 transition-colors">{item.title}</h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <button className="flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1 w-fit">
                      <span>View Project</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-40 bg-stone-100 dark:bg-stone-900/50 rounded-[3rem] border border-dashed border-stone-300 dark:border-stone-800">
             <div className="w-20 h-20 bg-stone-200 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer size={32} className="text-stone-400" />
             </div>
             <p className="text-stone-500 font-bold text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-40 mb-20 relative">
           <div className="absolute inset-0 flex items-center" aria-hidden="true">
             <div className="w-full border-t border-stone-200 dark:border-stone-800"></div>
           </div>
           <div className="relative flex justify-center">
             <span className="bg-stone-50 dark:bg-stone-950 px-6 text-stone-400 text-sm font-medium uppercase tracking-widest">
               Inspired by what you see?
             </span>
           </div>
           <div className="mt-12 text-center">
             <a href={`tel:${PHONE_NUMBER}`} className="group relative inline-flex items-center justify-center px-12 py-6 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-2xl">
               <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-wood-500 rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>
               <span className="relative flex items-center space-x-3">
                 <span>Start Your Order</span>
                 <ArrowUpRight size={18} />
               </span>
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
