import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
