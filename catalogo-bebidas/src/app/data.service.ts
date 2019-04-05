import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "https://localhost:5001/api/";



  constructor(private httpClient: HttpClient) { }

  get_cervejas() {
    return this.httpClient.get(this.baseUrl + '/bebidas/cervejas');
  }
}
