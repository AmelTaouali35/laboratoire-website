import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabproduitsComponent } from './labproduits.component';

describe('LabproduitsComponent', () => {
  let component: LabproduitsComponent;
  let fixture: ComponentFixture<LabproduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabproduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
