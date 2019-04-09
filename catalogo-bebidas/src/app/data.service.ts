import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "https://localhost:5001/api/";


  constructor(private httpClient: HttpClient) { }

  get_cervejas() {
    return this.httpClient.get(this.baseUrl + '/bebidas/cervejas');
  }

  post_cervejas(cerveja){
    return this.httpClient.post(this.baseUrl + 'bebidas/cadastrar', cerveja).pipe();
  }
}
