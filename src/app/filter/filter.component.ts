import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  abv: number;

  @Output() filterQueryParams = {
    abv: '',
    ibu: ''
  };

 // @Output() filterQueryParamString = `?'abv=${this.filterQueryParams.abv}&ibu=${this.filterQueryParams.ibu}`;


  constructor() { }

  onFilterParamChange(event) {
    console.log(this.filterQueryParams);
  }

  ngOnInit(): void {
  }

}
