import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a 
    href={href} 
    className="px-4 py-2 text-sm font-medium text-dentex-secondary hover:text-dentex-primary transition-colors rounded-full hover:bg-dentex-primary/5"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children?: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-lg font-medium text-dentex-dark p-2 hover:bg-slate-50 rounded-lg"
  >
    {children}
  </a>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled || isMobileMenuOpen 
          ? 'glass-panel border-white/50 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dentex-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-dentex-dark leading-none">DENTEX</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-dentex-primary uppercase leading-none mt-1">Pro Suite</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#features">Platform</NavLink>
            <NavLink href="#talent">Talent</NavLink>
            <NavLink href="#vendor">Market</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button size="sm" className="rounded-full">Get Early Access</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-dentex-secondary hover:text-dentex-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-2xl border-b border-white/50 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
           <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#features">Platform</MobileNavLink>
           <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#talent">Talent</MobileNavLink>
           <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#vendor">Market</MobileNavLink>
           <div className="h-px bg-slate-100 my-2"></div>
           <Button variant="secondary" className="w-full justify-center">Log In</Button>
           <Button className="w-full justify-center">Get Early Access</Button>
        </div>
      )}
    </nav>
  );
};