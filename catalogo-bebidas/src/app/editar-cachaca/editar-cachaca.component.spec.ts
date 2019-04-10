import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCachacaComponent } from './editar-cachaca.component';

describe('EditarCachacaComponent', () => {
  let component: EditarCachacaComponent;
  let fixture: ComponentFixture<EditarCachacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCachacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCachacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
