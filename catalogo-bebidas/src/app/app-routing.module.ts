import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogoCachacaComponent } from "./catalogo-cachaca/catalogo-cachaca.component";
import { CatalogoCervejaComponent } from "./catalogo-cerveja/catalogo-cerveja.component";
import { CadastroEscolhaComponent } from "./cadastro-escolha/cadastro-escolha.component";
import { CadastroCervejaComponent } from "./cadastro-cerveja/cadastro-cerveja.component";
import { CadastroCachacaComponent } from "./cadastro-cachaca/cadastro-cachaca.component";
import { EditarCervejaComponent } from "./editar-cerveja/editar-cerveja.component";
import { EditarCachacaComponent } from "./editar-cachaca/editar-cachaca.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "catalogo-cerveja",
    pathMatch: "full"
  },

  {
    path: "catalogo-cachaca",
    component: CatalogoCachacaComponent,
    data: {
      title: "Catalogo de Cachaças"
    }
  },
  {
    path: "catalogo-cerveja",
    component: CatalogoCervejaComponent,
    data: {
      title: "Catalogo de Cervejas"
    }
  },
  {
    path: "adicionar",
    component: CadastroEscolhaComponent,
    data: {
      title: "Adicionar"
    }
  },
  {
    path: "adicionar/cerveja",
    component: CadastroCervejaComponent,
    data: {
      title: "Adicionar Cerveja"
    }
  },
  {
    path: "adicionar/cachaca",
    component: CadastroCachacaComponent,
    data: {
      title: "Adicionar Cachaça"
    }
  },
  {
    path: "editar/cerveja/:id",
    component: EditarCervejaComponent,
    data: {
      title: "Editar Cerveja"
    }
  },
  {
    path: "editar/cachaca/:id",
    component: EditarCachacaComponent,
    data: {
      title: "Editar Cerveja"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
