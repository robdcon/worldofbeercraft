import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../services/api.service';
import { FilterService } from '../services/filter.service';
import { BeersService } from './beers.service';
import { Beer } from '../models/beer';


interface Config {
  beersUrl: string;
}

interface FilterParams {
  abv: {
    min: number,
    max: number
  };
  ibu: {
    min: number;
    max: number;
  };
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  providers: [ApiService, FilterService, BeersService]
})

export class BeersComponent implements OnInit {

  beers = [];
  displayBeers = [];
  config: Config;
  filterQueryParams: FilterParams;

  @Input() filterLevel = 'all';

  constructor(private filterService: FilterService,
              private beersService: BeersService) { }

  public beerList: Beer[] = this.beers;

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
  this.beersService.getBeers()
   .then(res => res.subscribe(data => {this.displayBeers = data; this.beers = data; }) );
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
    const levelCheck = this.filterService.filterFn(min, max);
    this.displayBeers = this.beers.filter((beer) => levelCheck(beer.abv));
    console.log(this.displayBeers);
  }

  onSelectedFilterChange(selectedFilterLevel: string) {
    this.filterLevel = selectedFilterLevel;
    console.log('EVENT: ', this.filterLevel);
    this.filterBeers();
  }

  onSearch(selectedFilterLevel: string) {
    this.beersService.searchBeers(selectedFilterLevel).then(res => res.subscribe(data => this.displayBeers = data) );
  }

  onFilterChange(paramsObject: FilterParams) {
    this.filterQueryParams = paramsObject;
    this.filterBeersByParams();
  }

  queryString() {

    const { abv, ibu } = this.filterQueryParams;
    let queryString = '?';

    const abvParams = `&${ (abv.min) ? `abv_gte=${abv.min}` : '' } ${ (abv.max) ? `&abv_lte=${abv.max}` : '' }`;
    const ibuParams = `&${ (ibu.min) ? `ibu_gte=${ibu.min}` : '' } ${ (ibu.max) ? `&ibu_lte=${ibu.max}` : '' }`;
    // ABV
    if (abvParams) {
      queryString += abvParams;
    }
    // IBU
    if (ibuParams) {
      queryString += ibuParams;
    }

    console.log('query string:', queryString);
    return queryString;
  }

  filterBeersByParams() {
    this.beersService.filterBeers(this.queryString()).then(res => res.subscribe(data => this.displayBeers = data));
  }

}
