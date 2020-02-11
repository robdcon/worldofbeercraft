import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../services/api.service';
import { FilterService } from '../services/filter.service';
//  import {StrengthPipe} from '../strength/strength.pipe';
import { Beer } from '../models/beer';

interface Config {
  beersUrl: string;
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  providers: [ApiService, FilterService]
})

export class BeersComponent implements OnInit {

  beers = [];
  displayBeers = [];
  config: Config;

  @Input() filterLevel = 'all';

  constructor(private apiService: ApiService,
              private filter: FilterService ) { }

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

  // Wait for config url to be set and call the apiService with the appropriate url
  async getBeers() {
    const waiting = await this.getConfig();
    this.apiService.getData(this.config.beersUrl).subscribe((data: Beer[]) => {this.beers  = data; this.displayBeers = data;} );
    
  }

  

  transformFilterLevel() {

    switch (this.filterLevel) {
      case('all'):
      return {min: 0, max: 100};
      case('low'):
      return {min: 0, max: 3.5};
      case('med'):
      return {min: 3.5, max: 6.5};
      case('high'):
      return {min: 6.5, max: 100};
      default:
        return {min: 0, max: 100};
    }
  }

  async filterBeers() {
    const {min, max} = this.transformFilterLevel();
    const levelCheck = this.filter.filterFn(min, max);
    this.displayBeers = this.beers.filter((beer) => levelCheck(beer.abv));
    console.log(this.displayBeers);
  }

  onSelectedFilterChange(selectedFilterLevel: string) {
    this.filterLevel = selectedFilterLevel;
    console.log('EVENT: ', this.filterLevel);
    this.filterBeers();
    // this.filterBeers();
  }
}
