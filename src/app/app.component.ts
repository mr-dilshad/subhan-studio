import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./component/topbar/topbar.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { CopyrightComponent } from "./component/copyright/copyright.component";
import { FooterComponent } from "./component/footer/footer.component";
import { TestimonialComponent } from "./component/testimonial/testimonial.component";
import { AboutTeamComponent } from "./component/about-team/about-team.component";
import { QuotesComponent } from "./component/quotes/quotes.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { ServicesComponent } from "./component/services/services.component";
import { BusinessVideoComponent } from "./component/business-video/business-video.component";
import { AboutComponent } from "./component/about/about.component";
import { FeaturesComponent } from "./component/features/features.component";
import { CarouselComponent } from "./component/carousel/carousel.component";
import { SpinnerComponent } from "./component/spinner/spinner.component";
import { MainScreenComponent } from "./pages/main-screen/main-screen.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, NavbarComponent, CopyrightComponent, FooterComponent, TestimonialComponent, AboutTeamComponent, QuotesComponent, ProjectsComponent, ServicesComponent, BusinessVideoComponent, AboutComponent, FeaturesComponent, CarouselComponent, SpinnerComponent, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'subhan-studio';
}
