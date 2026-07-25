import { motion } from 'framer-motion';
import { Award, Users2, BadgeDollarSign, Landmark } from 'lucide-react';

export default function ServiceWhyChooseUs() {
  const pillars = [
    { title: 'Industry Experience', value: '15+', suffix: 'Years', icon: Award, desc: 'Proven track record in UAE business setup.' },
    { title: 'Dedicated Advisors', value: '50+', suffix: 'Experts', icon: Users2, desc: 'Personalized guidance from start to finish.' },
    { title: 'Transparent Pricing', value: '100%', suffix: 'Clear', icon: BadgeDollarSign, desc: 'No hidden fees or surprise charges.' },
    { title: 'Government Network', value: '40+', suffix: 'Partners', icon: Landmark, desc: 'Strong relationships with key authorities.' }
  ];

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">Why Fast Zone</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-white"
          >
            Your Partner in Success
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="bg-zinc-950 border border-white/5 rounded-3xl p-8 text-center hover:border-primary/30 hover:bg-zinc-900 transition-all duration-300 group shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading text-4xl text-white mb-1 flex items-baseline justify-center gap-1">
                {pillar.value}
                <span className="text-lg text-primary italic font-light">{pillar.suffix}</span>
              </div>
              <h4 className="text-white text-lg font-medium mb-3">{pillar.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
