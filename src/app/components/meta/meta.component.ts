import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.css'
})
export class MetaComponent {

  stars : number[] = Array(5).fill(0);

  first_name : string = "Rachel";
  last_name : string = "Patel";
  full_name : string = this.first_name+" "+this.last_name;

  comments : string = "I highly recommend the Writecream Business Description";

}
