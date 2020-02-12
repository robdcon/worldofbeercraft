import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Config } from 'protractor';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  config: Config;
  constructor(private apiService: ApiService) { }

  getConfig() {
    return new Promise((resolve) => {
      this.apiService.getConfig().subscribe((data: Config) => {
        this.config = data;
        resolve('done');
      } );
    });
  }

  async getBeers() {
    await this.getConfig();
    return this.apiService.getData(this.config.beersUrl);
  }

  async getBeer(beerName) {
    await this.getConfig();
    console.log('getBeer: ', this.apiService.getData(`${this.config.beersUrl}?name=${beerName}`));
    return this.apiService.getData(`${this.config.beersUrl}?name=${beerName}`);
  }
}
