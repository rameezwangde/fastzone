import { motion } from 'framer-motion';

export default function ServiceBenefitsBento({ data }) {
  const { benefitsTitle, benefits } = data;

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Key Benefits</h2>
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-white max-w-2xl"
          >
            {benefitsTitle}
          </motion.h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="bg-zinc-900/60 border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col hover:bg-zinc-800/80 hover:border-primary/30 transition-all duration-500 group shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <div>
                  <h4 className="font-heading text-white text-lg mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
