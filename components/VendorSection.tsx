import React from 'react';
import { Package, Truck, BarChart3, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const VendorSection: React.FC = () => {
  return (
    <section id="vendor" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white via-transparent to-slate-100"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-light text-dentex-dark mb-6">
              Direct Access to the <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-dentex-primary to-blue-600">Point of Care.</span>
            </h2>
            <p className="text-dentex-secondary text-xl mb-12 leading-relaxed font-light">
              Stop chasing leads. Place your products directly in front of high-intent buyers. Track orders from "Processing" to "Delivered" in one crystalline Command Center.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-5 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <Package size={22} className="text-dentex-primary" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-2 text-dentex-dark">Smart Inventory</h4>
                   <p className="text-sm text-dentex-secondary font-light">Products auto-suggested when clinics run low on stock.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <Truck size={22} className="text-dentex-primary" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-2 text-dentex-dark">Real-time Logistics</h4>
                   <p className="text-sm text-dentex-secondary font-light">Live tracking integration for every single shipment.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-full px-8">
              Partner with Dentex <ChevronRight size={16} className="ml-2"/>
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
             {/* Main Dashboard Card */}
             <Card className="!bg-white/60 !backdrop-blur-xl relative z-20 shadow-2xl border border-white/80 ring-1 ring-white/50 p-0 overflow-hidden">
                <div className="bg-white/50 border-b border-white/50 p-4 flex items-center justify-between backdrop-blur-md">
                   <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                   </div>
                   <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">vendor.dentex.pro</div>
                </div>

                <div className="p-8 space-y-6">
                   <div className="flex gap-6">
                      <div className="flex-1 p-5 rounded-2xl bg-white shadow-sm border border-slate-100">
                         <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Orders</div>
                         <div className="text-3xl font-light text-slate-800">1,248</div>
                         <div className="text-emerald-500 text-xs flex items-center mt-2 font-medium bg-emerald-50 w-fit px-2 py-1 rounded-md">
                            <BarChart3 size={12} className="mr-1"/> +12%
                         </div>
                      </div>
                      <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-dentex-primary to-blue-600 text-white shadow-lg shadow-blue-500/20">
                         <div className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">Revenue</div>
                         <div className="text-3xl font-medium">$84.2k</div>
                         <div className="text-blue-100 text-xs mt-2 opacity-80">
                            On track for Q4
                         </div>
                      </div>
                   </div>

                   <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-4 tracking-wider">Live Feed</div>
                      <div className="space-y-4">
                         {[1, 2, 3].map((i) => (
                           <div key={i} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-xs font-bold text-slate-600">
                                   C{i}
                                 </div>
                                 <div>
                                    <div className="font-semibold text-slate-700">Clinic #{1020 + i}</div>
                                    <div className="text-xs text-slate-400">Ordered: Dental Chairs x2</div>
                                 </div>
                              </div>
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-600">SHIPPED</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </Card>

             {/* Background Glows */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-200/40 to-emerald-200/40 blur-[80px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};