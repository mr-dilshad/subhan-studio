import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { TestimonialComponent } from "../../component/testimonial/testimonial.component";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent, TestimonialComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
