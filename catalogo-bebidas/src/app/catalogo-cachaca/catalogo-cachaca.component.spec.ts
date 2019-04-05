import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCachacaComponent } from './catalogo-cachaca.component';

describe('CatalogoCachacaComponent', () => {
  let component: CatalogoCachacaComponent;
  let fixture: ComponentFixture<CatalogoCachacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCachacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCachacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
