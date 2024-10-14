import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfilLaboratoireComponent } from './prfil-laboratoire.component';

describe('PrfilLaboratoireComponent', () => {
  let component: PrfilLaboratoireComponent;
  let fixture: ComponentFixture<PrfilLaboratoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrfilLaboratoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfilLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
