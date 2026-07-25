import { motion } from 'framer-motion';

export default function ServiceOverview({ data }) {
  const { overviewTitle, overviewDescription, infoBlocks } = data;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      {/* Background styling */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left: Heading */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-primary/50"></div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Overview</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-heading text-white leading-tight">
              {overviewTitle.split(' ').map((word, i) => {
                // Highlight words randomly or based on specific logic (here just applying a color to the last 2 words)
                const isHighlight = i >= overviewTitle.split(' ').length - 2;
                return (
                  <span key={i} className={`inline-block mr-2 ${isHighlight ? 'text-primary italic font-light' : ''}`}>
                    {word}
                  </span>
                );
              })}
            </h3>
          </motion.div>

          {/* Right: Description */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              {overviewDescription}
            </p>
          </motion.div>
        </div>

        {/* 4 Premium Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx, duration: 0.8 }}
                className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white font-heading text-xl mb-3">{block.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
