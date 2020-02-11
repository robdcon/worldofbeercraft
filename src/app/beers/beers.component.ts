import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Beer } from '../models/beer';

interface Config {
  beersUrl: string;
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  providers: [ApiService]
})
export class BeersComponent implements OnInit {

  beers = [];
  displayBeers = [];
  config: Config;
  constructor(private apiService: ApiService) { }
  public beerList: Beer[] = this.beers;

  ngOnInit() {
    this.getBeers();
  }

  // Promise allows other methods to execute only once config has been set
  getConfig() {
    return new Promise((resolve) => {
      this.apiService.getConfig().subscribe((data: Config) => {
        this.config  = data;
        resolve('done');
      } );
    });
  }

  // Wait fro config url to be set and call the apiService with the appropriate url
  async getBeers() {
    console.log('Loading beers...');
    const waiting = await this.getConfig();
    console.log('Berr list is set');
    this.apiService.getData(this.config.beersUrl).subscribe((data: Beer[]) => {this.beers  = data; } );
  }

  // Return true if beer matches condition
  checkBeerLevel(beer, level) {
    switch (level) {
     case 'low':
      return (beer.abv <= 3.5);
    case 'med':
      return (beer.abv > 3.5 && beer.abv <= 6.5);
    case 'strong':
      return (beer.abv > 6.5);
    }
  }

  // Filter beers using checkBeer as a constraint
  filterBeers(level = 'low') {
    this.beers = this.beers.filter((beer) => this.checkBeerLevel(beer, level) );
    console.log(this.displayBeers);
  }


}
