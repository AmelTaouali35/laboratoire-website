import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoireproduitsComponent } from './laboratoireproduits.component';

describe('LaboratoireproduitsComponent', () => {
  let component: LaboratoireproduitsComponent;
  let fixture: ComponentFixture<LaboratoireproduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoireproduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoireproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
