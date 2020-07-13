import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningHorecaServicesComponent } from './cleaning-horeca-services.component';

describe('CleaningHorecaServicesComponent', () => {
  let component: CleaningHorecaServicesComponent;
  let fixture: ComponentFixture<CleaningHorecaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningHorecaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningHorecaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
