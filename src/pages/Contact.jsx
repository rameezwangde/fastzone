import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
  };

  return (
    <div className="w-full bg-dark text-accent min-h-screen">
      {/* Editorial Hero */}
      <section className="relative pt-48 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-primary mb-8"
            >
              Inquiries
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              className="text-6xl md:text-8xl font-heading leading-[0.9] tracking-tighter mb-12"
            >
              Initiate <span className="italic text-gray-500">Dialogue</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
              className="text-xl text-gray-400 max-w-2xl font-light"
            >
              Book Your Free Business Consultation Today and start your UAE corporate journey with Fast Zone Prime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content - Minimalist Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24">
            
            {/* Contact Info */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-5 space-y-20"
            >
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">Headquarters</h3>
                <p className="text-3xl font-heading text-white leading-relaxed">
                  Business Center,<br/>
                  Dubai, United Arab Emirates
                </p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">Direct Lines</h3>
                <div className="space-y-4">
                  <a href="tel:+971000000000" className="block text-2xl font-sans font-light text-white hover:text-primary transition-colors">+971 00 000 0000</a>
                  <a href="mailto:info@fastzoneprime.com" className="block text-2xl font-sans font-light text-white hover:text-primary transition-colors">info@fastzoneprime.com</a>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">Fast Response</h3>
                <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-white hover:text-[#25D366] transition-colors pb-2 border-b border-white/20 hover:border-[#25D366]">
                  <span className="text-lg font-light tracking-wide">Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Minimalist Form */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstName" className="absolute left-0 top-4 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">First Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName" className="absolute left-0 top-4 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Last Name</label>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Email Address</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone" className="absolute left-0 top-4 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <select 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option className="bg-dark text-white">Business Setup in UAE</option>
                    <option className="bg-dark text-white">Company Formation</option>
                    <option className="bg-dark text-white">Trade License Assistance</option>
                    <option className="bg-dark text-white">PRO Services</option>
                    <option className="bg-dark text-white">Other Advisory Services</option>
                  </select>
                  <label className="absolute left-0 -top-4 text-gray-500 text-xs tracking-widest uppercase">Service of Interest</label>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    rows="1" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none overflow-hidden"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Message</label>
                </div>

                <div className="pt-8">
                  <button 
                    type="button" 
                    className="group relative inline-flex items-center gap-6 pb-2 border-b border-primary/50 hover:border-primary transition-colors text-sm uppercase tracking-[0.2em] font-medium text-white hover:text-primary"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
