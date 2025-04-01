
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 px-4 md:px-8 bg-darkGreen text-white mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">ROAS Calculator</h3>
            <p className="text-sm text-white/80">
              A professional tool to analyze your advertising campaign's return on investment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-white/80 mb-2">
              Have questions about our ROAS calculator?
            </p>
            <a 
              href="mailto:contact@roascalculator.com" 
              className="text-sm text-white hover:text-gold transition-colors"
            >
              contact@roascalculator.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-2 md:mb-0">
            © {currentYear} ROAS Calculator. All rights reserved.
          </p>
          <p className="text-sm text-white/70 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for marketers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
