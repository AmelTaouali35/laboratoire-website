import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaboratoireresComponent } from "./laboratoireres.component";

describe("LaboratoireresComponent", () => {
  let component: LaboratoireresComponent;
  let fixture: ComponentFixture<LaboratoireresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratoireresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoireresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
