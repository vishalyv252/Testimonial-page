import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent {

  // Array to hold star ratings:
  stars : number[] = Array(5).fill(0);

  // Full name of the user, constructed by combining first name and last name:
  first_name : string = "Samantha";
  last_name : string = "Lee";
  full_name = this.first_name +" "+ this.last_name;

  // Displaying the value of comments variable:
  comments : string = "The checklist ensures that the review process is thorough";

}
