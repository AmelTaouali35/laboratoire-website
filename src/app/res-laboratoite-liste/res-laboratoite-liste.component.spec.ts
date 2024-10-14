import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResLaboratoiteListeComponent } from './res-laboratoite-liste.component';

describe('ResLaboratoiteListeComponent', () => {
  let component: ResLaboratoiteListeComponent;
  let fixture: ComponentFixture<ResLaboratoiteListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResLaboratoiteListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResLaboratoiteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
