import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { HeaderComponent } from './header/header.component';
import { CatalogoCervejaComponent } from './catalogo-cerveja/catalogo-cerveja.component';
import { CatalogoCachacaComponent } from './catalogo-cachaca/catalogo-cachaca.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    HeaderComponent,
    CatalogoCervejaComponent,
    CatalogoCachacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
