import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Eye } from 'lucide-react';
import { useRef, useEffect } from 'react';

const About = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Dynamically set metadata for SEO optimization
  useEffect(() => {
    document.title = "About Us | UAE Business Setup & Company Formation | Fast Zone Prime";
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Learn about Fast Zone Prime, the leading business setup consultancy in Dubai, UAE. We specialize in mainland, free zone, and offshore company formations since 2014.');
  }, []);

  // Parallax and scroll transform mappings
  const bgY = useTransform(scrollY, [0, 600], ["0px", "150px"]);
  const textY = useTransform(scrollY, [0, 600], ["0px", "75px"]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Story Section Parallax
  const storyRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });
  const storyImg1Y = useTransform(storyScroll, [0, 1], ["0%", "15%"]);
  const storyImg2Y = useTransform(storyScroll, [0, 1], ["0%", "-20%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
  };

  const values = [
    { title: "Excellence", desc: "Uncompromising standards in every corporate solution." },
    { title: "Integrity", desc: "Absolute transparency in our consultancy and legal processes." },
    { title: "Client-Centric", desc: "Strategies architected purely around your growth objectives." },
    { title: "Efficiency", desc: "Streamlining bureaucracy for rapid market entry." }
  ];

  return (
    <div className="w-full bg-dark text-accent">
      {/* Schema.org Structured Data for About Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Fast Zone Prime",
          "description": "Fast Zone Prime is a premier business consultancy firm based in the UAE, specializing in mainland, free zone, and offshore company formations and trade license setups.",
          "url": "https://fastzoneprime.com/about",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Fast Zone Prime",
            "image": "https://fastzoneprime.com/about_hero_bg.png",
            "priceRange": "$$",
            "knowsAbout": [
              "Dubai Business Setup",
              "UAE Company Formation",
              "Mainland and Free Zone Company Registration",
              "PRO Services Dubai",
              "Offshore Business Setup UAE"
            ],
            "slogan": "Bridging global corporate ambitions with local operational success",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            }
          }
        })}
      </script>

      {/* Editorial Hero */}
      <section 
        ref={heroRef} 
        className="relative min-h-[70vh] flex items-center overflow-visible border-b border-white/5 bg-dark pt-32 pb-8"
        aria-label="About Fast Zone Prime Business Setup Consultants"
      >
        {/* Background Image Container with Parallax & Slow Zoom */}
        <motion.div 
          style={{ y: bgY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-dark/75 z-10" />
          <motion.img 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.7 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="/about_hero_bg.png" 
            alt="Fast Zone Prime - UAE Business Setup Consultants in Dubai, Company Formation and PRO Services Background" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Custom overlays for dark theme blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark z-20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-25" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-30 pt-4">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-primary mb-3 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-primary" /> UAE Business Setup Specialists
            </motion.p>
            <motion.h1 
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.95] tracking-tighter"
            >
              Architects of <br/>
              <span className="text-gradient-gold italic pr-4">Corporate Success</span>
            </motion.h1>
            
            <motion.p
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
              className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mt-8 leading-relaxed"
            >
              For over a decade, our professional <strong>business setup consultants in Dubai</strong> have crafted bespoke <strong>company formation</strong> strategies, turning complex UAE regulatory frameworks into streamlined pathways for local and global enterprises.
            </motion.p>
          </div>
        </div>


      </section>

      {/* The Story - Premium Collage Layout with Rich SEO Structure */}
      <section 
        ref={storyRef} 
        className="pt-8 pb-10 relative overflow-hidden"
        itemScope 
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="Fast Zone Prime" />
        <meta itemProp="foundingDate" content="2014" />
        <meta itemProp="logo" content="https://fastzoneprime.com/logo.png" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Parallax Image Collage */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] flex items-center justify-center mt-12 lg:mt-0 order-2 lg:order-1">
              <motion.div 
                style={{ y: storyImg1Y }}
                className="absolute left-0 top-0 w-3/4 h-[70%] z-10 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-dark/20 z-10" />
                <img 
                  src="/about/our-story-office.png" 
                  alt="Corporate headquarters of Fast Zone Prime in Dubai - UAE Business Setup & Company Formation Consultancy" 
                  title="Fast Zone Prime Corporate Office Dubai"
                  className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                  itemProp="image"
                />
              </motion.div>
              
              <motion.div 
                style={{ y: storyImg2Y }}
                className="absolute right-0 bottom-10 w-2/3 h-[60%] z-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                <img 
                  src="/about/our-story-advisory.png" 
                  alt="Business setup consultants advising clients on Dubai mainland and free zone company setup options" 
                  title="Dubai Company Formation Advisory Meeting"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Glass Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute left-10 bottom-20 z-30 glass-panel p-6 items-center gap-4 hidden md:flex"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-heading text-xl leading-none mb-1">Est. 2014</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Premium Advisory</p>
                </div>
              </motion.div>
            </div>
            
            {/* Typography Focus & Keyword Integration */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="lg:col-span-6 space-y-10 order-1 lg:order-2"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary" /> Our Story
                </p>
                <h2 className="text-5xl md:text-6xl font-heading leading-tight" itemProp="slogan">
                  Elevating <br/>
                  <span className="text-gradient-gold italic pr-4">Business Setup</span> <br/>
                  & Company Formation in the UAE.
                </h2>
              </div>
              
              <div className="relative pl-8 border-l border-primary/30 py-2">
                <p className="text-gray-300 font-light leading-relaxed text-lg mb-6" itemProp="description">
                  Since our inception in 2014, <strong>Fast Zone Prime</strong> has served as a trusted partner for <strong>Dubai mainland company formation</strong>, <strong>UAE free zone license setup</strong>, and <strong>offshore business registration</strong>. We specialize in translating complex legal guidelines and governmental procedures into streamlined, cost-effective pathways for international entrepreneurs, SMEs, and corporate conglomerates.
                </p>
                <p className="text-2xl font-heading italic text-white leading-relaxed">
                  "With a dedicated team of elite <strong>business setup consultants</strong> and <strong>PRO service experts in Dubai</strong>, we align local operational licenses with your global growth ambitions."
                </p>
              </div>

              <Link 
                to="/services" 
                className="group relative inline-flex items-center gap-6 pb-2 border-b border-primary/30 hover:border-primary transition-colors text-sm uppercase tracking-[0.2em] font-light mt-4"
              >
                <span className="group-hover:text-primary transition-colors">Discover Our Expertise</span>
                <span className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Cardless Editorial Layout */}
      <section className="pt-16 pb-8 relative overflow-hidden bg-dark border-y border-white/5" aria-label="Our Mission and Vision for UAE Company Formation">
        {/* Background Watermark Typography */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-[0.03] overflow-hidden select-none">
          <h2 className="text-[22vw] font-heading leading-[0.8] whitespace-nowrap tracking-tighter">MISSION</h2>
          <h2 className="text-[22vw] font-heading leading-[0.8] whitespace-nowrap tracking-tighter text-right">VISION</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Mission Row */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <div className="lg:w-1/3 flex flex-col items-start">
                <div className="flex items-center gap-6 mb-3">
                  <span className="w-16 h-[1px] bg-primary"></span>
                  <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-heading">Our Mission</h2>
                </div>
                <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center text-primary relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                  <Target className="w-8 h-8 relative z-10" />
                </div>
              </div>
              
              <div className="lg:w-2/3 border-l border-white/10 pl-8 lg:pl-16 relative">
                <div className="absolute left-0 top-0 w-[1px] h-32 bg-gradient-to-b from-primary to-transparent" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-10">
                  To deliver <span className="text-gradient-gold italic font-light">unparalleled corporate solutions</span>, transforming complex UAE business setup and company formation processes into seamless growth pathways.
                </h3>
                
                <div className="flex flex-wrap gap-x-12 gap-y-6 text-xs uppercase tracking-widest text-gray-400">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Rapid Dubai Market Entry</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tailored Corporate Structuring</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Absolute Legal Transparency</span>
                </div>
              </div>
            </motion.div>

            {/* Vision Row */}
            <motion.div 
              {...fadeInUp}
              className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-start"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <div className="lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right">
                <div className="flex items-center gap-6 mb-3 lg:justify-end">
                  <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-heading hidden lg:block">Our Vision</h2>
                  <span className="w-16 h-[1px] bg-primary"></span>
                  <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-heading lg:hidden">Our Vision</h2>
                </div>
                <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center text-primary relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                  <Eye className="w-8 h-8 relative z-10" />
                </div>
              </div>
              
              <div className="lg:w-2/3 border-l lg:border-l-0 lg:border-r border-white/10 pl-8 lg:pl-0 lg:pr-16 relative text-left lg:text-right">
                <div className="absolute left-0 lg:left-auto lg:right-0 top-0 w-[1px] h-32 bg-gradient-to-b from-primary to-transparent" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-10">
                  To be the most <span className="text-gradient-gold italic font-light">trusted business setup advisory</span> in Dubai and the wider UAE, bridging global entrepreneur ambitions with sustainable local success.
                </h3>
                
                <div className="flex flex-wrap lg:justify-end gap-x-12 gap-y-6 text-xs uppercase tracking-widest text-gray-400">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Premium Advisory Services</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Forward-Thinking Business Solutions</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> High-Growth Client Focus</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values - Cardless Editorial Split Layout */}
      <section className="pt-10 pb-24 relative bg-dark">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            
            {/* Left: Sticky Intro */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.div {...fadeInUp}>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="w-16 h-[1px] bg-primary"></span>
                    <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-heading">Our Philosophy</h2>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-heading text-white leading-[1.1] mb-8">
                    The principles that <br/>
                    <span className="text-gradient-gold italic font-light">define our</span> excellence.
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-lg max-w-sm">
                    Our core values are not merely words—they are the architectural blueprint of every business setup strategy we deliver in the UAE.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right: Interactive Cardless List */}
            <div className="lg:w-2/3">
              <div className="flex flex-col border-t border-white/10">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.77, 0, 0.175, 1] }}
                    className="group relative py-12 md:py-16 border-b border-white/10 hover:border-primary/50 transition-colors duration-700"
                  >
                    {/* Hover reveal gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                      {/* Number Indicator */}
                      <span className="text-2xl md:text-3xl font-heading font-light text-white/10 group-hover:text-primary transition-colors duration-500 w-12">
                        0{index + 1}
                      </span>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
                        <h4 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white group-hover:italic group-hover:text-gradient-gold transition-all duration-500 shrink-0">
                          {value.title}
                        </h4>
                        <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-xs group-hover:text-gray-200 transition-colors duration-500">
                          {value.desc}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="hidden md:flex w-14 h-14 rounded-full border border-white/10 items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 shrink-0 relative overflow-hidden">
                        <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-primary transition-transform duration-500 -rotate-45 group-hover:rotate-0 absolute" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
