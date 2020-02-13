import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../services/api.service';
import { FilterService } from '../services/filter.service';
import { BeersService } from './beers.service';
import { Beer } from '../models/beer';

// config url for beers api
interface Config {
  beersUrl: string;
}

// parameter types for querying api
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

  beers = []; // Array to store all beers
  displayBeers = []; // Array for displaying filtered beers list
  config: Config; // URL for api requests
  filterQueryParams: FilterParams; // Parameters to make query to api

  @Input() filterLevel = 'all';

  constructor(private filterService: FilterService,
              private beersService: BeersService) { }

  public beerList: Beer[] = this.beers;

  ngOnInit() {
    this.getBeers();
  }

  getBeers() { // Get all beers from api
  this.beersService.getBeers()
   .then(res => res.subscribe(data => {this.displayBeers = data; }) );
  }

  onSearch(selectedFilterLevel: string) { // Filter beers by string query from search bar
    this.beersService.searchBeers(selectedFilterLevel).then(res => res.subscribe(data => this.displayBeers = data) );
  }

  onFilterQueryParamChange(paramsObject: FilterParams) { // Handle new query parameter event
    this.filterQueryParams = paramsObject;
    this.filterBeersByParams();
  }

  onSelectedFilterChange(selectedFilterLevel: string) {
    this.filterLevel = selectedFilterLevel;
  }

  queryString() { // Return a string of concatenated query parameters for http get request

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

    return queryString;
  }

  filterBeersByParams() { // Filter beers according to query params from filter section
    this.beersService.filterBeers(this.queryString()).then(res => res.subscribe(data => this.displayBeers = data));
  }

}
