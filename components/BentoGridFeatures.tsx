import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Calendar, ShieldCheck, AlertCircle, RefreshCw, Clock, ArrowUpRight, Users, Check, Star } from 'lucide-react';
import { Button } from './ui/Button';

export const BentoGridFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-dentex-dark">Core Operating <span className="font-semibold">Modules</span></h2>
          <p className="text-xl text-dentex-secondary font-light">
            Designed to remove friction. Every tool you need to run a modern practice, integrated into one fluid, crystalline experience.
          </p>
        </div>

        {/* The Grid - Adjusted row height for better proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Tile 1: Patient App (Large Left) - Balanced Layout */}
          <Card className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden !p-8 md:!p-10 flex flex-col justify-between !bg-white border-slate-200">
            {/* Left Content Side - Reduced width to 45% to create breathing room */}
            <div className="relative z-10 w-full lg:w-[45%] h-full flex flex-col">
              <div>
                <Badge variant="accent" icon={<Calendar size={12} />}>Patient Module</Badge>
                <h3 className="text-3xl md:text-4xl font-medium mt-5 mb-4 text-dentex-dark tracking-tight leading-[1.1]">
                  Instant Booking. <br/> Zero Phone Tag.
                </h3>
                <p className="text-dentex-secondary text-base md:text-lg mb-8 leading-relaxed font-light">
                  Give patients a direct line to your clinic 24/7. Secure slots in seconds and manage family dental health from one intuitive profile.
                </p>
              </div>

              {/* New Feature Matrix to fill empty space */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                       <Clock size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Real-time Sync</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                       <Users size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Family Profiles</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                       <Check size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Insurance Verify</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                       <Star size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Auto-Recall</span>
                 </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 text-xs font-semibold text-dentex-primary bg-blue-50/50 w-fit px-4 py-2 rounded-full border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dentex-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-dentex-primary"></span>
                </span>
                Live Availability Engine
              </div>
            </div>

            {/* Right Image Side - Adjusted width and position to prevent overlap */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[5%] w-[55%] h-[90%] hidden lg:block rounded-l-3xl border-l-4 border-y-4 border-white bg-slate-100 shadow-2xl overflow-hidden group-hover:-translate-x-2 transition-transform duration-700 ease-out">
               <img 
                 src="https://picsum.photos/id/60/800/1000" 
                 alt="Booking App Interface" 
                 className="w-full h-full object-cover object-top opacity-95"
               />
               
               {/* Floating UI Widget */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/60">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Next Opening</span>
                     <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">AVAILABLE</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <div>
                        <div className="text-sm font-bold text-slate-800">Tomorrow, 10:00 AM</div>
                        <div className="text-[10px] text-slate-400">Dr. Sarah Jenks</div>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-dentex-primary flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        <ArrowUpRight size={16} />
                     </div>
                  </div>
               </div>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden mt-8 w-full h-56 rounded-2xl overflow-hidden relative shadow-md border border-slate-100">
                <img src="https://picsum.photos/id/60/800/600" className="w-full h-full object-cover object-top" />
            </div>
          </Card>

          {/* Tile 2: Talent (1x1) - Refined Layout */}
          <Card className="lg:col-span-1 lg:row-span-1 relative overflow-hidden group !bg-gradient-to-b from-white to-emerald-50/30 !p-6 flex flex-col">
            <div className="flex items-start justify-between mb-2">
               <Badge variant="success" icon={<ShieldCheck size={12} />}>Talent</Badge>
               <ArrowUpRight size={20} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <h3 className="text-2xl font-medium mb-1 text-dentex-dark">Digital Passport</h3>
            <p className="text-sm text-dentex-secondary mb-4 font-light">Verified professionals.</p>
            
            <div className="mt-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-3 group-hover:shadow-md transition-all">
                <div className="relative">
                   <img src="https://picsum.photos/id/64/100/100" className="w-10 h-10 rounded-full border border-white shadow-sm" alt="Avatar" />
                   <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 w-3 h-3 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Dr. Sarah Jenks</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">Ortho • 5yr+</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tile 3: Procurement (1x1) - Refined Layout */}
          <Card className="lg:col-span-1 lg:row-span-1 relative overflow-hidden group !bg-gradient-to-b from-white to-red-50/20 !p-6 flex flex-col">
             <div className="flex items-start justify-between mb-2">
               <Badge variant="warning" icon={<AlertCircle size={12} />}>Clinic OS</Badge>
               <RefreshCw size={20} className="text-slate-300 group-hover:text-red-500 group-hover:rotate-180 transition-all duration-700" />
            </div>
            <h3 className="text-2xl font-medium mb-1 text-dentex-dark">Smart Supply</h3>
            <p className="text-sm text-dentex-secondary mb-4 font-light">Auto-reorder consumables.</p>

            <div className="mt-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-xl p-3 shadow-sm group-hover:border-red-200 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                       <AlertCircle size={16} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-800">Lidocaine 2%</p>
                       <p className="text-[10px] text-red-500 font-bold">12 Units Left</p>
                     </div>
                  </div>
                  <Button size="sm" variant="secondary" className="!h-8 !px-3 text-xs">Reorder</Button>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};