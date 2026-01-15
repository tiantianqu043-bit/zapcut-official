import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
      [class.glass-nav]="isScrolled()"
      [class.py-6]="!isScrolled()"
      [class.py-4]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group cursor-pointer select-none">
          <!-- Updated Icon: Black Rounded Square with White Bolt -->
          <div class="relative w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-300 border border-white/20">
             <!-- Subtle Gloss/Highlight -->
             <div class="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
             
             <!-- White Lightning Bolt -->
             <svg viewBox="0 0 24 24" class="w-6 h-6 text-white drop-shadow-sm" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="none" /> 
             </svg>
          </div>
          <span class="text-2xl font-bold glass-text tracking-tighter">Zapcut</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-semibold text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Features</a>
          <a href="#faq" class="text-sm font-semibold text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">FAQ</a>
          <a href="#roadmap" class="text-sm font-semibold text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Roadmap</a>
          <a href="#" class="text-sm font-semibold text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Editor</a>
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-4">
          <button class="hidden md:block px-6 py-2.5 rounded-full liquid-glass text-white text-sm font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/20">
            Install Extension
          </button>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 20);
      });
    }
  }
}