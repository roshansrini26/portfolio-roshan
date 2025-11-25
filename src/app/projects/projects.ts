import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  year: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      year: 2021,
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with payment integration and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      icon: '🛒',
      github: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      year: 2021,
      title: 'Weather Forecast App',
      description: 'Real-time weather application with 7-day forecast and location-based predictions',
      technologies: ['JavaScript', 'API', 'CSS3'],
      category: 'Frontend',
      icon: '🌤️',
      github: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      year: 2022,
      title: 'Task Management System',
      description: 'Collaborative task manager with real-time updates and team collaboration features',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      category: 'Full Stack',
      icon: '✅',
      link: 'https://demo.example.com'
    },
    {
      id: 4,
      year: 2022,
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for customer churn prediction with 92% accuracy',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      category: 'ML/AI',
      icon: '🤖',
      github: 'https://github.com/yourusername/project4'
    },
    {
      id: 5,
      year: 2023,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'Data Visualization',
      icon: '📊',
      link: 'https://demo.example.com'
    },
    {
      id: 6,
      year: 2023,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and progress',
      technologies: ['React Native', 'Redux', 'Firebase'],
      category: 'Mobile Development',
      icon: '💪',
      github: 'https://github.com/yourusername/project6'
    },
    {
      id: 7,
      year: 2024,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using NLP for customer service automation',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React'],
      category: 'AI/ML',
      icon: '💬',
      link: 'https://demo.example.com'
    },
    {
      id: 8,
      year: 2024,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Next.js'],
      category: 'Blockchain',
      icon: '🗳️',
      github: 'https://github.com/yourusername/project8'
    },
    {
      id: 9,
      year: 2025,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with interactive animations and responsive design',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      category: 'Frontend',
      icon: '🎨',
      link: 'https://yourportfolio.com'
    }
  ];

  years = [2021, 2022, 2023, 2024, 2025];
  
  selectedYear: number | null = null;

  getProjectsByYear(year: number): Project[] {
    return this.projects.filter(p => p.year === year);
  }

  filterByYear(year: number) {
    this.selectedYear = this.selectedYear === year ? null : year;
  }

  get filteredProjects(): Project[] {
    if (this.selectedYear) {
      return this.projects.filter(p => p.year === this.selectedYear);
    }
    return this.projects;
  }
}