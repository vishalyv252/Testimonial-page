import { Component } from '@angular/core';
import { GoogleComponent } from './components/google/google.component';
import { MetaComponent } from './components/meta/meta.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleComponent, MetaComponent, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Title for the component:
  title : string = 'Reviewers';

  // FontAwesome icon for star:
  star = faStar;

  // Array of strings representing different lists:
  lists : string[] = ["Checklist to Review an Academic Paper", "Peer Review Checklist", "Checklist for Editors, Reviewers, and Authors of SPIE Journals"];

}
