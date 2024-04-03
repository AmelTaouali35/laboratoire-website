import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableDataComponent } from './responsable-data.component';

describe('ResponsableDataComponent', () => {
  let component: ResponsableDataComponent;
  let fixture: ComponentFixture<ResponsableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
