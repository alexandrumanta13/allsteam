import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  height: number;

  constructor() { }

  ngOnInit(): void {

    const slider = (<HTMLElement>(document.querySelector('.home-slider-item')));
    const mainNav = (<HTMLElement>(document.querySelector('.main-nav')));
    const headerSeaction = (<HTMLElement>(document.querySelector('.header-section')));
   
    this.height =  mainNav.offsetHeight + headerSeaction.offsetHeight;
    console.log(window.innerHeight - this.height);
    slider.style.height = window.innerHeight - this.height + 'px';
  }

}
