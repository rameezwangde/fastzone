import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ServiceDocumentChecklist({ data }) {
  const { checklistTitle, checklist } = data;

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Illustration / Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative rounded-[40px] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-white/10"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000"
              alt="Document Checklist"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl md:text-4xl font-heading text-white mb-4 leading-tight">
                Streamlined <br/>
                <span className="text-primary italic font-light">Documentation</span>
              </h3>
              <p className="text-gray-300 font-light text-sm max-w-sm">
                We handle the paperwork so you can focus on building your business empire.
              </p>
            </div>
          </motion.div>

          {/* Right: Checklist */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-primary/50"></div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">{checklistTitle}</h2>
            </div>

            <div className="flex flex-col gap-6">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md hover:bg-white/5 transition-colors duration-300 flex items-start gap-5 group"
                >
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
