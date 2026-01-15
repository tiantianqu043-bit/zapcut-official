import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  videoPlaceholder: string;
  videoUrl?: string; 
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 px-6 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-32 max-w-4xl mx-auto">
          <h2 class="text-6xl md:text-8xl font-black mb-10 tracking-tighter">
            <span class="glass-text">Faster. Better.</span>
          </h2>
          <p class="text-2xl text-slate-300 font-light liquid-glass inline-block px-8 py-4 rounded-full">
            Time is money. We cut the waiting so you can keep creating.
          </p>
        </div>

        <div class="space-y-40">
          @for (feature of features(); track feature.id; let idx = $index) {
            <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-32" [class.lg:flex-row-reverse]="idx % 2 !== 0">
              
              <!-- Text Content -->
              <div class="flex-1 space-y-8">
                <!-- Liquid Icon Orb -->
                <div class="relative w-24 h-24 mb-6">
                   <div class="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                   <div class="relative w-full h-full rounded-full icon-glass flex items-center justify-center text-4xl text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/30">
                      {{ feature.icon }}
                      <!-- Specular highlight on orb -->
                      <div class="absolute top-3 left-5 w-6 h-3 bg-white/40 rounded-[100%] rotate-[-45deg] blur-[1px]"></div>
                   </div>
                </div>
                
                <h3 class="text-5xl font-bold text-white leading-[1.1] drop-shadow-lg">{{ feature.title }}</h3>
                <p class="text-xl text-slate-300 leading-relaxed font-light">{{ feature.description }}</p>
                
                <div class="pt-6">
                   <div class="inline-flex liquid-glass px-6 py-2 rounded-full text-sm font-mono text-cyan-200 uppercase tracking-widest border border-cyan-500/30">
                     Feature .0{{idx + 1}}
                   </div>
                </div>
              </div>

              <!-- Visual/Video Area - Liquid Glass Slab -->
              <div class="flex-1 w-full perspective-1000">
                <div class="relative group transform transition-all hover:rotate-y-2 duration-700">
                  <!-- Glow behind -->
                  <div class="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl opacity-40 group-hover:opacity-80 transition duration-700 rounded-full"></div>
                  
                  <!-- The Liquid Glass Card -->
                  <div class="liquid-glass rounded-[2rem] p-3 relative overflow-hidden backdrop-blur-xl">
                    
                    <div class="rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-black/50 relative border border-white/5">
                      @if (feature.videoUrl) {
                        <video 
                          class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          [src]="feature.videoUrl"
                          autoplay muted loop playsinline
                        ></video>
                      } @else {
                        <div class="absolute inset-0 flex items-center justify-center">
                           <!-- Abstract Grid -->
                           <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                           
                           <div class="text-center relative z-10">
                             <div class="w-20 h-20 mx-auto mb-6 rounded-full icon-glass flex items-center justify-center bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <span class="text-4xl opacity-80">{{feature.icon}}</span>
                             </div>
                             <p class="text-base font-mono text-white/60 uppercase tracking-widest">{{feature.videoPlaceholder}}</p>
                           </div>
                        </div>
                      }
                      
                      <!-- Glossy Reflection Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  features = signal<Feature[]>([
    {
      id: 'f1',
      title: 'Record. Edit. Done.',
      description: 'One seamless workflow. Capture your screen and webcam, then edit immediately inside your browser. No file dragging, no waiting.',
      icon: '⚡',
      videoPlaceholder: 'Instant Workflow',
      videoUrl: '' 
    },
    {
      id: 'f2',
      title: 'Render in Seconds.',
      description: 'Forget the "Rendering..." loading bar. Our cloud engine processes 4K video in 15-30 seconds. By the time you blink, it\'s ready to share.',
      icon: '🚀',
      videoPlaceholder: 'Hyperspeed Render',
      videoUrl: '' 
    },
    {
      id: 'f3',
      title: 'Zero Install Needed.',
      description: 'Why download 500MB software? Zapcut lives in your extension bar. Lightweight, always updated, and ready when inspiration strikes.',
      icon: '☁️',
      videoPlaceholder: 'Browser Native',
      videoUrl: '' 
    },
    {
      id: 'f4',
      title: 'Edit Video Like Text.',
      description: 'We transcribe your video instantly. Want to cut a scene? Just highlight the text and hit delete. It\'s magic, not manual labor.',
      icon: '📝',
      videoPlaceholder: 'Text-Based Editing',
      videoUrl: '' 
    }
  ]);
}