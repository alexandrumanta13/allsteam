import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizationAndDesinfectionComponent } from './sanitization-and-desinfection.component';

describe('SanitizationAndDesinfectionComponent', () => {
  let component: SanitizationAndDesinfectionComponent;
  let fixture: ComponentFixture<SanitizationAndDesinfectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizationAndDesinfectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizationAndDesinfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
