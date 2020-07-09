import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningSofaComponent } from './cleaning-sofa.component';

describe('CleaningSofaComponent', () => {
  let component: CleaningSofaComponent;
  let fixture: ComponentFixture<CleaningSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
