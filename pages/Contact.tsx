
import React from 'react';
import { PHONE_NUMBER, PHONE_NUMBER_SECONDARY, WHATSAPP_LINK, LOCATION } from '../constants';
import { Phone, MessageSquare, MapPin, Clock, Sparkles } from 'lucide-react';

export default function Contact() {

  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-wood-400/20 dark:bg-wood-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 py-2 px-5 rounded-full bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm border border-wood-200 dark:border-wood-800 shadow-lg mb-8">
            <Sparkles size={16} className="text-wood-600 dark:text-wood-400" />
            <span className="text-sm font-bold text-wood-700 dark:text-wood-300 uppercase tracking-wider">Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-display bg-gradient-to-r from-stone-900 via-wood-800 to-stone-900 dark:from-stone-100 dark:via-wood-200 dark:to-stone-100 bg-clip-text text-transparent leading-tight">
            Get in Touch
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We're just a call or message away. Let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Phone Card - Primary */}
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="group relative bg-gradient-to-br from-wood-600 to-wood-800 dark:from-wood-700 dark:to-wood-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={28} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-3">Primary Number</h3>
                <p className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">{PHONE_NUMBER}</p>
                <p className="text-white/80 font-medium">Tap to call now</p>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-emerald-600 dark:to-emerald-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={28} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-3">WhatsApp Chat</h3>
                <p className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">Message Us</p>
                <p className="text-white/80 font-medium">Quick response guaranteed</p>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Secondary Phone */}
          <a href={`tel:${PHONE_NUMBER_SECONDARY.replace(/\s/g, '')}`} className="group block bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl border border-stone-200 dark:border-stone-700 hover:border-wood-400 dark:hover:border-wood-600 transition-all duration-300 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-wood-100 to-wood-200 dark:from-wood-900 dark:to-wood-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-wood-700 dark:text-wood-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">Alternate Number</p>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{PHONE_NUMBER_SECONDARY}</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-stone-100 dark:bg-stone-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-stone-600 dark:text-stone-300">→</span>
              </div>
            </div>
          </a>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Location Card */}
            <div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center mb-4">
                <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">Service Area</h3>
              <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">{LOCATION}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-medium">Island-wide delivery available</p>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl flex items-center justify-center mb-4">
                <Clock size={24} className="text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 dark:text-stone-400">Mon - Sat</span>
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 dark:text-stone-400">Sunday</span>
                  <span className="text-sm font-bold text-wood-700 dark:text-wood-400">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 dark:text-stone-400 text-lg mb-6 font-medium">
              We respond to all inquiries within <span className="font-bold text-wood-700 dark:text-wood-400">24 hours</span>
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-stone-500 dark:text-stone-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Available now • Ready to help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
