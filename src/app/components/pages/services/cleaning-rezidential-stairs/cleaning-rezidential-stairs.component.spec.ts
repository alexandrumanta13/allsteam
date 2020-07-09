import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningRezidentialStairsComponent } from './cleaning-rezidential-stairs.component';

describe('CleaningRezidentialStairsComponent', () => {
  let component: CleaningRezidentialStairsComponent;
  let fixture: ComponentFixture<CleaningRezidentialStairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningRezidentialStairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningRezidentialStairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
