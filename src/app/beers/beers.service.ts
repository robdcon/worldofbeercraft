import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  config: Config;
  constructor(private apiService: ApiService) { }

  getConfig() { // Retrieve urls from urlconfig
    return new Promise((resolve) => {
      this.apiService.getConfig().subscribe((data: Config) => {
        this.config = data;
        resolve('done');
      } );
    });
  }

  async getBeers() { // Get all beers from api
    await this.getConfig();
    return this.apiService.getData(this.config.beersUrl);
  }

  async getBeer(beerName) { // Get beer by name to display on its own full details page
    await this.getConfig();
    console.log('getBeer: ', this.apiService.getData(`${this.config.beersUrl}?name=${beerName}`));
    return this.apiService.getData(`${this.config.beersUrl}?name=${beerName}`);
  }

  async searchBeers(q) { // Search beers by query string
    await this.getConfig();
    return this.apiService.getData(`${this.config.beersUrl}?q=${q}`);
  }

  async onFilterChange(filterQuery) { // Returns new filter query
    return filterQuery;
  }

  async filterBeers(paramsString) { // Filter beers by parameter
    await this.getConfig();
    console.log('paramsstring:', `${this.config.beersUrl}${paramsString}`);
    return this.apiService.getData(`${this.config.beersUrl}${paramsString}`);
  }

}
