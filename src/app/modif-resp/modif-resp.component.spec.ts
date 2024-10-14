import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRespComponent } from './modif-resp.component';

describe('ModifRespComponent', () => {
  let component: ModifRespComponent;
  let fixture: ComponentFixture<ModifRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
