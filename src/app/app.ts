import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // <-- add this line!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgbModule],  // <-- add NgbModule here!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-roshan');
}
