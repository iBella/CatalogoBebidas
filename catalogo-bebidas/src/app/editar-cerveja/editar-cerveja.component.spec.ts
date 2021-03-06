import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCervejaComponent } from './editar-cerveja.component';

describe('EditarCervejaComponent', () => {
  let component: EditarCervejaComponent;
  let fixture: ComponentFixture<EditarCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
