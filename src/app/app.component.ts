// File: src/app/app.component.ts (RENAME from app.ts to app.component.ts)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;
  currentLanguage: 'en' | 'de' = 'en';

  constructor(public langService: LanguageService) {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  switchLanguage(lang: 'en' | 'de'): void {
    this.langService.switchLanguage(lang);
    this.closeMenu();
  }

  get t() {
    return this.langService.getTranslations().nav;
  }
}