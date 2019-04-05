import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "http://localhost:3000";



  constructor(private httpClient: HttpClient) { }

  get_pictures() {
    return this.httpClient.get(this.baseUrl + '/pictures');
  }
}
