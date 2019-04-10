import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pipe } from "@angular/core/src/render3";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl: string = "https://localhost:5001/api/";
  urlTest: string = "http://localhost:3000/cervejas";

  constructor(private httpClient: HttpClient) {}

  get_cervejas() {
    return this.httpClient.get(this.baseUrl + "bebidas/cervejas");
    //return this.httpClient.get(this.urlTest);
  }

  get_cachacas() {
    return this.httpClient.get(this.baseUrl + "bebidas/cachacas");
  }

  post_bebida(info) {
    return this.httpClient
      .post(this.baseUrl + "bebidas/cadastrar", info)
      .pipe();
  }

  get_bebidasById(id) {
    console.log('====>', id);
    return this.httpClient.get(this.baseUrl + "bebidas/" + id).pipe();
  }

  put_bebidas (bebida){
    return this.httpClient.put(this.baseUrl + "bebidas/editar/" + bebida.id, bebida).pipe();

  }
}
