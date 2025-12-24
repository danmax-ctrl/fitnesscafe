import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-tight">
              Fitness <span className="text-primary">Cafe</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Kannur's premium fitness destination. Transform your body, elevate your mind, 
              and join a community that inspires greatness.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Classes
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/gallery" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-background/70 hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Fitness Cafe. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Payyambalam, Kannur, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
