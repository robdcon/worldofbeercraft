import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  filterQueryParams = {
    abv: {
      min: 0,
      max: 100,
    },
   ibu: {
     min: 0,
     max: 100
   }
  };

  @Output() filterQueryParamObject: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  onFilterParamChange(event) { // Emit an object containing parameters to craete a query string for http request in beers component
    this.filterQueryParamObject.emit(this.filterQueryParams);
  }

  ngOnInit(): void {
  }

}
