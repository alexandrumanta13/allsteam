import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningFloorComponent } from './cleaning-floor.component';

describe('CleaningFloorComponent', () => {
  let component: CleaningFloorComponent;
  let fixture: ComponentFixture<CleaningFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
