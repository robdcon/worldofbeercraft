import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl: 'http://localhost:3000';
  configUrl = './assets/urlconfig.json';

  constructor(private httpClient: HttpClient) { }

  getConfig() {
    this.httpClient.get(this.configUrl).subscribe(data => {console.log('data: ', data); } );
    return this.httpClient.get(this.configUrl);
  }

  public getBeers(url?: string) {
    return this.httpClient.get<Beer[]>(url);
  }

}
