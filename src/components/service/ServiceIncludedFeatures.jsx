import { motion } from 'framer-motion';
import { ArrowRight, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceIncludedFeatures({ data }) {
  const { includedTitle, includedFeatures } = data;

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Included In This Service</h2>
          <div className="h-[1px] w-full max-w-[200px] bg-primary/20"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {includedFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-primary/50 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h5 className="text-white text-sm font-light font-heading leading-tight">{feature.title}</h5>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Card (As seen in screenshot) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl ml-auto bg-zinc-900 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <Headset className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-xl font-heading text-white mb-2">Need a Custom Solution?</h4>
            <p className="text-gray-400 text-sm font-light mb-4">Our experts are here to help you choose the perfect business setup for your needs.</p>
            <Link to="/contact" className="text-primary hover:text-white flex items-center justify-center sm:justify-start gap-2 text-sm uppercase tracking-widest font-bold transition-colors group">
              Talk to an Advisor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
