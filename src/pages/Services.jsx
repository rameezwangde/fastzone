import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, Building2, Briefcase, Scale, 
  Landmark, Globe, Zap, Users, ShoppingCart, 
  Shield, CreditCard 
} from 'lucide-react';

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    document.title = "Exclusive Business Services | Fast Zone Prime UAE";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Explore our interactive suite of premium business setup, corporate tax, legal advisory, and comprehensive company formation services in the UAE.');
  }, []);

  const categories = [
    {
      id: "01",
      title: "Setup & Licensing",
      desc: "Architecting your corporate foundation in the UAE. From free zones to mainland, we navigate the bureaucratic landscape.",
      icon: Building2,
      img: "/services/setup-licensing.png",
      services: ["New Business Setup", "Trade License Formation", "Business Bank Account", "Ejari Services", "Company Liquidation"]
    },
    {
      id: "02",
      title: "Tax & Accounting",
      desc: "Ensuring flawless financial compliance and strategic monetary planning.",
      icon: Landmark,
      img: "/services/tax-accounting.png",
      services: ["Corporate Tax", "VAT Registration", "VAT Return Filing", "Accounting Services"]
    },
    {
      id: "03",
      title: "Visa & PRO",
      desc: "Seamless immigration, investor visas, and efficient government liaison.",
      icon: Briefcase,
      img: "/services/visa-pro.png",
      services: ["Immigration Visas", "Visa Cancellation", "Document Clearing"]
    },
    {
      id: "04",
      title: "Legal & Advisory",
      desc: "Strategic safeguards, structural compliance, and premium brand protection.",
      icon: Scale,
      img: "/services/legal-advisory.png",
      services: ["Legal Advisory", "Corporate Services", "AML Registration", "Trademark"]
    }
  ];



  const industries = [
    { name: "Startups", icon: Zap },
    { name: "Entrepreneurs", icon: Users },
    { name: "SMEs", icon: Briefcase },
    { name: "Corporate Groups", icon: Building2 },
    { name: "Investors", icon: Globe },
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "Professional", icon: Shield },
    { name: "Trading Co.", icon: CreditCard }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
  };

  return (
    <div className="w-full bg-black text-white font-sans overflow-hidden selection:bg-primary selection:text-black">
      
      {/* 1. CINEMATIC MINIMAL HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-16 px-6 lg:px-20 bg-black overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1800" 
            alt="Dubai Modern Skyline Background" 
            className="w-full h-full object-cover scale-100 animate-[slow-zoom_30s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-20" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-black to-black z-20 pointer-events-none" />
        
        <div className="relative z-30 max-w-6xl">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.9] tracking-tighter mb-10"
          >
            Corporate Solutions <br />
            <span className="italic font-light text-white/40">Redefined.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10"
          >
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl leading-relaxed">
              Comprehensive business setup, licensing, compliance, advisory, and support services engineered for modern enterprises in the UAE.
            </p>
            <Link to="/contact" className="group flex items-center gap-6 pb-2 border-b border-primary text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors shrink-0">
              Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE ACCORDION GALLERY (Ecosystem) */}
      <section className="py-20 bg-black">
        <div className="px-6 lg:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4 font-bold">The Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">Our Service Architecture</h3>
          </div>
          <p className="text-gray-500 font-light max-w-sm text-sm">Interact with the gallery below to explore our five major service categories and specialized offerings.</p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row w-full h-[120vh] lg:h-[75vh] gap-2 lg:gap-4 px-6 lg:px-10">
          {categories.map((cat, idx) => {
            const isActive = activeAccordion === idx;
            const Icon = cat.icon;
            
            return (
              <motion.div 
                key={cat.id}
                onMouseEnter={() => setActiveAccordion(idx)}
                onClick={() => setActiveAccordion(idx)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group ${isActive ? 'flex-[4] lg:flex-[6] rounded-[2rem] lg:rounded-[3rem]' : 'flex-[1] rounded-[1rem] lg:rounded-[2rem]'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className={`w-full h-full object-cover transition-transform duration-[2s] ${isActive ? 'scale-100' : 'scale-110 grayscale'}`} 
                  />
                  <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-gradient-to-t from-black via-black/50 to-transparent' : 'bg-black/70 group-hover:bg-black/50'}`} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-6 lg:p-12 flex flex-col justify-end">
                  
                  {/* INACTIVE STATE: Vertical Text (Desktop) or Horizontal Text (Mobile) */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <h3 className="text-2xl md:text-3xl font-heading text-white/50 lg:-rotate-90 whitespace-nowrap tracking-widest">{cat.title}</h3>
                  </div>

                  {/* ACTIVE STATE: Expanded Content */}
                  <div className={`flex flex-col justify-end h-full transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 flex items-center justify-center text-primary">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-5xl lg:text-7xl font-heading text-white/20 font-bold">{cat.id}</span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-6xl font-heading text-white mb-4">{cat.title}</h3>
                    <p className="text-lg text-gray-300 font-light max-w-xl mb-10 leading-relaxed drop-shadow-md">
                      {cat.desc}
                    </p>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-3">
                      {cat.services.map((service, sIdx) => (
                        <span key={sIdx} className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white text-sm font-light hover:bg-primary hover:border-primary hover:text-black transition-colors duration-300">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Category 05: Featured Span Block */}
        <div className="px-6 lg:px-10 mt-10">
          <motion.div 
            {...fadeInUp}
            className="w-full rounded-[2rem] lg:rounded-[3rem] bg-zinc-900 border border-white/5 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative group"
          >
            <img
              src="/services/complete-business-support.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000 mix-blend-overlay"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-xs uppercase tracking-widest mb-6">Complete Package</span>
              <h3 className="text-4xl lg:text-5xl font-heading text-white mb-6">End-to-End Business Support</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                A holistic consultancy approach covering setup, licensing, visas, taxation, compliance, legal support, and business growth solutions entirely under one roof.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="flex items-center justify-center w-32 h-32 rounded-full bg-white text-black font-heading text-lg hover:bg-primary transition-colors duration-500 hover:scale-105 active:scale-95 shadow-2xl">
                Start <br/>Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. DYNAMIC MARQUEE (Industries We Support) */}
      <section className="pt-12 pb-12 bg-black border-t border-white/5 overflow-hidden">
        <div className="px-6 lg:px-10 flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4 font-bold">Sectors</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">Industries We Empower</h3>
          </div>
        </div>

        {/* Infinite Scrolling Marquee Effect */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6">
          {/* Fading Edges */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex justify-between">
            <div className="w-24 h-full bg-gradient-to-r from-black to-transparent" />
            <div className="w-24 h-full bg-gradient-to-l from-black to-transparent" />
          </div>
          
          <div className="flex gap-6 animate-[scroll_40s_linear_infinite] w-max hover:[animation-play-state:paused]">
            {[...industries, ...industries, ...industries].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="flex items-center gap-4 px-8 py-6 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-black" />
                  </div>
                  <span className="text-2xl font-heading text-white/50 group-hover:text-white transition-colors duration-300 whitespace-nowrap">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE CTA */}
      <section className="pt-12 pb-32 relative bg-black overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')] bg-cover bg-center opacity-30 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-heading leading-tight mb-8 text-white">
              Ready to Accelerate Your UAE Vision?
            </h2>
            <p className="text-gray-400 font-light text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">
              Partner with Fast Zone Prime for strategic business solutions and flawless corporate execution.
            </p>
            
            <Link to="/contact" className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-primary text-dark hover:bg-white transition-all duration-500 uppercase tracking-[0.2em] text-sm font-bold shadow-[0_0_50px_rgba(212,175,55,0.4)]">
              Schedule Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add custom CSS animation for Marquee and Background Zoom */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.12); }
        }
      `}} />
    </div>
  );
};

export default Services;
