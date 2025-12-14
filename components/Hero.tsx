import React from 'react';
import { ArrowRight, Play, Activity, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="aurora-blob w-[800px] h-[800px] bg-blue-100/60 rounded-full top-[-200px] left-[-200px] mix-blend-multiply"></div>
        <div className="aurora-blob w-[600px] h-[600px] bg-emerald-100/40 rounded-full top-[100px] right-[-100px] mix-blend-multiply animation-delay-2000"></div>
        <div className="aurora-blob w-[500px] h-[500px] bg-indigo-100/50 rounded-full bottom-[-100px] left-[20%] mix-blend-multiply animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-md shadow-sm mb-10 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dentex-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-dentex-primary"></span>
          </span>
          <span className="text-[11px] font-bold tracking-widest uppercase text-dentex-secondary">V4.0 Ecosystem Live</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-dentex-dark mb-8 leading-[1.1]">
          The Operating System for <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-dentex-primary via-blue-500 to-dentex-emerald">Modern Dentistry.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-dentex-secondary mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Where precision care meets seamless commerce. Connect clinics, patients, and talent in one <span className="text-dentex-dark font-medium">unified crystal interface</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <Button size="lg" className="rounded-full shadow-xl shadow-blue-500/20 h-14 px-10 text-lg group">
            Get Early Access 
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg" className="rounded-full h-14 px-10 text-lg group">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm group-hover:scale-110 transition-transform">
               <Play size={14} className="fill-dentex-dark text-dentex-dark ml-1" />
            </div>
            Watch Demo
          </Button>
        </div>

        {/* 3D Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl perspective-1000">
           <div className="relative bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 p-2 shadow-2xl ring-1 ring-black/5 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out">
              <div className="rounded-[1.5rem] overflow-hidden bg-white shadow-inner">
                <img 
                  src="https://picsum.photos/id/4/1600/900" 
                  alt="Dashboard Interface" 
                  className="w-full h-auto object-cover opacity-95 block"
                />
              </div>

              {/* Floating Glass Widget 1 */}
              <div className="absolute -left-12 bottom-20 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-xl animate-float hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <TrendingUp size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Revenue</p>
                      <p className="text-2xl font-bold text-slate-800">$142.5k</p>
                    </div>
                 </div>
              </div>

              {/* Floating Glass Widget 2 */}
              <div className="absolute -right-8 top-12 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-xl animate-float hidden md:block" style={{ animationDelay: '2s' }}>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                      <Activity size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Patients</p>
                      <p className="text-2xl font-bold text-slate-800">+24 Active</p>
                    </div>
                 </div>
              </div>

           </div>
           
           {/* Reflection */}
           <div className="absolute -bottom-20 left-10 right-10 h-20 bg-gradient-to-t from-white via-white/50 to-transparent blur-xl z-20"></div>
        </div>
      </div>
    </section>
  );
};