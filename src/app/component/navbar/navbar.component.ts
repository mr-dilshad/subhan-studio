import { Component } from '@angular/core';
import bootstrap from '../../../main.server';
import { CalanderComponent } from "../calander/calander.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CalanderComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  

  constructor(private router: Router) {}
  scrollToQuote(): void {
    const element = document.getElementById('quote-section');
    console.log("inside quote section");
    
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
