import { Compass } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    onScrollTo(id);
  };

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Decorative background circle */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline Column */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center space-x-3 cursor-pointer group mb-6" onClick={() => handleNavClick('home')}>
              <img
                src={logoImg}
                alt="Proficient Saba Escapes Logo"
                className="h-12 w-12 rounded-full border border-white/10 group-hover:border-accent transition-colors duration-300 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-wide text-white">
                  Proficient Saba Escapes
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] -mt-1 font-semibold text-accent">
                  Adventure Awaits
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/50 font-body font-light leading-relaxed max-w-sm mb-6">
              Victoria Falls-based bespoke travel operator, creating premium personalized itineraries for discerning travelers. Discover the magic of Africa with us.
            </p>
            <div className="flex items-center gap-2 text-accent text-xs font-button font-bold uppercase tracking-[0.25em]">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Adventure Awaits
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-button font-bold text-white/40 uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', target: 'home' },
                { name: 'Experiences', target: 'experiences' },
                { name: 'Gallery', target: 'gallery' },
                { name: 'About Us', target: 'about' },
                { name: 'Get a Quote', target: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.target)}
                    className="text-xs sm:text-sm font-button font-light text-white/60 hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-button font-bold text-white/40 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-xs sm:text-sm font-body font-light text-white/60">
              <li>
                <span className="block text-[10px] font-button font-bold text-white/30 uppercase tracking-widest mb-0.5">Direct Inquiry</span>
                <a href="mailto:proficientsabaescapes@gmail.com" className="text-white hover:text-accent font-medium transition-colors">
                  proficientsabaescapes@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-button font-bold text-white/30 uppercase tracking-widest mb-0.5 font-semibold">WhatsApp Support</span>
                <span className="text-white font-medium">+263 772 957 563</span>
              </li>
              <li>
                <span className="block text-[10px] font-button font-bold text-white/30 uppercase tracking-widest mb-0.5">Office</span>
                <span>Victoria Falls, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-button font-light text-white/30 tracking-wider">
          <p>© {currentYear} Proficient Saba Escapes. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
