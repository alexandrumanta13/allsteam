import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiocidSectionComponent } from './biocid-section.component';

describe('BiocidSectionComponent', () => {
  let component: BiocidSectionComponent;
  let fixture: ComponentFixture<BiocidSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiocidSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiocidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
