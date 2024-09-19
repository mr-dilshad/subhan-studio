import { Component } from '@angular/core';
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { AboutTeamComponent } from "../../component/about-team/about-team.component";
import { BusinessVideoComponent } from "../../component/business-video/business-video.component";
import { AboutComponent } from "../../component/about/about.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CopyrightComponent, FooterComponent, AboutTeamComponent, BusinessVideoComponent, AboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponentPage {

}
