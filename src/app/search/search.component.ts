import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  filterLevel = 'all';
  query: string;

  @Output() selectedFilterLevel: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchBarQuery: EventEmitter<string> = new EventEmitter<string>();

  @Input() low: string;
  @Input() med: string;
  @Input() high: string;

  constructor() { }

  onSelectedFilterChange() {
    this.selectedFilterLevel.emit(this.filterLevel);
    console.log('FILTER LEVEL: ', this.filterLevel);
  }

  onSearch(e) {
    console.log( e);
    this.searchBarQuery.emit(this.query);
  }

  ngOnInit(): void {
  }

}
