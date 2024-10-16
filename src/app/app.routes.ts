import { Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponentPage } from './pages/about/about.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServicesComponent } from './pages/services/services.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { TermsnconditionComponent } from './pages/termsncondition/termsncondition.component';
import { SupportComponent } from './pages/support/support.component';

export const routes: Routes = [
    { path: '', component: MainScreenComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutComponentPage },
    { path: 'feature', component: FeatureComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'termsandconditions', component: TermsnconditionComponent },
    { path: 'support', component: SupportComponent }
];
