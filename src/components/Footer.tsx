import { Heart, Mail, Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-lg text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">FutureVision</span>
            </div>
            <p className="text-sm text-white/80">
              Pushing the boundaries of web innovation with AI Engineer(SuperFlex) and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/80 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#about" className="text-white/80 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:hello@futurevision.dev" className="flex items-center space-x-2 text-white/80 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                <span>saimanideep.ch12345@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/manideep1428" target="_blank" rel="noopener noreferrer" 
                 className="text-white/80 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/manideep1428" target="_blank" rel="noopener noreferrer"
                 className="text-white/80 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/in/manideep1428" target="_blank" rel="noopener noreferrer"
                 className="text-white/80 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-400" /> by Manideep
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;