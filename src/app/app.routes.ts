import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', component: Home },           // Home page at root
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects}
];
