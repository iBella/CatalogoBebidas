import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCervejaComponent } from './catalogo-cerveja.component';

describe('CatalogoCervejaComponent', () => {
  let component: CatalogoCervejaComponent;
  let fixture: ComponentFixture<CatalogoCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
