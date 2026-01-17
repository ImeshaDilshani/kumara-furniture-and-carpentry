
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, WHATSAPP_LINK, TAGLINE, TRUST_INDICATORS, SERVICES, TESTIMONIALS, BUSINESS_NAME_SI } from '../constants';
import { ArrowRight, Phone, MessageSquare, ChevronRight, Star, Hammer, MapPin, Award, Trees, Quote, ShieldCheck } from 'lucide-react';

const heroUrl = new URL('../assets/hero-image.jpg', import.meta.url).href;

const Hero = () => {
  return (
    <section className="relative h-[95vh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-stone-950">
      {/* Background Image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroUrl}
          alt={BUSINESS_NAME_SI}
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" 
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
            
            {/* Creative Title Group */}
            <div className="mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="inline-flex items-center space-x-3 mb-6 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-wood-100 font-bold uppercase tracking-[0.2em] text-xs">
                     Island-wide Service Available
                   </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[0.95] text-white hero-title tracking-tight text-shadow-lg">
                  <span className="block text-stone-300 text-3xl md:text-5xl lg:text-6xl font-serif italic mb-2 opacity-90">
                    Quality
                  </span>
                  Solid Wood Furniture.
                </h1>
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed text-stone-300 font-medium text-shadow-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              We build strong, beautiful furniture for your home.
              <span className="block mt-2 text-white/80 text-base">Delivering to all parts of Sri Lanka.</span>
            </p>

            {/* CTA Buttons - High Visibility */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              
              {/* Primary Action */}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noreferrer" 
                className="w-full sm:w-auto relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-8 py-4 rounded-2xl transition-all flex items-center justify-start space-x-4 border border-emerald-400/30">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <MessageSquare size={26} fill="currentColor" className="text-emerald-50" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-100 opacity-90 mb-0.5">Start Project</span>
                      <span className="block text-xl font-bold leading-none">WhatsApp Quote</span>
                    </div>
                </div>
              </a>

              {/* Secondary Action */}
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 pl-4 pr-8 py-4 rounded-2xl transition-all backdrop-blur-md flex items-center justify-start space-x-4 group"
              >
                 <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                   <Phone size={26} className="text-wood-300" />
                 </div>
                 <div className="text-left">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-0.5">Quick Call</span>
                  <span className="block text-xl font-bold leading-none">Call Now</span>
                </div>
              </a>
            </div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="relative z-10 w-full border-t border-white/5 bg-black/40 backdrop-blur-md mt-auto">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-6 gap-6 md:gap-0 text-stone-300 text-xs md:text-sm font-medium tracking-wide">
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                 <MapPin size={18} className="text-wood-500" />
                 <span>Serving All Sri Lanka</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-stone-600"></div>
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                 <Trees size={18} className="text-wood-500" />
                 <span>Teak • Mahogany • Jack • Mara</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-stone-600"></div>
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                 <ShieldCheck size={18} className="text-wood-500" />
                 <span>Quality first</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900 transition-colors relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-wood-600 dark:text-wood-400 font-black uppercase tracking-widest text-xs mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-stone-900 dark:text-stone-100 leading-tight">
              Built on <span className="text-wood-600 dark:text-wood-500 underline decoration-wood-300/50 underline-offset-8">Values</span>, <br/> 
              Crafted for Life.
            </h2>
          </div>
          <p className="text-stone-500 dark:text-stone-400 max-w-sm text-right md:text-left text-sm md:text-base font-medium">
            We don't cut corners. We sand them to perfection. Experience the difference of true craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TRUST_INDICATORS.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-white dark:bg-stone-950 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-wood-900/10 transition-all duration-300 hover:-translate-y-2 border border-stone-100 dark:border-stone-800 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-wood-50/50 to-transparent dark:from-wood-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 bg-wood-100 dark:bg-wood-900 flex items-center justify-center text-wood-700 dark:text-wood-400 mb-6 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner relative z-10">
                {React.cloneElement(indicator.icon, { size: 28, strokeWidth: 1.5 })}
              </div>
              <h4 className="font-bold text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 relative z-10">{indicator.text}</h4>
              <p className="text-[10px] font-black text-wood-400 uppercase tracking-widest relative z-10">{indicator.textEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CraftsmanshipHighlight = () => {
  return (
    <section className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
           <div className="w-full lg:w-1/2 relative group">
              {/* Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={new URL('../assets/images/hand.jpg', import.meta.url).href}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100" 
                  alt="Carpenter actively shaving wood" 
                />
                <div className="absolute inset-0 bg-wood-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                   <div className="flex items-center space-x-4">
                      <div className="bg-wood-600 text-white p-3 rounded-full">
                        <Award size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-stone-500 dark:text-stone-400">Excellence</p>
                        <p className="font-bold text-stone-900 dark:text-stone-100 text-lg">Master Carpenter Certified</p>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-wood-200 dark:border-wood-800 rounded-[2.5rem]"></div>
           </div>
           
           <div className="w-full lg:w-1/2 text-left space-y-10">
              <div className="space-y-4">
                <span className="inline-block bg-wood-100 dark:bg-wood-900/30 text-wood-800 dark:text-wood-300 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest">
                  Mastering the Grain
                </span>
                <h2 className="text-5xl md:text-7xl font-bold font-display text-stone-900 dark:text-stone-100 leading-[1.1]">
                  It's Not Just Wood. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-600 to-amber-600 dark:from-wood-400 dark:to-amber-400">It's a Legacy.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-stone-100 dark:bg-stone-800 p-2 rounded-lg">
                     <Trees className="text-wood-600 dark:text-wood-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stone-900 dark:text-stone-100">Hand-Selected Timber</h4>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed mt-1">We personally visit timber mills to select the finest Teak, Mahogany, and Mara logs, ensuring grain consistency.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-stone-100 dark:bg-stone-800 p-2 rounded-lg">
                     <ShieldCheck className="text-wood-600 dark:text-wood-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stone-900 dark:text-stone-100">Joinery That Lasts</h4>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed mt-1">No staples. We use traditional mortise and tenon joints reinforced with modern adhesives for unbreakable bonds.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-stone-200 dark:border-stone-800">
                <Link to="/gallery" className="group inline-flex items-center space-x-2 text-lg font-bold text-stone-900 dark:text-stone-100">
                  <span className="border-b-2 border-wood-500 group-hover:border-transparent transition-all">View Our Gallery</span>
                  <div className="w-8 h-8 bg-wood-500 rounded-full flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedServices = () => {
  return (
    <section className="py-32 bg-stone-100 dark:bg-stone-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-stone-900 dark:text-stone-100 mb-6">Our Services</h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
            Whether it's a statement dining table or a functional pantry, we bring the same level of precision to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, index) => (
            <div key={service.id} className="group flex flex-col bg-white dark:bg-stone-900 rounded-[2rem] shadow-xl shadow-stone-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-wood-900/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-stone-100 dark:border-stone-800">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3">
                      <Hammer size={20} className="text-wood-200" />
                   </div>
                   <h3 className="text-2xl font-bold font-display">{service.title}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-stone-600 dark:text-stone-400 line-clamp-3 mb-8 flex-grow leading-relaxed">{service.description}</p>
                <Link to="/services" className="w-full py-4 rounded-xl border border-stone-200 dark:border-stone-700 text-center font-bold text-sm uppercase tracking-widest text-stone-600 dark:text-stone-300 hover:bg-wood-600 hover:text-white hover:border-wood-600 transition-all flex items-center justify-center space-x-2 group-hover:space-x-4">
                  <span>View Details</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link to="/services" className="inline-block px-12 py-5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-wood-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
           <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
             {/* <Star size={14} fill="currentColor" className="text-amber-400" /> */}
             <span className="text-xs font-bold uppercase tracking-widest text-wood-200">Client Stories</span>
           </div>
           <h2 className="text-4xl md:text-7xl font-bold font-display mb-6">Trusted By Happy Customers</h2>
           <p className="text-wood-200 text-xl max-w-2xl mx-auto leading-relaxed opacity-80">
             Real feedback from homeowners across Colombo and beyond.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={t.id} 
              className="group relative p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-wood-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={64} className="text-wood-300 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-8 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <div className="flex-grow">
                 <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-stone-200 mb-8">
                   "{t.text}"
                 </p>
              </div>

              {/* Author/Location Info */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                   <h4 className="font-bold text-lg text-white">{t.name}</h4>
                   <div className="flex items-center space-x-2 mt-1 text-wood-400 group-hover:text-amber-400 transition-colors">
                      <MapPin size={14} />
                      <span className="text-xs font-black uppercase tracking-widest">{t.location}</span>
                   </div>
                </div>
                {/* Initial Avatar */}
                <div className="w-12 h-12 bg-wood-800 rounded-full flex items-center justify-center font-display font-bold text-xl border border-white/10 text-wood-200">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light">
        <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Texture" />
      </div>
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-wood-950 to-transparent"></div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="bg-stone-900 text-white rounded-[2.5rem] p-8 md:p-24 text-center relative overflow-hidden border border-stone-800 shadow-2xl isolate">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-wood-500 to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-wood-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-wood-500/20 text-wood-300 border border-wood-500/30 px-5 py-2 rounded-full mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-700">
             <Star size={16} fill="currentColor" className="text-amber-400" />
             <span className="text-xs md:text-sm font-black uppercase tracking-widest">100% Free Consultation</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-[0.95] tracking-tight">
            Planning a Project? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-200 via-amber-200 to-wood-200">Get a Free Estimate.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-stone-400 mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
            Don't guess the cost. Send us a photo or sketch, and we'll give you an honest price with no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noreferrer" 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white pl-8 pr-10 py-5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/40 flex items-center justify-center space-x-4 group border border-emerald-500/50"
            >
              <div className="p-3 bg-emerald-700 rounded-xl group-hover:bg-emerald-600 transition-colors">
                <MessageSquare size={24} fill="currentColor" className="text-emerald-100" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest opacity-80 mb-0.5">Recommended</span>
                <span className="block text-xl font-bold leading-none">WhatsApp Quote</span>
              </div>
            </a>

            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 pl-8 pr-10 py-5 rounded-2xl transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center space-x-4 group"
            >
               <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                 <Phone size={24} className="text-wood-300" />
               </div>
               <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">Fast Response</span>
                <span className="block text-xl font-bold leading-none">Call for Price</span>
              </div>
            </a>
          </div>

          <p className="mt-10 text-xs md:text-sm text-stone-500 font-medium tracking-wide uppercase">
            No Obligation • Valid for 30 Days • Direct from Carpenter
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <TrustSection />
      <CraftsmanshipHighlight />
      <FeaturedServices />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
