import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEscolhaComponent } from './cadastro-escolha.component';

describe('CadastroEscolhaComponent', () => {
  let component: CadastroEscolhaComponent;
  let fixture: ComponentFixture<CadastroEscolhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEscolhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
