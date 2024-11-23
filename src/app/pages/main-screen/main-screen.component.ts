import { Component } from '@angular/core';
import { CopyrightComponent } from '../../component/copyright/copyright.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { TestimonialComponent } from '../../component/testimonial/testimonial.component';
import { AboutTeamComponent } from '../../component/about-team/about-team.component';
import { QuotesComponent } from '../../component/quotes/quotes.component';
import { ProjectsComponent } from '../../component/projects/projects.component';
import { ServicesComponent } from '../../component/services/services.component';
import { BusinessVideoComponent } from '../../component/business-video/business-video.component';
import { AboutComponent } from '../../component/about/about.component';
import { FeaturesComponent } from '../../component/features/features.component';
import { CarouselComponent } from '../../component/carousel/carousel.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    CopyrightComponent,
    FooterComponent,
    TestimonialComponent,
    AboutTeamComponent,
    QuotesComponent,
    ProjectsComponent,
    ServicesComponent,
    BusinessVideoComponent,
    AboutComponent,
    FeaturesComponent,
    CarouselComponent,
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
})
export class MainScreenComponent {}
