import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLaboratoireComponent } from './client-laboratoire.component';

describe('ClientLaboratoireComponent', () => {
  let component: ClientLaboratoireComponent;
  let fixture: ComponentFixture<ClientLaboratoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLaboratoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
