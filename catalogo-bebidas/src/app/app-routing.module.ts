import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CatalogoCachacaComponent } from './catalogo-cachaca/catalogo-cachaca.component';
import { CatalogoCervejaComponent } from './catalogo-cerveja/catalogo-cerveja.component';
import { CadastroEscolhaComponent } from './cadastro-escolha/cadastro-escolha.component';
import { CadastroCervejaComponent } from './cadastro-cerveja/cadastro-cerveja.component';
import { CadastroCachacaComponent } from './cadastro-cachaca/cadastro-cachaca.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tela-inicial',
    pathMatch: 'full',
  },
  {
    path: 'tela-inicial',
    component: TelaInicialComponent,
    data: {
      title: 'Tela Inicial'
    }
  },
  {
    path: 'catalogo-cachaca',
    component: CatalogoCachacaComponent,
    data: {
      title: 'Catalogo de Cachaças'
    }
  },
  {
    path: 'catalogo-cerveja',
    component: CatalogoCervejaComponent,
    data: {
      title: 'Catalogo de Cervejas'
    }
  },
  {
    path: 'adicionar',
    component: CadastroEscolhaComponent,
    data: {
      title: 'Adicionar'
    }
  },
  {
    path: 'adicionar/cerveja',
    component: CadastroCervejaComponent,
    data: {
      title: 'Adicionar Cerveja'
    }
  },
  {
    path: 'adicionar/cachaca',
    component: CadastroCachacaComponent,
    data: {
      title: 'Adicionar Cachaça'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
