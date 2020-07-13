import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningHorecaComponent } from './cleaning-horeca.component';

describe('CleaningHorecaComponent', () => {
  let component: CleaningHorecaComponent;
  let fixture: ComponentFixture<CleaningHorecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningHorecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningHorecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
