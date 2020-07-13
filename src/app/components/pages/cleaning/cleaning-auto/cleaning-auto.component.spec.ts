import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningAutoComponent } from './cleaning-auto.component';

describe('CleaningAutoComponent', () => {
  let component: CleaningAutoComponent;
  let fixture: ComponentFixture<CleaningAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
