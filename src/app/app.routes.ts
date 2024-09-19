import { Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponentPage } from './pages/about/about.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';

export const routes: Routes = [
    { path: '', component: MainScreenComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutComponentPage },
    { path: 'feature', component: FeatureComponent },
    { path: 'not-found', component: NotFoundComponent }
];
