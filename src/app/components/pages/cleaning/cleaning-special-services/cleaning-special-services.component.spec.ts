import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningSpecialServicesComponent } from './cleaning-special-services.component';

describe('CleaningSpecialServicesComponent', () => {
  let component: CleaningSpecialServicesComponent;
  let fixture: ComponentFixture<CleaningSpecialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningSpecialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningSpecialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
