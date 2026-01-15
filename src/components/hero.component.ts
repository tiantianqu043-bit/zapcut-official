import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Added 'merging' state for the initial overlap
type AnimState = 'idle' | 'merging' | 'revving' | 'launching' | 'cooldown';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative pt-40 pb-32 px-6 flex flex-col justify-center items-center min-h-[95vh] overflow-hidden">
      
      <!-- Lovart-style Interactive Background -->
      <!-- Creators in liquid bubbles -->
      <div class="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
        @for (creator of creators(); track creator.id) {
          <div 
            class="absolute transition-all duration-700 ease-out group"
            [style.top]="creator.top"
            [style.left]="creator.left"
            [style.transform]="'scale(' + creator.scale + ')'"
          >
             <!-- 
                Persona Bubble Container
                Specific shadow color per persona + base glass styles 
             -->
             <div 
                class="relative w-36 h-36 rounded-full icon-glass flex items-center justify-center p-1.5 transition-all duration-500 cursor-default hover:scale-110"
                [ngClass]="[creator.hoverShadow, 'opacity-50', 'group-hover:opacity-100']"
             >
                <!-- Avatar Image -->
                <div class="w-full h-full rounded-full overflow-hidden relative border border-white/10">
                  <img [src]="creator.img" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" [alt]="creator.label">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <!-- Shine reflection -->
                <div class="absolute top-3 left-5 w-10 h-5 bg-white/20 rounded-[100%] rotate-[-45deg] blur-[2px] pointer-events-none"></div>
                
                <!-- Role Icon Badge (Floating on edge) -->
                <div class="absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path [attr.d]="creator.iconPath" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <!-- Floating Label (Visible on Hover) -->
                <div class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                  <span class="text-xs font-bold uppercase tracking-widest text-white bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full" [style.background-color]="creator.dotColor"></span>
                    {{ creator.label }}
                  </span>
                </div>
             </div>
          </div>
        }
      </div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        
        <!-- Headline -->
        <h1 class="text-7xl md:text-[9rem] font-black tracking-tighter mb-4 leading-[0.9] select-none animate-fade-in-up">
          <span class="glass-text block">Record.</span>
          <span class="glass-text block">Publish.</span>
          
          <!-- NO WAITING INTERACTIVE CONTAINER -->
          <div 
            class="relative flex justify-center items-center mt-4 h-[1.3em] cursor-pointer group overflow-visible select-none"
            (mouseenter)="triggerRev()"
          >
            <!-- 
               Animation Container 
               We use this inner wrapper to handle the 'Revving' (Shake) animation 
               applying to the entire block when they are merged.
            -->
            <div class="relative flex items-center justify-center transition-transform"
                 [class.animate-rev]="animState() === 'revving'">

              <!-- WORD: NO -->
              <!-- 
                 Z-Index: 20 (On Top)
                 Motion: Slides RIGHT significantly to center
              -->
              <div 
                class="relative transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"
                [class.translate-x-[0.8em]]="animState() === 'merging' || animState() === 'revving'"
                [class.animate-launch-left]="animState() === 'launching'"
                [style.z-index]="20"
              >
                <!-- Ghost Layer for Launch -->
                @if (animState() === 'launching') {
                  <span class="absolute top-0 left-0 cool-glass-text ghost-layer blur-md translate-x-12 opacity-50">No</span>
                }
                
                <span 
                  class="cool-glass-text pr-2"
                  [ngClass]="(animState() === 'idle' || animState() === 'merging' || animState() === 'revving') ? 'lightning-text-v2' : 'glass-text'"
                >No</span>
              </div>

              <!-- WORD: WAITING -->
              <!-- 
                 Z-Index: 10 (Below)
                 Motion: Slides LEFT significantly to center
              -->
              <div 
                class="relative transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"
                [class.-translate-x-[0.8em]]="animState() === 'merging' || animState() === 'revving'"
                [class.animate-launch-right]="animState() === 'launching'"
                [style.z-index]="10"
              >
                 <!-- Ghost Layer for Launch -->
                @if (animState() === 'launching') {
                  <span class="absolute top-0 left-0 cool-glass-text ghost-layer blur-md -translate-x-12 opacity-50">Waiting.</span>
                }
                
                <span 
                  class="cool-glass-text"
                  [ngClass]="(animState() === 'idle' || animState() === 'merging' || animState() === 'revving') ? 'lightning-text-v2' : 'glass-text'"
                  style="animation-delay: 0.1s"
                >Waiting.</span>
              </div>
            </div>
          </div>
        </h1>

        <!-- Waitlist Form Section -->
        <!-- Updated to English text as requested -->
        <div class="flex justify-center mt-10 mb-12 animate-fade-in-up animation-delay-300 relative z-30">
          <form action="https://formspree.io/f/mvzzgqap" method="POST" class="w-full max-w-md mx-auto">
  <div class="flex flex-col sm:flex-row gap-2">
    
    <input 
      type="email" 
      name="email" 
      required
      placeholder="Enter your email..." 
      class="flex-1 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
    />

    <button
      type="submit"
      class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-0.5"
    >
      Join Now
    </button>
  </div>
</form>
        </div>

        <!-- Subheadline -->
        <!-- Expanded width to allow full sentences on single lines -->
        <div class="glass-container inline-block px-12 py-8 rounded-2xl liquid-glass mb-12 w-auto max-w-[95vw] backdrop-blur-md">
           <div class="flex flex-col gap-1">
             <p class="text-xl md:text-2xl text-slate-200 font-light leading-relaxed whitespace-nowrap">
               The fastest way to create screen recordings with AI-powered editing.
             </p>
             <p class="text-xl md:text-2xl text-slate-200 font-light leading-relaxed whitespace-nowrap">
               <span class="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">15 minutes to done.</span> From browser to audience in seconds.
             </p>
           </div>
        </div>

        <!-- Glass Slab Editor Mockup -->
        <div class="mt-16 relative max-w-5xl mx-auto animate-fade-in-up animation-delay-400 group perspective-1000">
          <!-- Outer Liquid Glass Container -->
          <div class="liquid-glass rounded-3xl p-3 transform transition-transform duration-700 hover:rotate-x-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
             
             <!-- Browser Bar (Glass) -->
             <div class="h-12 border-b border-white/10 flex items-center px-6 gap-4 bg-white/5 rounded-t-2xl">
                <div class="flex gap-2">
                  <div class="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                  <div class="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                  <div class="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                </div>
                <div class="flex-1 max-w-xl mx-auto h-8 bg-black/20 border border-white/10 rounded-full flex items-center justify-center text-xs text-slate-400 font-mono backdrop-blur-sm shadow-inner">
                  zapcut.com/studio
                </div>
             </div>

             <!-- Editor Content (Dark glass interior) -->
             <div class="flex h-[500px] bg-black/60 rounded-b-2xl overflow-hidden relative backdrop-blur-sm">
                
                <!-- Sidebar -->
                <div class="w-20 border-r border-white/5 flex flex-col items-center py-8 gap-6 bg-white/5">
                   <div class="w-12 h-12 rounded-2xl icon-glass flex items-center justify-center text-cyan-200">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                   </div>
                   <div class="w-12 h-12 rounded-2xl border border-white/10 text-slate-500 flex items-center justify-center hover:bg-white/5 transition-colors">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   </div>
                </div>

                <!-- Main Canvas -->
                <div class="flex-1 flex flex-col relative">
                  <div class="flex-1 flex items-center justify-center p-10">
                     <!-- Video Preview -->
                     <div class="aspect-video w-full max-w-3xl liquid-glass rounded-xl relative overflow-hidden flex items-center justify-center shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                        <div class="text-slate-500 font-light tracking-widest text-sm">VIDEO PREVIEW</div>
                        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
                     </div>
                  </div>

                  <!-- Timeline -->
                  <div class="h-48 border-t border-white/10 bg-black/40 p-6 backdrop-blur-md relative">
                     <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                     <div class="flex gap-4 items-center h-full opacity-80">
                        <!-- Glass Segments -->
                        <div class="h-16 w-32 rounded-xl icon-glass flex items-center justify-center text-xs text-white/50">Clip 1</div>
                        <div class="h-16 w-48 rounded-xl icon-glass flex items-center justify-center text-xs text-white/50">Clip 2</div>
                        <div class="h-16 w-24 rounded-xl icon-glass flex items-center justify-center text-xs text-white/50">Clip 3</div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    .animation-delay-300 { animation-delay: 0.3s; }
    .animation-delay-400 { animation-delay: 0.4s; }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .perspective-1000 {
      perspective: 1000px;
    }
    .rotate-x-2 {
      transform: rotateX(2deg);
    }
  `]
})
export class HeroComponent {
  animState = signal<AnimState>('idle');
  
  // Specific User Personas with custom generated image prompts
  creators = signal([
    // Influencer: Updated to match specific surreal collage/Severance style reference
    { 
      id: 1, 
      img: 'https://image.pollinations.ai/prompt/surreal%20collage%20art%20portrait%20man%20face%20obscured%20by%20rectangular%20montage%20video%20screens%20corporate%20sci-fi%20severance%20office%20hallway%20elevator%20blue%20balloon%20retro%20tv%20wires%20cinematic%20lighting%20photorealistic', 
      top: '15%', left: '10%', scale: 1.0, 
      label: 'Influencer', 
      dotColor: '#facc15', // Neon Yellow
      hoverShadow: 'group-hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] group-hover:border-cyan-400',
      iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' 
    },
    // Knowledge Blogger: Intellectual/Writer Aesthetic
    { 
      id: 2, 
      img: 'https://image.pollinations.ai/prompt/intellectual%20writer%20blogger%20glasses%20minimalist%20photography%20studio%20lighting', 
      top: '20%', left: '85%', scale: 0.9, 
      label: 'Knowledge Blogger', 
      dotColor: '#ef4444', 
      hoverShadow: 'group-hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] group-hover:border-red-400/50',
      // Document Text Icon
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' 
    },
    // Software Coach: Updated to match "Liquid Glass Foundations" UI Kit style
    { 
      id: 3, 
      img: 'https://image.pollinations.ai/prompt/liquid%20glass%20morphism%20ui%20design%20kit%20translucent%20colorful%20glass%20squares%20orange%20blue%20purple%20frosted%20glass%20buttons%20clean%20modern%20interface%203d%20render', 
      top: '65%', left: '8%', scale: 0.9, 
      label: 'Software Coach', 
      dotColor: '#22d3ee', 
      hoverShadow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] group-hover:border-cyan-400/50',
      // Presentation/Chart Icon
      iconPath: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' 
    },
    // Web Designer: Updated to match provided futuristic cybernetic style
    { 
      id: 4, 
      img: 'https://image.pollinations.ai/prompt/futuristic%20cybernetic%20human%20rear%20view%20with%20white%20mechanical%20spine%20implants%20clean%20minimalist%20aesthetic%20high%20tech%203d%20render%20sci-fi%20magazine%20style', 
      top: '70%', left: '88%', scale: 1.1, 
      label: 'Web Designer', 
      dotColor: '#ec4899', 
      hoverShadow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] group-hover:border-pink-400/50',
      // Pen Tool/Brush Icon
      iconPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' 
    },
  ]);

  triggerRev() {
    if (this.animState() !== 'idle') return;

    // 1. Merge (Overlap) first
    this.animState.set('merging');

    // 2. Rev engine (shake) while overlapped
    setTimeout(() => {
       this.animState.set('revving');
       
       // 3. Launch
       setTimeout(() => {
          this.animState.set('launching');
          
          // 4. Cooldown
          setTimeout(() => {
            this.animState.set('cooldown');

            // 5. Reset
            setTimeout(() => {
              this.animState.set('idle');
            }, 2000);

          }, 400); 

       }, 800);
    }, 200); // 200ms duration for merging transition
  }
}
