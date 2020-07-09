import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningAfterConstructorComponent } from './cleaning-after-constructor.component';

describe('CleaningAfterConstructorComponent', () => {
  let component: CleaningAfterConstructorComponent;
  let fixture: ComponentFixture<CleaningAfterConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningAfterConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningAfterConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
