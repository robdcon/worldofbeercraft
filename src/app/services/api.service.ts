import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: 'http://localhost:3000/beers';
  constructor(private httpClient: HttpClient) { }

  public createBeer(beer: Beer) {}

  public updateBeer(beer: Beer) {}

  public deleteBeer(id: number) {}

  public getBeerById(id: number) {}

  public getBeers(url?: string) {}
}
