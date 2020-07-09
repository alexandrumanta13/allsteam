import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningAtHomeComponent } from './cleaning-at-home.component';

describe('CleaningAtHomeComponent', () => {
  let component: CleaningAtHomeComponent;
  let fixture: ComponentFixture<CleaningAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
