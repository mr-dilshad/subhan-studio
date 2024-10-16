import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CopyrightComponent } from "../../component/copyright/copyright.component";

@Component({
  selector: 'app-termsncondition',
  standalone: true,
  imports: [FooterComponent, CopyrightComponent],
  templateUrl: './termsncondition.component.html',
  styleUrl: './termsncondition.component.css'
})
export class TermsnconditionComponent {

}
