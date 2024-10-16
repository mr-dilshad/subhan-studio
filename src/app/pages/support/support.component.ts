import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
