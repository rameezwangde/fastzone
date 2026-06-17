import { Link } from 'react-router-dom';

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" className="inline-block mb-8">
              <img
                src="/logo.png"
                alt="Fast Zone Prime Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
              Transforming your corporate vision into reality. We deliver premium business consultancy and setup services tailored to your exact operational requirements in the UAE.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-500">
                <LinkedinIcon size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-500">
                <InstagramIcon size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-500">
                <FacebookIcon size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 text-sm font-light uppercase tracking-widest text-gray-400">
            <div>
              <h4 className="text-white mb-6 text-xs tracking-[0.3em] font-medium opacity-50">Sitemap</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">The Story</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white mb-6 text-xs tracking-[0.3em] font-medium opacity-50">Expertise</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="hover:text-primary transition-colors">Business Setup</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Trade Licenses</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">PRO Services</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Advisory</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
          <p>
            © {new Date().getFullYear()} Fast Zone Prime.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
