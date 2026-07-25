import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceTimeline({ data }) {
  const { timelineTitle, timelineSteps } = data;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col mb-20 lg:ml-20">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Process</h2>
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-white max-w-2xl"
          >
            {timelineTitle}
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto lg:ml-20">
          {/* Background Track Line */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated Gold Line */}
          <motion.div 
            className="absolute left-[27px] md:left-[39px] top-0 w-[2px] bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16">
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-start gap-8 md:gap-12 group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-zinc-900 border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shrink-0">
                      <span className="font-heading text-xl md:text-2xl text-primary group-hover:text-black transition-colors">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start pt-2 md:pt-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading text-white mb-3">{step.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
