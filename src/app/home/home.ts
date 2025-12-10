// File: src/app/home/home.component.ts (Keep your folder structure)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  profileImage = 'assets/images/Profile.jpg';

  constructor(public langService: LanguageService) {}

  get t() {
    return this.langService.getTranslations().home;
  }
}