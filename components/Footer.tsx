import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const FooterLink = ({ children }: { children?: React.ReactNode }) => (
  <a href="#" className="hover:text-dentex-primary transition-colors hover:underline decoration-dentex-primary/30 underline-offset-4">
    {children}
  </a>
);

const SocialIcon = ({ children }: { children?: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-dentex-primary hover:text-white transition-all shadow-sm hover:shadow-md">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dentex-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-dentex-dark">DENTEX<span className="text-dentex-primary">PRO</span></span>
            </div>
            <p className="text-sm text-dentex-secondary mb-8 leading-relaxed font-light">
              The operating system for modern dentistry. Connecting care, commerce, and talent in one unified interface.
            </p>
            <div className="flex gap-4">
              <SocialIcon><Twitter size={18} /></SocialIcon>
              <SocialIcon><Linkedin size={18} /></SocialIcon>
              <SocialIcon><Instagram size={18} /></SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="text-dentex-dark font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4 text-sm text-dentex-secondary font-light">
              <li><FooterLink>Clinic OS</FooterLink></li>
              <li><FooterLink>Patient App</FooterLink></li>
              <li><FooterLink>Talent Engine</FooterLink></li>
              <li><FooterLink>Vendor Market</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-dentex-dark font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-dentex-secondary font-light">
              <li><FooterLink>About Us</FooterLink></li>
              <li><FooterLink>Careers</FooterLink></li>
              <li><FooterLink>Press</FooterLink></li>
              <li><FooterLink>Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-dentex-dark font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-dentex-secondary font-light">
              <li><FooterLink>Privacy Policy</FooterLink></li>
              <li><FooterLink>Terms of Service</FooterLink></li>
              <li><FooterLink>Cookie Settings</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 font-light">© 2024 Dentex Pro Inc. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-dentex-secondary hover:text-dentex-primary transition-colors group font-medium"
          >
            Back to top 
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};