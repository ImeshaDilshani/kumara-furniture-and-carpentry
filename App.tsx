
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, MapPin, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import { BUSINESS_NAME, BUSINESS_NAME_SI, PHONE_NUMBER, PHONE_NUMBER_SECONDARY, WHATSAPP_LINK } from './constants';

const logoUrl = new URL('./assets/logo.png', import.meta.url).href;

const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md border-b bg-white/80 dark:bg-stone-950/80 border-stone-200 dark:border-stone-800 transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group space-x-4">
          <img src={logoUrl} alt={BUSINESS_NAME} className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-base font-medium transition-all hover:text-wood-600 dark:hover:text-wood-400 ${location.pathname === link.path ? 'text-wood-600 dark:text-wood-400 font-semibold' : 'text-stone-600 dark:text-stone-300'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 pl-4 border-l border-stone-200 dark:border-stone-800">
            <button 
              onClick={toggleTheme}
              className="p-2 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="bg-wood-800 dark:bg-wood-600 text-white px-6 py-2.5 text-sm font-semibold rounded-full flex items-center space-x-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-wood-800/20">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
           <button onClick={toggleTheme} className="p-2 text-stone-600 dark:text-stone-400">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-900 dark:text-stone-100">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full h-screen bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-bold font-display ${location.pathname === link.path ? 'text-wood-600' : 'text-stone-600 dark:text-stone-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-stone-100 dark:border-stone-900 space-y-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="w-full bg-wood-700 text-white flex items-center justify-center py-4 text-lg font-semibold rounded-xl">
                Call Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center py-4 text-lg font-semibold rounded-xl">
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-stone-100 dark:bg-stone-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-display mb-2 text-stone-900 dark:text-stone-100">{BUSINESS_NAME_SI}</h3>
            <p className="max-w-md text-stone-600 dark:text-stone-400 leading-relaxed text-lg mb-8">
              Reliable local carpentry from our home to yours. We specialize in custom woodwork that lasts for generations.
            </p>
            <div className="flex space-x-4">
               <a href={WHATSAPP_LINK} className="w-12 h-12 bg-white dark:bg-stone-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all rounded-2xl shadow-sm">
                 <MessageSquare size={22} />
               </a>
               <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="w-12 h-12 bg-white dark:bg-stone-800 flex items-center justify-center hover:bg-wood-600 hover:text-white transition-all rounded-2xl shadow-sm">
                 <Phone size={22} />
               </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-stone-900 dark:text-stone-100">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-stone-600 dark:text-stone-400 hover:text-wood-600 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-stone-600 dark:text-stone-400 hover:text-wood-600 transition-colors">Project Gallery</Link></li>
              <li><Link to="/about" className="text-stone-600 dark:text-stone-400 hover:text-wood-600 transition-colors">About Story</Link></li>
              <li><Link to="/contact" className="text-stone-600 dark:text-stone-400 hover:text-wood-600 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-stone-900 dark:text-stone-100">Contact Details</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-wood-100 dark:bg-wood-950/50 flex items-center justify-center rounded-xl text-wood-700 dark:text-wood-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="font-medium text-stone-700 dark:text-stone-300">Minuwangoda & Island-wide</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-wood-100 dark:bg-wood-950/50 flex items-center justify-center rounded-xl text-wood-700 dark:text-wood-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-stone-700 dark:text-stone-300">{PHONE_NUMBER}</span>
                  <span className="text-sm text-stone-500 dark:text-stone-500">{PHONE_NUMBER_SECONDARY}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-stone-200 dark:border-stone-800 text-center">
          <p className="text-sm text-stone-500 dark:text-stone-400">© {new Date().getFullYear()} {BUSINESS_NAME}. Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-white p-4 shadow-2xl hover:scale-110 active:scale-95 transition-all rounded-2xl group flex items-center space-x-3"
  >
    <MessageSquare size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
      WhatsApp Us
    </span>
  </a>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen pt-16">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}
