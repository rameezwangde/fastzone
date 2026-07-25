import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ServiceFAQ({ data }) {
  const { faqs } = data;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-8 bg-primary/50"></div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx % 2) }}
                className="bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-white font-heading text-lg pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border ${isOpen ? 'border-primary bg-primary/10' : 'border-white/20 bg-transparent'} flex items-center justify-center shrink-0 transition-all duration-300`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary rotate-180' : 'text-gray-400 rotate-0'} transition-transform duration-300`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
