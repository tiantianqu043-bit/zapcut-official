import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 px-6 relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-2/3 h-full bg-blue-900/10 blur-[150px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto relative z-10">
        <h2 class="text-5xl font-black text-center mb-20 glass-text">Product Roadmap</h2>
        
        <div class="relative border-l-2 border-white/10 ml-6 md:ml-0 space-y-12">
          
          <!-- Item 1 -->
          <div class="relative pl-12 md:pl-0 md:flex items-center justify-between group">
            <div class="absolute left-[-9px] top-6 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_15px_cyan] z-10 border-2 border-white"></div>
            
            <div class="md:w-[45%] md:text-right mb-4 md:mb-0 md:pr-16">
              <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors drop-shadow-md">Extension Alpha</h3>
              <span class="inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-green-500/20 text-green-300 border border-green-500/30 rounded-full mt-2 backdrop-blur-sm">Completed</span>
            </div>
            
            <div class="md:w-[45%] md:pl-16">
               <div class="liquid-glass p-6 rounded-2xl group-hover:bg-white/5 transition-colors">
                  <p class="text-slate-300 leading-relaxed font-light">Core recording functionality, cloud rendering pipeline, and basic trim features.</p>
               </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="relative pl-12 md:pl-0 md:flex items-center justify-between group">
            <div class="absolute left-[-9px] top-6 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_blue] z-10 border-2 border-white"></div>
            
            <div class="md:w-[45%] md:text-right mb-4 md:mb-0 md:pr-16">
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors drop-shadow-md">Smart Text Editing</h3>
              <span class="inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full mt-2 backdrop-blur-sm">In Progress</span>
            </div>
            
            <div class="md:w-[45%] md:pl-16">
               <div class="liquid-glass p-6 rounded-2xl group-hover:bg-white/5 transition-colors">
                 <p class="text-slate-300 leading-relaxed font-light">AI transcription integration allowing you to edit video by deleting words.</p>
               </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="relative pl-12 md:pl-0 md:flex items-center justify-between group opacity-50">
            <div class="absolute left-[-9px] top-6 w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-600 z-10"></div>
            
            <div class="md:w-[45%] md:text-right mb-4 md:mb-0 md:pr-16">
              <h3 class="text-2xl font-bold text-slate-300">Team Collaboration</h3>
              <span class="inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-500 border border-slate-700 rounded-full mt-2">Planned Q4</span>
            </div>
            
            <div class="md:w-[45%] md:pl-16">
               <div class="liquid-glass p-6 rounded-2xl">
                 <p class="text-slate-400 leading-relaxed font-light">Shared workspaces, comment on timestamps, and instant link sharing for teams.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class RoadmapComponent {}