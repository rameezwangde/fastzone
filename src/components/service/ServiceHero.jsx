import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, UserCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceHero({ data }) {
  const { title, description, heroImage, dynamicInfo } = data;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-black pt-40 lg:pt-48 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">Fast Zone Business Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white leading-[1.1] mb-6">
              {title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                  className={`inline-block mr-3 ${i === title.split(' ').length - 1 ? 'text-primary' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link to="/contact" className="bg-primary text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2 group">
                Start Your Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-colors duration-300 flex items-center gap-2">
                Speak to an Advisor
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 w-full max-w-xl"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-300 uppercase tracking-wider font-light">Government<br/>Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-300 uppercase tracking-wider font-light">Dedicated<br/>Advisor</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-300 uppercase tracking-wider font-light">Transparent<br/>Process</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image & Glass Card */}
          <div className="relative w-full h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden">
            {/* Zooming Image */}
            <motion.img 
              src={heroImage} 
              alt={title}
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

            {/* Floating Glass Info Card */}
            {dynamicInfo && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 right-10 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center min-w-[180px]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <dynamicInfo.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{dynamicInfo.label}</span>
                <span className="text-4xl font-heading text-white">{dynamicInfo.value}</span>
                <span className="text-xs text-gray-400 mt-1">{dynamicInfo.subtext}</span>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
