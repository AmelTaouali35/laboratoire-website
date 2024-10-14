import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoirelisteComponent } from './laboratoireliste.component';

describe('LaboratoirelisteComponent', () => {
  let component: LaboratoirelisteComponent;
  let fixture: ComponentFixture<LaboratoirelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoirelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoirelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
