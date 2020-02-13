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

  @Output() filterQueryParamString: EventEmitter<object> = new EventEmitter<object>();


  constructor() { }

  onFilterParamChange(event) {
    this.filterQueryParamString.emit(this.filterQueryParams);
  }

  ngOnInit(): void {
  }

}
