import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiflabComponent } from './modiflab.component';

describe('ModiflabComponent', () => {
  let component: ModiflabComponent;
  let fixture: ComponentFixture<ModiflabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiflabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiflabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
