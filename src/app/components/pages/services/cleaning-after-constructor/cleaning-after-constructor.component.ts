import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaning-after-constructor',
  templateUrl: './cleaning-after-constructor.component.html',
  styleUrls: ['./cleaning-after-constructor.component.scss']
})
export class CleaningAfterConstructorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
