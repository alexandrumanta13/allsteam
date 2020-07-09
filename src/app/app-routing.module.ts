import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { OfficeCleaningComponent } from './components/pages/services/office-cleaning/office-cleaning.component';
import { CleaningAtHomeComponent } from './components/pages/services/cleaning-at-home/cleaning-at-home.component';
import { CleaningRezidentialStairsComponent } from './components/pages/services/cleaning-rezidential-stairs/cleaning-rezidential-stairs.component';
import { CleaningHorecaComponent } from './components/pages/services/cleaning-horeca/cleaning-horeca.component';

const routes: Routes = [
    {
        path: '', component: HomeOneComponent,
        data: {
            title: 'Curatenie Brasov',
            description: 'Allsteam',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'curatenie-birouri-brasov', component: OfficeCleaningComponent,
        data: {
            title: 'Curatenie birouri Brasov',
            description: 'Suntem o firma de curatenie la domiciliu. Venim acasa la tine, oriunde in Brasov si in zonele limitrofe. Contacteaza-ne pentru detalii.',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'curatenie-la-domiciliu-brasov', component: CleaningAtHomeComponent,
        data: {
            title: 'Curatenie la domiciliu Brasov',
            description: 'Un mediu curat de lucru inseamna un mediu placut pentru angajati, fapt care sustine cresterea productivitatii. Apleaza la servicii de curatenie birouri in Brasov.',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'curatenie-scari-de-bloc-brasov', component: CleaningRezidentialStairsComponent,
        data: {
            title: 'Curatenie scari de bloc Brasov',
            description: 'Apelati cu increredere la echipa noastra de curatenie scari de bloc din Brasov, pentru un bloc ingrijit, curat, igienizat si sigur pentru locatari.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'curatenie-restaurante-cafenele-baruri-brasov', component: CleaningHorecaComponent,
        data: {
            title: 'Curatenie resaturante cafenele baruri Brasov',
            description: 'AllSteam - echipa ta de curatenie de incredere pentru servicii de curatenie, igienizare si dezinfectare din zona HoReCa: restaurante, cafenele, baruri.',
            ogUrl: 'your og url'
        }
    },
    { path: 'service', component: ServiceComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }