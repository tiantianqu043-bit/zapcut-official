import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 px-6 max-w-4xl mx-auto relative z-10">
      <h2 class="text-5xl font-black text-center mb-20 glass-text">FAQ</h2>
      
      <div class="space-y-6">
        @for (item of items(); track item.q; let i = $index) {
          <div class="liquid-glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 group">
            <button 
              (click)="toggle(i)"
              class="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <span class="font-bold text-xl text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm">{{ item.q }}</span>
              <div class="w-8 h-8 rounded-full icon-glass flex items-center justify-center transform transition-all duration-300" [class.rotate-180]="isOpen(i)">
                 <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                 </svg>
              </div>
            </button>
            <div 
              class="px-8 text-slate-300 overflow-hidden transition-all duration-500 ease-spring"
              [style.max-height]="isOpen(i) ? '200px' : '0px'"
              [style.opacity]="isOpen(i) ? '1' : '0'"
            >
              <div class="pb-8 pt-0 leading-relaxed font-light text-lg">
                {{ item.a }}
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .ease-spring {
      transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  `]
})
export class FaqComponent {
  items = signal([
    { q: 'Is Zapcut free to use?', a: 'Yes, Zapcut offers a free tier that allows for basic recording and editing. Pro features like 4K export and unlimited storage are available in the paid plan.' },
    { q: 'Does it work on Mac and Windows?', a: 'Absolutely. Since Zapcut runs as a browser extension (Chrome, Edge, Brave), it works seamlessly on any desktop OS that supports Chromium browsers.' },
    { q: 'Can I record my webcam and screen?', a: 'Yes! You can record screen only, webcam only, or a picture-in-picture mode perfect for tutorials and reaction videos.' },
    { q: 'Is my data secure?', a: 'We use industry-standard encryption for all data transmission and storage. Your recordings are private until you choose to share them.' }
  ]);

  openIndex = signal<number | null>(0);

  isOpen(index: number): boolean {
    return this.openIndex() === index;
  }

  toggle(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(null);
    } else {
      this.openIndex.set(index);
    }
  }
}