import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const services = [
    { title: "Business Setup Consultancy", desc: "Expert guidance on choosing the right jurisdiction and legal structure in the UAE." },
    { title: "Company Formation UAE", desc: "End-to-end registration processes for Mainland, Free Zone, and Offshore companies." },
    { title: "Trade License Assistance", desc: "Seamless processing and renewals of commercial, professional, and industrial licenses." },
    { title: "PRO & Documentation", desc: "Swift processing of government documents, visas, and legal paperwork." },
  ];

  const stats = [
    { value: "500+", label: "UAE Businesses Setup" },
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Consultants" },
  ];

  return (
    <div className="w-full bg-dark text-accent" ref={containerRef}>
      {/* Schema.org Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Fast Zone Prime",
          "alternateName": "Fast Zone Prime Business Setup",
          "description": "Fast Zone Prime offers premium business setup consultancy, mainland and free zone company formation, trade licensing, and corporate solutions in Dubai and the UAE.",
          "url": "https://fastzoneprime.com",
          "logo": "https://fastzoneprime.com/logo.png",
          "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2048,
            "longitude": 55.2708
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Business Setup Consultancy"
            },
            {
              "@type": "Offer",
              "name": "Company Formation UAE"
            },
            {
              "@type": "Offer",
              "name": "Trade License Assistance"
            },
            {
              "@type": "Offer",
              "name": "PRO & Documentation Services"
            }
          ]
        })}
      </script>

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center" aria-label="Introduction to Fast Zone Prime Business Setup">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-dark/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070" 
            alt="Fast Zone Prime Business Setup & Company Formation Dubai UAE Skyline" 
            className="w-full h-full object-cover scale-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-20" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-30 pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold pl-[12px]">
                  Fast Zone Prime &bull; Corporate Consultancy Dubai
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[1.0] tracking-tighter">
                  Business Setup <br/>
                  <span className="text-gradient-gold italic pr-4">& Company Formation UAE</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light tracking-wide leading-relaxed">
                Fast Zone Prime offers premium business setup consultancy, mainland and free zone company formation, trade licensing, and end-to-end corporate solutions across the UAE.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8"
            >
              <Link 
                to="/contact" 
                title="Book a free consultation with our UAE business setup consultants"
                aria-label="Book a free consultation with our UAE business setup consultants"
                className="group relative inline-flex items-center gap-6 pb-2 border-b border-primary/30 hover:border-primary transition-colors text-lg uppercase tracking-[0.2em] font-light"
              >
                <span className="group-hover:text-primary transition-colors">Get Free Consultation</span>
                <span className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Divider */}
      <div className="w-full py-6 glass-panel overflow-hidden border-y border-white/5 relative z-30 bg-dark">
        <div className="marquee-container">
          <div className="marquee-content gap-12 text-sm uppercase tracking-[0.3em] text-primary/70">
            {Array(8).fill("• Premium Business Setup • Corporate Advisory • UAE Company Formation • PRO Services ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Why Choose Us / Fast Zone Advantage - Editorial Layout */}
      <section className="pt-12 pb-16 relative bg-dark" aria-labelledby="advantage-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-semibold" id="advantage-heading">
                The Fast Zone Advantage
              </span>
              <h2 className="text-5xl md:text-6xl font-heading mb-8 leading-tight">
                Corporate Setup <br/>
                <span className="italic text-gray-400">Experts in Dubai</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                We simplify the complexities of starting a company in the UAE. Our team of certified corporate advisors handles everything from initial trade license approvals to complete visa processing, ensuring your mainland or freezone establishment is set up for enduring market success.
              </p>
              <Link 
                to="/about" 
                title="Learn more about Fast Zone Prime's business registration advisory"
                aria-label="Learn more about Fast Zone Prime's business registration advisory"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-primary hover:text-white transition-colors"
              >
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 space-y-16 mt-12 lg:mt-0">
              {[
                { 
                  title: "Decades of UAE Jurisdictional Expertise", 
                  desc: "Our senior consultants navigate mainland, free zone, and offshore jurisdictions, ensuring complete corporate compliance with local regulations and commercial company laws.", 
                  img: "/advantage/jurisdiction-expertise.png",
                  altText: "Corporate business towers in Dubai UAE - mainland business setup location"
                },
                { 
                  title: "Fast-Track Trade Licenses & Visas", 
                  desc: "We accelerate your market entry by expediting government approvals, trade registrations, legal translation, corporate banking setup, and investor visa documentation.", 
                  img: "/advantage/trade-license-visas.png",
                  altText: "Business setup documents and trade license approvals in Dubai"
                },
                { 
                  title: "Bespoke Corporate Structuring Solutions", 
                  desc: "We engineer customized legal and capital structures (LLCs, sole establishments, branch offices) designed to optimize tax efficiency and operational assets.", 
                  img: "/advantage/corporate-structuring.png",
                  altText: "Corporate board meeting discussing business setup models in the UAE"
                }
              ].map((item, index) => (
                <article 
                  key={index}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                  >
                    <div className="w-full h-[300px] overflow-hidden mb-8">
                      <img 
                        src={item.img} 
                        alt={item.altText} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-3xl font-heading mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md">{item.desc}</p>
                  </motion.div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Elegant Services Accordion/List */}
      <section className="pt-16 pb-16 relative bg-dark-lighter border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Our Capabilities</h2>
              <h3 className="text-5xl md:text-7xl font-heading leading-tight">
                Premium <span className="italic text-gray-500">Services</span>
              </h3>
            </div>
            <Link to="/services" className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center group hover:bg-primary transition-all duration-500 shrink-0">
              <span className="text-xs uppercase tracking-widest group-hover:text-dark">View All</span>
            </Link>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {services.map((service, index) => (
              <Link 
                key={index}
                to="/services"
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:border-primary/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                <h4 className="text-3xl md:text-5xl font-heading text-gray-300 group-hover:text-white transition-colors relative z-10 mb-4 md:mb-0">
                  {service.title}
                </h4>
                <div className="flex items-center gap-8 relative z-10">
                  <p className="text-gray-500 font-light max-w-sm hidden md:block group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minimalist Stats */}
      <section className="pt-10 pb-12 relative bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-7xl font-heading text-white mb-4">
                  {stat.value.replace('+', '')}
                  <span className="text-primary italic">+</span>
                </div>
                <div className="w-12 h-[1px] bg-primary/30 mx-auto md:mx-0 mb-4" />
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Grand CTA */}
      <section className="py-20 relative flex items-center justify-center bg-dark text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070')] bg-cover bg-center opacity-[0.03] mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-12 leading-tight"
          >
            Start Your Journey <br/>
            <span className="italic text-gray-500 text-4xl md:text-6xl lg:text-7xl">with Fast Zone Prime</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-12 py-5 border border-primary text-primary hover:bg-primary hover:text-dark transition-all duration-500 uppercase tracking-widest text-sm font-medium">
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
