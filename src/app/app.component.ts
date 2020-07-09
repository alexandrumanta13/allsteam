import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SEOServiceService } from './seoservice.service';
import { filter, map, mergeMap } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private _seoService: SEOServiceService
    ) { }

    ngOnInit(){
        this.recallJsFuntions();

        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
              while (route.firstChild) route = route.firstChild;
              return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data)
          )
            .subscribe((event) => {
              this._seoService.updateTitle(event['title']);
              this._seoService.updateOgUrl(event['ogUrl']);
              //Updating Description tag dynamically with title
              this._seoService.updateDescription(event['title'] + event['description'])
            });
      
          this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
              return;
            }
            window.scrollTo(0, 0)
          });
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.loader-content').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.loader-content').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}






