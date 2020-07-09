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
    CleaningSofaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
