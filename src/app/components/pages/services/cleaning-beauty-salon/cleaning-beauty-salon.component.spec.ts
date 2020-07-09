import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningBeautySalonComponent } from './cleaning-beauty-salon.component';

describe('CleaningBeautySalonComponent', () => {
  let component: CleaningBeautySalonComponent;
  let fixture: ComponentFixture<CleaningBeautySalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningBeautySalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningBeautySalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
