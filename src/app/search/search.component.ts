import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  filterLevel = 'all';

  @Output() selectedFilterLevel: EventEmitter<string> = new EventEmitter<string>();

  @Input() low: string;
  @Input() med: string;
  @Input() high: string;

  constructor() { }

  onSelectedFilterChange() {
    this.selectedFilterLevel.emit(this.filterLevel);
    console.log(this.filterLevel);
  }

  ngOnInit(): void {
  }

}
