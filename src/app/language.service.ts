// Create this file: src/app/language.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  nav: {
    aboutMe: string;
    skills: string;
    projects: string;
  };
  home: {
    title: string;
    bio: string;
    viewProjects: string;
    mySkills: string;
    location: string;
    email: string;
    phone: string;
    getInTouch: string;
    currentWork: string;
    education: string;
    yearsExperience: string;
    mlProjects: string;
    publications: string;
  };
  skills: {
    title: string;
    description: string;
    all: string;
    dataScience: string;
    webDevelopment: string;
    machineLearning: string;
    databases: string;
    tools: string;
    showing: string;
    skill: string;
    skills: string;
  };
  projects: {
    title: string;
    description: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<'en' | 'de'>('en');
  currentLang$ = this.currentLang.asObservable();
  private isBrowser: boolean;

  private translations: Record<'en' | 'de', Translations> = {
    en: {
      nav: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects'
      },
      home: {
        title: 'Data Science & AI Engineer',
        bio: 'Currently pursuing my Master\'s in Data Science at TU Hamburg. I work on machine learning solutions for real-world problems — from transport mode detection to brain tumor classification.',
        viewProjects: 'View Projects',
        mySkills: 'My Skills',
        location: 'Location',
        email: 'Email',
        phone: 'Phone',
        getInTouch: 'Get In Touch',
        currentWork: 'Current Work',
        education: 'Education',
        yearsExperience: 'Years Experience',
        mlProjects: 'ML Projects',
        publications: 'Publications'
      },
      skills: {
        title: 'Skills & Experience',
        description: 'Technical expertise, professional activities, and achievements',
        all: 'All',
        dataScience: 'Data Science',
        webDevelopment: 'Web Development',
        machineLearning: 'Machine Learning',
        databases: 'Databases',
        tools: 'Tools',
        showing: 'Showing',
        skill: 'skill',
        skills: 'skills'
      },
      projects: {
        title: 'Projects',
        description: 'Portfolio of technical projects and contributions'
      }
    },
    de: {
      nav: {
        aboutMe: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte'
      },
      home: {
        title: 'Datenwissenschaft & KI-Ingenieur',
        bio: 'Ich studiere derzeit meinen Master in Data Science an der TU Hamburg. Ich arbeite an Machine-Learning-Lösungen für reale Probleme — von der Transportmodus-Erkennung bis zur Gehirntumor-Klassifikation.',
        viewProjects: 'Projekte ansehen',
        mySkills: 'Meine Fähigkeiten',
        location: 'Standort',
        email: 'E-Mail',
        phone: 'Telefon',
        getInTouch: 'Kontakt aufnehmen',
        currentWork: 'Aktuelle Arbeit',
        education: 'Bildung',
        yearsExperience: 'Jahre Erfahrung',
        mlProjects: 'ML-Projekte',
        publications: 'Veröffentlichungen'
      },
      skills: {
        title: 'Fähigkeiten & Erfahrung',
        description: 'Technische Expertise, berufliche Aktivitäten und Erfolge',
        all: 'Alle',
        dataScience: 'Datenwissenschaft',
        webDevelopment: 'Webentwicklung',
        machineLearning: 'Maschinelles Lernen',
        databases: 'Datenbanken',
        tools: 'Werkzeuge',
        showing: 'Zeige',
        skill: 'Fähigkeit',
        skills: 'Fähigkeiten'
      },
      projects: {
        title: 'Projekte',
        description: 'Portfolio technischer Projekte und Beiträge'
      }
    }
  };

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    // Only access localStorage in browser
    if (this.isBrowser) {
      const saved = localStorage.getItem('preferredLanguage') as 'en' | 'de';
      if (saved) {
        this.currentLang.next(saved);
      }
    }
  }

  switchLanguage(lang: 'en' | 'de'): void {
    this.currentLang.next(lang);
    // Only save to localStorage in browser
    if (this.isBrowser) {
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  getCurrentLanguage(): 'en' | 'de' {
    return this.currentLang.value;
  }

  getTranslations(): Translations {
    return this.translations[this.currentLang.value];
  }
}