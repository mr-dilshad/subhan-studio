import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
