import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000" 
          alt="Dubai Skyline CTA"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-primary/50"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Next Steps</h2>
          <div className="h-[1px] w-12 bg-primary/50"></div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-tight max-w-4xl"
        >
          Ready to Start Your Business in the UAE?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl"
        >
          Let our experts handle the entire process from consultation to completion, while you focus on growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link to="/contact" className="bg-primary text-black px-10 py-5 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2 group text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Start Your Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/contact" className="bg-transparent text-white px-8 py-5 rounded-full font-medium hover:text-primary transition-colors duration-300 flex items-center gap-3 text-lg">
            <Phone className="w-5 h-5 text-primary" />
            +971 55 123 4567
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
