import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-2 md:col-span-1">
            <div class="flex items-center gap-3 mb-6">
               <!-- Footer Logo: Black Rounded Square -->
               <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20 shadow-sm">
                  <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="none" /> 
                  </svg>
               </div>
               <span class="text-2xl font-bold text-white tracking-tight">Zapcut</span>
            </div>
            <p class="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
              The fastest way to record, edit, and share video. Built for speed, designed for creators.
            </p>
          </div>
          
          <div>
            <h4 class="font-bold text-white mb-6">Product</h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Chrome Extension</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-white mb-6">Resources</h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Discord Community</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Creator Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-white mb-6">Legal</h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-xs text-slate-600 font-medium">© 2024 Zapcut Inc. All rights reserved.</p>
          <div class="flex gap-4">
            <!-- Social placeholders -->
            <div class="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all">
               <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            </div>
            <div class="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}