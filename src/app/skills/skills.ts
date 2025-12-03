import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  items: string[];
}

interface Network {
  date: string;
  location: string;
  title: string;
  organization: string;
  description: string[];
}

interface Publication {
  year: string;
  title: string;
  authors: string;
  description: string[];
  tech: string;
}

interface Achievement {
  date: string;
  title: string;
  description: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  selectedCertificate: Certificate | null = null;

  openCertificate(cert: Certificate): void {
    this.selectedCertificate = cert;
  }

  closeCertificate(): void {
    this.selectedCertificate = null;
  }

  skills: Skill[] = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C++']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'TensorFlow', 'OpenCV', 'Hugging Face', 'BERT']
    },
    {
      category: 'Database',
      items: ['MySQL', 'SQLAlchemy', 'MongoDB']
    },
    {
      category: 'Tools',
      items: ['Jupyter Lab', 'Jupyter Notebook', 'Git/Github', 'Microsoft PowerBI', 'MySQL Workbench']
    },
    {
      category: 'Specialized Domains',
      items: ['Deep Learning', 'Computer Vision', 'Cloud Computing (AWS)', 'Natural Language Processing']
    }
  ];

  networks: Network[] = [
    {
      date: '11/2025 – Current',
      location: 'Harburg',
      title: 'Formula Student Team - Egnition',
      organization: 'Formula Student',
      description: [
        'Maintain and update the official team website',
        'Support event planning and coordination for workshops',
        'Design digital layouts and promotional materials'
      ]
    },
    {
      date: '01/2024 – 03/2024',
      location: 'National',
      title: 'Techfest Organizer - Tantrotsav\'24',
      organization: 'Google Developers School Club',
      description: [
        'Led coordination of a two-day national techfest',
        'Managed logistics and secured sponsorships',
        'Ensured seamless execution of technical activities'
      ]
    },
    {
      date: '08/2023 – 07/2024',
      location: 'Chennai',
      title: 'Management Lead',
      organization: 'Google Developers Student Club AVV',
      description: [
        'Organized workshops with Google experts',
        'Led events on Google Cloud Platform and Machine Learning',
        'Collaborated with sponsors and industry professionals'
      ]
    },
    {
      date: '01/2023 – 05/2023',
      location: 'Chennai',
      title: 'Android Development Mentor',
      organization: 'AMC FOSS Club',
      description: [
        'Guided students in Android development using Android Studio',
        'Provided hands-on assistance with UI design',
        'Supported database integration and app deployment'
      ]
    }
  ];

  publications: Publication[] = [
    {
      year: '2025',
      title: 'Quantum-Assisted Deep Learning for Secure Brain Tumor Image Classification',
      authors: 'Karthigeyan, Dr. Diviya',
      description: [
        'Developed quantum circuits for image preprocessing to reduce computational time',
        'Used DNN to optimize training time and improve accuracy',
        'Implemented cryptographic techniques for secure image transfer'
      ],
      tech: 'Quantum Circuits, DNN, Cryptography, Python'
    },
    {
      year: '2024',
      title: 'Optimizing Lung Cancer Classification Prediction based on Random Forest and SMOTE Techniques',
      authors: 'R Bhuvaneshwari',
      description: [
        'Achieved 98% accuracy and 99% F1 score with Random Forest model',
        'Addressed class imbalance using SMOTE technique',
        'Published single-authored research paper'
      ],
      tech: 'Random Forest, SMOTE, Python'
    }
  ];

  achievements: Achievement[] = [
    {
      date: '03/2023',
      title: 'Runner - TechZeal Hackathon',
      description: [
        'National level hackathon by SONA College of Technology',
        'Developed HealthCare Chatbot using NLP',
        'Facilitated consultations and appointment bookings'
      ]
    },
    {
      date: '08/2022',
      title: 'Runners - Smart India Hackathon 2022',
      description: [
        'Problem statement by Ministry of School Education, Government of India',
        'Developed GAMES - Asset Management Android App',
        'Selected to interact with Prime Minister via live video call'
      ]
    }
  ];

  certificates: Certificate[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '02/2025 – 02/2028',
      image: 'assets/images/certificates/AWS_CCP.jpg'
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: '2024',
      image: 'assets/images/certificates/Into_GenAI.jpg'
    },
    {
      name: 'Database and SQL for Data Science with Python',
      issuer: 'IBM',
      date: '2024',
      image: 'assets/images/certificates/Database and SQL.jpg'
    },
  ];

  languages = [
    { name: 'English', level: 'IELTS Band 7 (CEFR C1)', proficiency: 95 },
    { name: 'German', level: 'Learning A2', proficiency: 40 }
  ];

  extracurricular = [
    'Basketball Player - Active participation in university tournaments',
    'Community Volunteer - Organizing technical workshops for students',
  ];
}