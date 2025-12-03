import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  period: string;
  title: string;
  role?: string;
  description: string[];
  technologies: string[];
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
      period: 'Nov 2025 – Current',
      title: 'TUHH Program: Fishing for Experience with Walwin',
      role: 'SCRUM Master & Developer',
      description: [
        'Built core backend modules for a centralized scholarship platform',
        'Designed a recommendation system concept for scholarship matching',
        'Managed team workflow as SCRUM Master using Agile practices',
        'Delivered an MVP prototype and UX recommendations for scalability'
      ],
      technologies: ['Python', 'PostgreSQL', 'Docker']
    },
    {
      id: 2,
      period: 'Jan 2025 – Feb 2025',
      title: 'Fitness Tracker for Barbell Exercises',
      description: [
        'Processed raw sensor data for six barbell exercises, removing outliers using Chauvenet\'s Criterion',
        'Extracted features using PCA and Fourier Transformation',
        'Built predictive models (NN, Random Forest, Decision Tree), achieving 99% accuracy with NN'
      ],
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
      github: 'https://github.com/roshansrini26/code_fitness_tracker_ml'
    },
    {
      id: 3,
      period: 'Dec 2024 – Jan 2025',
      title: 'Retail Q&A Tool Using LLM and Generative AI',
      description: [
        'Designed and implemented a large language model (LLM) to handle retail Q&A scenarios',
        'Leveraged Generative AI for accurate responses',
        'Improved user experience by fine-tuning the model for context-specific queries'
      ],
      technologies: ['Python', 'Hugging Face', 'Transformer Models']
    },
    {
      id: 4,
      period: '2024',
      title: 'Lane and Object Detection in Autonomous Vehicles',
      description: [
        'Developed a system for lane and object detection in video inputs',
        'Integrated computer vision techniques for real-time detection',
        'Enhanced YOLO models for simultaneous object and lane tracking'
      ],
      technologies: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
      github: 'https://github.com/roshansrini26/object_lane_detection'
    },
    {
      id: 5,
      period: '2024',
      title: 'Twitter Sentiment Analysis Using BERT',
      description: [
        'Built a model to classify tweets as positive, negative, or neutral',
        'Collected data via Tweepy API',
        'Visualized insights with Matplotlib'
      ],
      technologies: ['Python', 'BERT', 'Tweepy', 'Matplotlib', 'NLP']
    },
    {
      id: 6,
      period: '2023',
      title: 'Sales Insight Report Using SQL and Power BI',
      description: [
        'Analyzed sales data to create interactive dashboards',
        'Enabled stakeholders to identify trends across office locations',
        'Designed data-driven visualizations for decision-making'
      ],
      technologies: ['SQL', 'Power BI', 'Data Analytics']
    },
    {
      id: 7,
      period: '2023',
      title: 'Reminder Application',
      description: [
        'Full stack web application that stores users\' notes and sends notifications',
        'Implemented user authentication and database management',
        'Built RESTful API endpoints for CRUD operations'
      ],
      technologies: ['Flask', 'SQLAlchemy', 'Python', 'SQL']
    }
  ];
}