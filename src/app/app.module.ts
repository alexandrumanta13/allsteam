import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceThreeComponent } from './components/pages/service-three/service-three.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { RecentProjectComponent } from './components/pages/recent-project/recent-project.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { OfficeCleaningComponent } from './components/pages/services/office-cleaning/office-cleaning.component';
import { CleaningAtHomeComponent } from './components/pages/services/cleaning-at-home/cleaning-at-home.component';
import { CleaningRezidentialStairsComponent } from './components/pages/services/cleaning-rezidential-stairs/cleaning-rezidential-stairs.component';
import { CleaningHorecaComponent } from './components/pages/services/cleaning-horeca/cleaning-horeca.component';
import { CleaningAfterConstructorComponent } from './components/pages/services/cleaning-after-constructor/cleaning-after-constructor.component';
import { CleaningBeautySalonComponent } from './components/pages/services/cleaning-beauty-salon/cleaning-beauty-salon.component';
import { CleaningComponent } from './components/pages/cleaning/cleaning.component';
import { CleaningSofaComponent } from './components/pages/cleaning/cleaning-sofa/cleaning-sofa.component';
import { PortfolioSliderComponent } from './components/portfolio-slider/portfolio-slider.component';
import { CleaningFloorComponent } from './components/pages/cleaning/cleaning-floor/cleaning-floor.component';
import { CleaningAutoComponent } from './components/pages/cleaning/cleaning-auto/cleaning-auto.component';
import { CleaningSpecialServicesComponent } from './components/pages/cleaning/cleaning-special-services/cleaning-special-services.component';
import { SanitizationAndDesinfectionComponent } from './components/pages/sanitization-and-desinfection/sanitization-and-desinfection.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { GdprComponent } from './components/pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './components/pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './components/pages/cookies/cookies.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { CleaningHorecaServicesComponent } from './components/pages/cleaning/cleaning-horeca-services/cleaning-horeca-services.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    ServiceComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceDetailsComponent,
    BlogComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    PricingComponent,
    RecentProjectComponent,
    ErrorComponent,
    TeamComponent,
    TeamTwoComponent,
    ContactComponent,
    ServicesComponent,
    OfficeCleaningComponent,
    CleaningAtHomeComponent,
    CleaningRezidentialStairsComponent,
    CleaningHorecaComponent,
    CleaningAfterConstructorComponent,
    CleaningBeautySalonComponent,
    CleaningComponent,
    CleaningSofaComponent,
    PortfolioSliderComponent,
    CleaningFloorComponent,
    CleaningAutoComponent,
    CleaningSpecialServicesComponent,
    SanitizationAndDesinfectionComponent,
    SidebarComponent,
    GdprComponent,
    ConfidentialityComponent,
    CookiesComponent,
    TermsComponent,
    NotFoundComponent,
    ThankYouComponent,
    CleaningHorecaServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
