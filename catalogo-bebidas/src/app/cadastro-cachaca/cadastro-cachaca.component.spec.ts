import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CadastroCachacaComponent } from "./cadastro-cachaca.component";

describe("CadastroCachacaComponent", () => {
  let component: CadastroCachacaComponent;
  let fixture: ComponentFixture<CadastroCachacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCachacaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCachacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
