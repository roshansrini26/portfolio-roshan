// File: src/app/home/home.component.ts
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

  // Method to download resume
  downloadResume() {
    // Make sure your resume PDF is in the public/assets folder
    const resumePath = 'assets/resume/Roshan_Srinivasan_Resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Roshan_Srinivasan_Resume.pdf'; // This sets the filename
    link.target = '_blank';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}