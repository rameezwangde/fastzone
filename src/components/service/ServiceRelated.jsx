import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceRelated({ data }) {
  const { relatedServices } = data;

  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Discover More</h2>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading text-white">Related Services</h3>
          </div>
          <Link to="/services" className="text-primary hover:text-white flex items-center gap-2 text-sm uppercase tracking-widest font-bold transition-colors group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, idx) => (
            <Link key={idx} to={`/services/${service.slug}`} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="bg-black border border-white/10 rounded-[32px] overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-lg flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-heading text-white mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300 mt-auto">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
