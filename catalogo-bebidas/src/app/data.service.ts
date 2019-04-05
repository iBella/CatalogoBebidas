import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "http://localhost:3000";

  baseUrl2: string = "https://localhost:5001/api/bebidas/cervejas";


  constructor(private httpClient: HttpClient) { }

  get_pictures() {
    return this.httpClient.get(this.baseUrl + '/pictures');
  }

  get_pictures2() {
    return this.httpClient.get(this.baseUrl2);
  }
}
