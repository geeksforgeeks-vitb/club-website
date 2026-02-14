import React, { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors">
                <Terminal size={18} />
              </div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">GFG VITB</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive(link.path) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white">
                <Terminal size={14} />
              </div>
              GFG VITB
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Empowering students to create, innovate, and lead in the tech world.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/geeksforgeeks-vitb" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/company/geeksforgeeks-vitb" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="http://instagram.com/geeksforgeeks_vitb" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@geeksforgeeks_vitb" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://vitbhopal.ac.in/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">VIT Bhopal University</a></li>
              <li><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GeeksforGeeks Main</a></li>
              <li><a href="https://practice.geeksforgeeks.org/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Practice Portal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-500 text-sm mb-2">VIT Bhopal University</p>
            <a href="mailto:geeksforgeeks.vitb@vitbhopal.ac.in" className="text-primary hover:text-primary-dark text-sm transition-colors">geeksforgeeks.vitb@vitbhopal.ac.in</a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © 2026 GFG VIT Bhopal Student Chapter. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-gray-100 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};