import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, PlaceholderBlock, NewsletterBox, Footer } from '../components/Global';

// --- Home Page ---

export const HomePage = () => {
  return (
    <main>
      <SEO 
        title="Nodus Studio | Soluciones digitales para negocios reales" 
        description="Diseño web, vídeos profesionales y soluciones IA para pymes. Enfoque consultivo, personalizado y orientado a resultados."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920" 
          alt="Aerial view of a winding river through dense forest"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Nodus Studio
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium mb-4 tracking-tight">
              Soluciones digitales para negocios reales
            </p>
            <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
              Webs, contenido visual y soluciones IA diseñadas a medida para negocios que quieren comunicar mejor, optimizar procesos y crecer con criterio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/webs-landing" 
                className="bg-white text-accent px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Ver servicios <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contacto" 
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Split */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              No trabajamos con fórmulas genéricas
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Cada negocio tiene necesidades distintas. Por eso, antes de proponer una web, un vídeo o una solución IA, analizamos el contexto y diseñamos una propuesta con sentido, ajustada a objetivos reales.
            </p>
          </div>
          <div className="bg-surface p-12 rounded-[40px] border border-line shadow-sm">
            <p className="text-2xl font-medium text-accent italic leading-snug">
              "El diferencial de Nodus Studio no es solo la ejecución. Es el criterio para entender qué necesita cada cliente."
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Servicios principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Webs & Landing Pages",
                text: "Páginas diseñadas para comunicar mejor, posicionar tu negocio y convertir interés en oportunidades.",
                href: "/webs-landing"
              },
              {
                title: "Vídeo & Contenido",
                text: "Vídeos promocionales y piezas visuales adaptadas a tu mensaje, tu marca y tu público.",
                href: "/video-contenido"
              },
              {
                title: "Soluciones IA",
                text: "Automatizaciones y sistemas prácticos para ahorrar tiempo y mejorar procesos en negocios reales.",
                href: "/soluciones-ia"
              }
            ].map((service, idx) => (
              <Link 
                key={idx} 
                to={service.href}
                className="group bg-white p-10 rounded-[32px] border border-line shadow-sm hover:shadow-nodus transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed flex-grow">{service.text}</p>
                <div className="flex items-center text-accent font-bold gap-2 group-hover:translate-x-2 transition-transform">
                  Saber más <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Ejemplos de trabajo</h2>
            <p className="text-text-secondary">Espacio preparado para mostrar una web, un vídeo y un caso visual de solución IA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlaceholderBlock 
              title="Ejemplo web" 
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
            />
            <PlaceholderBlock 
              title="Ejemplo vídeo" 
              type="video" 
              imageUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
            />
            <PlaceholderBlock 
              title="Ejemplo IA" 
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
            />
          </div>
        </div>
      </section>

      {/* Differentiator Band */}
      <section className="py-24 px-6 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Consultoría antes que plantilla</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            El diferencial de Nodus Studio no es solo la ejecución. Es el criterio para entender qué necesita cada cliente y convertirlo en una solución digital coherente, útil y bien resuelta.
          </p>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Webs & Landing Page ---

export const WebsLandingPage = () => {
  return (
    <main>
      <SEO 
        title="Diseño de webs y landing pages para pymes | Nodus Studio" 
        description="Creamos webs y landing pages a medida para pymes, con foco en claridad, posicionamiento SEO y conversión."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?auto=format&fit=crop&q=80&w=1920" 
          alt="Amanecer en el mar"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Webs que convierten, no solo que decoran
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
              Diseño y desarrollo de páginas pensadas para comunicar mejor, captar atención y generar negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Block */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Qué hacemos</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Diseñamos webs y landing pages adaptadas a la identidad, al sector y a los objetivos de cada cliente. No partimos de soluciones rígidas: trabajamos la estructura, el mensaje y la experiencia visual para que la página tenga sentido estratégico.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Landing page profesional", "Web corporativa", "Página de servicios", "Página de autor",
              "Blog o recursos", "Integración con newsletter", "SEO base on-page", "Diseño responsive"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-line shadow-sm">
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              "Analizamos tu negocio y qué necesitas comunicar.",
              "Definimos una estructura clara y funcional.",
              "Diseñamos una página alineada con tu marca.",
              "Optimizamos el contenido para claridad, SEO y conversión."
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-accent/5 mb-4">{idx + 1}</div>
                <p className="text-text-secondary font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Modalidades orientativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Landing esencial",
                price: "Desde 800 €",
                features: ["Una landing page", "Copy estructurado", "Diseño responsive", "CTA clara"]
              },
              {
                name: "Web de marca",
                price: "Desde 1.500 €",
                features: ["Web multipágina", "Arquitectura clara", "SEO base", "Páginas clave del negocio"]
              },
              {
                name: "Ecosistema digital",
                price: "Desde 2.500 €",
                features: ["Web completa", "Blog o recursos", "Newsletter", "Automatizaciones iniciales"]
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] border border-line shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-accent mb-2 uppercase tracking-widest">{plan.name}</h3>
                <div className="text-3xl font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="w-full py-4 text-center bg-accent text-white rounded-2xl font-bold hover:bg-accent-hover transition-all">
                  Pedir presupuesto
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-center">Ejemplos de webs</h2>
          <p className="text-text-secondary text-center mb-16">Bloque para insertar capturas, mockups o una vista interactiva.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PlaceholderBlock 
              title="Proyecto web 1" 
              imageUrl="https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800" 
            />
            <PlaceholderBlock 
              title="Proyecto web 2" 
              imageUrl="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800" 
            />
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Video & Contenido Page ---

export const VideoContenidoPage = () => {
  return (
    <main>
      <SEO 
        title="Vídeos promocionales y contenido digital para empresas | Nodus Studio" 
        description="Creamos vídeos promocionales y contenido visual adaptado a la identidad y objetivos de cada negocio."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1920" 
          alt="Paisaje cinematográfico"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 video-hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Vídeo & Contenido Premium
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium mb-4 tracking-tight">
              Piezas visuales con narrativa, estética y foco en negocio.
            </p>
            <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
              Vídeos promocionales y contenido digital diseñados a medida para elevar tu marca y hacer que tu mensaje se recuerde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio" 
                className="bg-white text-[#8E1E4F] px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Ver ejemplos <ArrowRight size={18} />
              </a>
              <Link 
                to="/contacto" 
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Pedir propuesta
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Block */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Qué hacemos</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Desarrollamos vídeos promocionales y piezas visuales adaptadas al cliente. Podemos trabajar a partir de un guion previo o construirlo desde cero, siempre con un objetivo claro: que el contenido conecte, explique y refuerce la marca.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Vídeos promocionales", "Presentación de servicios", "Contenido para redes",
              "Piezas visuales de marca", "Edición de materiales", "Adaptación de formatos"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-surface p-5 rounded-2xl border border-line">
                <div className="w-2 h-2 rounded-full bg-[#8E1E4F]" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Muestras de vídeo</h2>
            <p className="text-text-secondary">Grid editorial preparado para incrustar vídeos o mostrar miniaturas con enlace.</p>
          </div>
          
          <div className="mb-12">
            <PlaceholderBlock 
              title="Vídeo destacado (featured)" 
              type="video" 
              imageUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vídeo 1", url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
              { title: "Vídeo 2", url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800" },
              { title: "Vídeo 3", url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800" },
              { title: "Vídeo 4", url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" },
              { title: "Vídeo 5", url: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80&w=800" }
            ].map((video, i) => (
              <div key={i}>
                <PlaceholderBlock title={video.title} type="video" imageUrl={video.url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Modalidades orientativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vídeo corto",
                price: "Desde 350 €",
                features: ["Pieza breve", "Edición limpia", "Mensaje claro", "Formato optimizado"]
              },
              {
                name: "Vídeo de marca",
                price: "Desde 800 €",
                features: ["Mayor desarrollo visual", "Trabajo narrativo", "Personalización", "Acabado más premium"]
              },
              {
                name: "Contenido mensual",
                price: "Desde 1.000 €/mes",
                features: ["Piezas periódicas", "Coherencia visual", "Acompañamiento", "Mayor continuidad"]
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] border border-line shadow-sm flex flex-col group hover:border-[#8E1E4F]/30 transition-all">
                <h3 className="text-xl font-bold text-[#8E1E4F] mb-2 uppercase tracking-widest">{plan.name}</h3>
                <div className="text-3xl font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8E1E4F]/30" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="w-full py-4 text-center bg-[#8E1E4F] text-white rounded-2xl font-bold hover:bg-[#A3265B] transition-all">
                  Pedir propuesta
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Soluciones IA Page ---

export const SolucionesIAPage = () => {
  return (
    <main>
      <SEO 
        title="Soluciones IA para pymes y negocios reales | Nodus Studio" 
        description="Analizamos procesos, detectamos oportunidades e implementamos soluciones IA útiles, comprensibles y adaptadas a cada negocio."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1920" 
          alt="Industria al atardecer"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Automatiza lo que te hace perder tiempo
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
              Soluciones IA aplicadas a necesidades reales de negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Block */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Qué hacemos</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Escuchamos cómo funciona tu negocio, detectamos tareas repetitivas o mejorables y valoramos dónde la IA puede aportar de verdad. No vendemos complejidad técnica: proponemos soluciones prácticas, entendibles y útiles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              "Automatización de tareas repetitivas", "Generación de materiales visuales",
              "Optimización de flujos internos", "Sistemas de apoyo a formación",
              "Asistencia en contenido y documentación", "Procesos personalizados por caso"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-line shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent font-bold">
                  {idx + 1}
                </div>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Text Section (Humanizing IA) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Panadera trabajando - IA aplicada"
                className="rounded-[40px] shadow-nodus border border-line aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">IA aplicada a negocios reales</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                El objetivo visual es humanizar la IA y alejarse del cliché futurista. Trabajamos con personas reales en sus negocios: una panadera, una hostelera, una reunión inmobiliaria, un pequeño comercio o una oficina.
              </p>
              <div className="space-y-4">
                {[
                  "Entendemos el flujo real del negocio.",
                  "Identificamos cuellos de botella.",
                  "Valoramos oportunidades de mejora.",
                  "Estimamos ahorro de tiempo e impacto.",
                  "Diseñamos una solución ajustada."
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Modalidades orientativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Diagnóstico IA",
                price: "Desde 200 €",
                features: ["Análisis inicial", "Detección de oportunidades", "Valoración realista", "Enfoque práctico"]
              },
              {
                name: "Implementación concreta",
                price: "Desde 600 €",
                features: ["Solución puntual", "Automatización definida", "Ajuste al negocio", "Validación funcional"]
              },
              {
                name: "Solución a medida",
                price: "Desde 2.000 €",
                features: ["Proyecto personalizado", "Mayor alcance", "Más procesos", "Escalabilidad"]
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] border border-line shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-accent mb-2 uppercase tracking-widest">{plan.name}</h3>
                <div className="text-3xl font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="w-full py-4 text-center bg-accent text-white rounded-2xl font-bold hover:bg-accent-hover transition-all">
                  Saber más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Ejemplos de aplicación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Generación visual de guías", text: "Caso orientado a transformar imágenes de referencia en materiales útiles y comprensibles." },
              { title: "Optimización de procesos internos", text: "Caso orientado a reducir tiempo y mejorar tareas repetitivas." }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-12 rounded-[40px] border border-line">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Sobre Nosotros Page ---

export const SobreNosotrosPage = () => {
  return (
    <main>
      <SEO 
        title="Sobre nosotros | Nodus Studio" 
        description="Enfoque consultivo, creativo y estratégico para desarrollar soluciones digitales útiles, claras y adaptadas a cada cliente."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920" 
          alt="Reunión en oficina moderna con presentación"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Consultoría, creatividad y criterio
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
              Una forma de trabajar basada en entender primero y ejecutar después.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Nuestro enfoque</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                No trabajamos como una agencia tradicional ni como un simple proveedor técnico. El punto de partida siempre es comprender qué necesita el cliente, qué quiere comunicar y qué solución tiene sentido en su contexto.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Qué aportamos</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Combinamos visión estratégica, sensibilidad narrativa y herramientas digitales para diseñar propuestas personalizadas. Nuestra forma de trabajar prioriza la claridad, la adaptación y el criterio por encima del ruido.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-line shadow-nodus">
            <h3 className="text-2xl font-bold mb-10 tracking-tight">Principios de trabajo</h3>
            <div className="space-y-8">
              {[
                "Escuchar antes de proponer", 
                "Personalizar antes que repetir", 
                "Resolver antes que impresionar", 
                "Buscar utilidad antes que artificio"
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <p className="text-lg font-semibold text-text-primary">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Blog Page ---

export const BlogPage = () => {
  const posts = [
    {
      title: "IA en negocios: cómo aplicarla sin caer en el ruido",
      slug: "/blog/ia-en-negocios-como-aplicarla-sin-caer-en-el-ruido",
      category: "IA",
      excerpt: "Una mirada práctica a cómo la inteligencia artificial puede aportar valor real a pymes y negocios sin convertirse en una moda vacía."
    },
    {
      title: "Diseño web para pymes: claves para una página que inspire confianza",
      slug: "/blog/diseno-web-para-pymes-claves-para-una-pagina-que-inspire-confianza",
      category: "Web",
      excerpt: "Qué debe tener una web profesional para que una pyme comunique mejor, refuerce su marca y convierta visitas en oportunidades."
    },
    {
      title: "Landing page profesional: qué elementos necesita para convertir mejor",
      slug: "/blog/landing-page-profesional-que-elementos-necesita-para-convertir-mejor",
      category: "Web",
      excerpt: "Estructura, mensaje, jerarquía y llamadas a la acción: lo esencial para que una landing page funcione de verdad."
    },
    {
      title: "Vídeos promocionales para empresas: cuándo merecen la pena",
      slug: "/blog/videos-promocionales-para-empresas-cuando-merecen-la-pena",
      category: "Vídeo",
      excerpt: "Cómo valorar si un vídeo promocional puede ayudarte a presentar mejor tu negocio, tus servicios o tu propuesta de valor."
    },
    {
      title: "SEO para pymes: cómo mejorar tu visibilidad sin complicarte",
      slug: "/blog/seo-para-pymes-como-mejorar-tu-visibilidad-sin-complicarte",
      category: "SEO",
      excerpt: "Una guía clara para entender qué puede hacer una pyme para posicionarse mejor en buscadores sin entrar en tecnicismos innecesarios."
    },
    {
      title: "Automatización para negocios: qué procesos conviene revisar primero",
      slug: "/blog/automatizacion-para-negocios-que-procesos-conviene-revisar-primero",
      category: "IA",
      excerpt: "Antes de automatizar, conviene saber dónde se pierde tiempo. Este artículo repasa los procesos más habituales."
    }
  ];

  return (
    <main>
      <SEO 
        title="Blog de webs, IA y estrategia digital para pymes | Nodus Studio" 
        description="Artículos sobre diseño web, SEO, marketing visual, automatización e inteligencia artificial aplicada a negocios reales."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=1920" 
          alt="Cascada en la selva"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Ideas, recursos y criterio digital
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
              Contenido útil sobre webs, vídeo, SEO, automatización e IA aplicada a negocios reales.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-12">Últimos artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article key={idx} className="group bg-white rounded-[24px] overflow-hidden border border-line shadow-sm hover:shadow-nodus transition-all duration-500 flex flex-col">
                <div className="aspect-[16/10] bg-surface-alt overflow-hidden relative">
                   <img 
                     src={
                       post.category === 'IA' ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' :
                       post.category === 'Web' ? 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' :
                       post.category === 'Vídeo' ? 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800' :
                       'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800'
                     }
                     alt={post.title}
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={post.slug} className="text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Leer más <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};

// --- Contacto Page ---

export const ContactoPage = () => {
  return (
    <main>
      <SEO 
        title="Contacto | Nodus Studio" 
        description="Habla con Nodus Studio para estudiar una web, un vídeo o una solución IA adaptada a tu negocio."
      />
      
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1920" 
          alt="Escucha activa en consultoría"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Cuéntame qué necesitas
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
              Si tienes una idea, una necesidad concreta o un proceso que quieres mejorar, podemos estudiarlo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-line shadow-nodus">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Formulario de contacto</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Nombre</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Empresa</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Servicio de interés</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20 appearance-none">
                  <option>Webs & Landing Pages</option>
                  <option>Vídeo & Contenido</option>
                  <option>Soluciones IA</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Cuéntame tu proyecto</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-surface border border-line focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-accent text-white rounded-2xl font-bold hover:bg-accent-hover transition-all text-lg">
                Enviar consulta
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">También puedes contactar por redes</h2>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              Si lo prefieres, puedes escribir a través de Instagram, LinkedIn o X. Estaré encantado de escucharte.
            </p>
            <div className="flex flex-col space-y-6">
               {[
                 { platform: "Instagram", href: "https://instagram.com/" },
                 { platform: "LinkedIn", href: "https://linkedin.com/" },
                 { platform: "X", href: "https://x.com/" }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center justify-between p-6 bg-white rounded-2xl border border-line hover:border-accent transition-all group"
                 >
                   <span className="font-bold text-lg">{social.platform}</span>
                   <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                 </a>
               ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterBox />
      <Footer />
    </main>
  );
};
