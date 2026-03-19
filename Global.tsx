import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Twitter } from 'lucide-react';

// --- Types ---

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

// --- Components ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isVideoPage = location.pathname === '/video-contenido';
  
  // Transparent on top if it's a hero page
  const shouldBeTransparent = (isHome || isVideoPage) && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Webs & Landing", href: "/webs-landing" },
    { label: "Vídeo & Contenido", href: "/video-contenido" },
    { label: "Soluciones IA", href: "/soluciones-ia" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-sm py-4 shadow-sm border-b border-line'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-xl font-bold tracking-tighter transition-colors ${shouldBeTransparent ? 'text-white' : 'text-text-primary'}`}>
          Nodus Studio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href} 
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                shouldBeTransparent ? 'text-white' : 'text-text-primary'
              } ${location.pathname === item.href ? 'underline underline-offset-4' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              shouldBeTransparent 
                ? 'bg-white text-accent hover:bg-opacity-90' 
                : 'bg-accent text-white hover:bg-accent-hover'
            }`}
          >
            Hablemos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${shouldBeTransparent ? 'text-white' : 'text-text-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-line shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-primary hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-white py-3 rounded-xl text-center font-bold"
              >
                Hablemos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">Nodus Studio</h3>
            <p className="text-footer-text/60 max-w-xs text-sm leading-relaxed">
              Soluciones digitales para negocios reales. Consultoría, diseño y tecnología con criterio.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-footer-text/40 mb-2">Navegación</h4>
            <Link to="/webs-landing" className="hover:text-white transition-colors text-sm">Webs & Landing</Link>
            <Link to="/video-contenido" className="hover:text-white transition-colors text-sm">Vídeo & Contenido</Link>
            <Link to="/soluciones-ia" className="hover:text-white transition-colors text-sm">Soluciones IA</Link>
            <Link to="/sobre-nosotros" className="hover:text-white transition-colors text-sm">Sobre nosotros</Link>
            <Link to="/blog" className="hover:text-white transition-colors text-sm">Blog</Link>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-footer-text/40 mb-4">Sigue a Nodus Studio</h4>
            <div className="flex space-x-6">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-footer-text/40">
          <p>© {new Date().getFullYear()} Nodus Studio. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contacto" className="hover:text-white">Aviso Legal</Link>
            <Link to="/contacto" className="hover:text-white">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const NewsletterBox = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[32px] shadow-nodus text-center border border-line">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Únete a la newsletter</h2>
        <p className="text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Recibe ideas, recursos y enfoques útiles sobre webs, contenido digital, automatización e IA aplicada a negocios reales.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu email" 
            className="flex-1 px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            required
          />
          <button 
            type="submit" 
            className="bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent-hover transition-all whitespace-nowrap"
          >
            Unirme
          </button>
        </form>
      </div>
    </section>
  );
};

export const PlaceholderBlock = ({ title, type = 'image', imageUrl }: { title: string, type?: 'image' | 'video', imageUrl?: string }) => {
  return (
    <div className="aspect-video bg-surface-alt rounded-card flex flex-col items-center justify-center border border-line overflow-hidden group relative">
      {imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="z-10 text-center p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-1">{type === 'video' ? 'Video' : 'Proyecto'}</p>
            <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="z-10 text-center p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-accent/40 mb-2">{type === 'video' ? 'Video Placeholder' : 'Image Placeholder'}</p>
            <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export const SEO = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
};
