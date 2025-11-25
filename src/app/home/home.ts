import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  roles: string[] = ['Developer', 'Researcher', 'Master\'s Student', 'Problem Solver'];
  currentRole: string = this.roles[0];
  currentIndex: number = 0;

  ngOnInit() {
    this.rotateRoles();
  }

  rotateRoles() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.currentIndex];
    }, 2500);
  }

  scrollToContact() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}