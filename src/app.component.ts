import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { RoadmapComponent } from './components/roadmap.component';
import { FaqComponent } from './components/faq.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    RoadmapComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: [], // using Tailwind
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
