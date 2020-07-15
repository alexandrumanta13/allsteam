import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { OfficeCleaningComponent } from './components/pages/services/office-cleaning/office-cleaning.component';
import { CleaningAtHomeComponent } from './components/pages/services/cleaning-at-home/cleaning-at-home.component';
import { CleaningRezidentialStairsComponent } from './components/pages/services/cleaning-rezidential-stairs/cleaning-rezidential-stairs.component';
import { CleaningHorecaComponent } from './components/pages/services/cleaning-horeca/cleaning-horeca.component';
import { CleaningAfterConstructorComponent } from './components/pages/services/cleaning-after-constructor/cleaning-after-constructor.component';
import { CleaningBeautySalonComponent } from './components/pages/services/cleaning-beauty-salon/cleaning-beauty-salon.component';
import { CleaningSofaComponent } from './components/pages/cleaning/cleaning-sofa/cleaning-sofa.component';
import { CleaningFloorComponent } from './components/pages/cleaning/cleaning-floor/cleaning-floor.component';
import { CleaningServiceHorecaComponent } from './components/pages/cleaning/cleaning-horeca/cleaning-horeca.component';
import { CleaningAutoComponent } from './components/pages/cleaning/cleaning-auto/cleaning-auto.component';
import { CleaningSpecialServicesComponent } from './components/pages/cleaning/cleaning-special-services/cleaning-special-services.component';
import { SanitizationAndDesinfectionComponent } from './components/pages/sanitization-and-desinfection/sanitization-and-desinfection.component';
import { GdprComponent } from './components/pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './components/pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './components/pages/cookies/cookies.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { CleaningComponent } from './components/pages/cleaning/cleaning.component';
import { CleaningHorecaServicesComponent } from './components/pages/cleaning/cleaning-horeca-services/cleaning-horeca-services.component';

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
    {
        path: 'curatenie-dupa-constructor-renovare-brasov', component: CleaningAfterConstructorComponent,
        data: {
            title: 'Curatenie dupa constructor Brasov',
            description: 'O firma de curatenie profesionala este capabila sa realizaeze cele mai complexe operatiuni de curatenie dupa constructor sau renovare de care ai nevoie. Apeleaza cu incredere!',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'curatenie-saloane-infrumusetare-cabinete-medicale-brasov', component: CleaningBeautySalonComponent,
        data: {
            title: 'Curatenie saloane infrumusetare cabinete medicale Brasov',
            description: 'Suntem o firma de curatenie profesionala din Brasov si iti punem  la dispozitie servicii de curatenie salaone de infrumusetare si cabinete medicale.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'curatare-canapele-fotolii-scaune-brasov', component: CleaningSofaComponent,
        data: {
            title: 'Curatenie canapele fotolii scaune Brasov',
            description: 'Allsteam este o firma de curatare canapele in Brasov si in zinele limitrofe. Realizam servicii complexe de curatenie profesionala la domiciliu. Contacteaza-ne pentru detalii.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'firma-curatare-podele-pavaje-brasov', component: CleaningFloorComponent,
        data: {
            title: 'firma curatare padele pavaje',
            description: 'Allsteam este o firma de curatare canapele in Brasov si in zinele limitrofe. Realizam servicii complexe de curatenie profesionala la domiciliu. Contacteaza-ne pentru detalii.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'firma-curatare-echipamente-horeca-brasov', component: CleaningHorecaServicesComponent,
        data: {
            title: 'firma curatare echipamente horeca',
            description: 'Suntem o firma de curatenie profesionala din Brasov. Ne deplasam la locatia ta pentru serviciul de curatare echipamente horeca si alte tipuri de curatenie.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'curatare-tapiterie-auto-detailing-auto-brasov', component: CleaningAutoComponent,
        data: {
            title: 'curatare tapiterie auto',
            description: 'Allsteam este o echipa de curatenie profesionala ce executa servicii de curatare tapiterie auto si detailing auto in Brasov si in zonele limitrofe.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'servicii-speciale-de-curatare-brasov', component: CleaningSpecialServicesComponent,
        data: {
            title: 'servicii speciale de curatate brasov',
            description: 'Allsteam este o echipa de curatenie profesionala ce executa servicii de curatare tapiterie auto si detailing auto in Brasov si in zonele limitrofe.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'igienizare-dezinfectie-spatii-brasov', component: SanitizationAndDesinfectionComponent,
        data: {
            title: 'igienizare dezinfectie brasov',
            description: 'Suntem o firma de curatenie profesionala din Brasov si zonele limitrofe. Efectuam servicii de igienizare si dezinfectie prin nebulizare in orice spatiu.',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'despre-noi', component: AboutComponent,
        data: {
            title: 'Curatenie canapele fotolii scaune Brasov',
            description: 'Allsteam este o firma de curatare canapele in Brasov si in zinele limitrofe. Realizam servicii complexe de curatenie profesionala la domiciliu. Contacteaza-ne pentru detalii.',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'servicii-de-curatenie', component: ServicesComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'servicii-de-curatare', component: CleaningComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'preturi', component: PricingComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'error', component: ErrorComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'contact', component: ContactComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'setari-gdpr', component: GdprComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'confidentialitate', component: ConfidentialityComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'setari-cookies', component: CookiesComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'termeni-si-conditii', component: TermsComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },

    {
        path: '404', component: NotFoundComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },

    {
        path: 'thank-you', component: ThankYouComponent,
        data: {
            title: '',
            description: '',
            ogUrl: 'your og url'
        }
    },

    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }