import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-feature-page',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}
