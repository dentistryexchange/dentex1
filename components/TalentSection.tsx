import React from 'react';
import { Button } from './ui/Button';
import { Video, CheckCircle2, UserCheck } from 'lucide-react';
import { Card } from './ui/Card';

export const TalentSection: React.FC = () => {
  return (
    <section id="talent" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          <div className="w-full md:w-1/2 relative">
             <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem] z-20"></div>
                <img 
                  src="https://picsum.photos/id/1011/800/1000" 
                  alt="Dental Professional" 
                  className="rounded-[2rem] shadow-2xl object-cover h-[600px] w-full"
                />
                
                {/* Floating Glass Element */}
                <div className="absolute bottom-10 left-10 right-10 z-30">
                  <div className="glass-panel p-6 rounded-2xl border border-white/40 shadow-xl backdrop-blur-xl">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-400/30">
                         <CheckCircle2 size={24} />
                       </div>
                       <div>
                         <p className="font-bold text-slate-800 text-lg">Credential Verified</p>
                         <p className="text-sm text-slate-600">License #D-49201 Valid</p>
                       </div>
                     </div>
                     <div className="flex items-center justify-between text-xs font-medium text-slate-500 bg-white/50 rounded-lg p-3">
                        <span>Background Check</span>
                        <span className="text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Passed
                        </span>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -left-10 w-full h-full border-2 border-dentex-primary/10 rounded-[2.5rem] -z-10"></div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-light text-dentex-dark mb-8">
              Staffing at the <br />
              <span className="font-semibold text-dentex-primary">Speed of Care.</span>
            </h2>
            
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <UserCheck size={20} />
                   </div>
                   <h3 className="text-2xl font-medium text-slate-800">For Clinics</h3>
                </div>
                <p className="text-lg text-dentex-secondary font-light pl-14 mb-6">
                  Fill shifts in minutes, not days. Filter talent by their "Digital Passport" status and launch video interviews instantly within the platform.
                </p>
                <div className="pl-14">
                   <Button variant="outline" size="sm" icon={<Video size={16}/>} className="rounded-full">Start Hiring</Button>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

              <div className="group">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={20} />
                   </div>
                   <h3 className="text-2xl font-medium text-slate-800">For Pros</h3>
                </div>
                <p className="text-lg text-dentex-secondary font-light pl-14 mb-6">
                  Verify Once, Work Anywhere. Zero commission fees—keep 100% of what you earn and build your portable reputation.
                </p>
                <div className="pl-14 flex items-center gap-6">
                   <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-4 border-white shadow-sm" src="https://picsum.photos/id/1027/100/100" alt="User" />
                      <img className="w-10 h-10 rounded-full border-4 border-white shadow-sm" src="https://picsum.photos/id/338/100/100" alt="User" />
                      <img className="w-10 h-10 rounded-full border-4 border-white shadow-sm" src="https://picsum.photos/id/65/100/100" alt="User" />
                      <div className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shadow-sm">
                        +5k
                      </div>
                   </div>
                   <span className="text-sm font-medium text-dentex-dark">Verified Pros</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};