import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  query: string;

  @Output() searchBarQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onSearch() { // Emits the query string from the search bar input to be matched against beer list items
    this.searchBarQuery.emit(this.query);
  }

  ngOnInit(): void {
  }

}
