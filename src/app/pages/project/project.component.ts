import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CopyrightComponent } from "../../component/copyright/copyright.component";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [FooterComponent, CopyrightComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
