import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-abv-filter',
  templateUrl: './abv-filter.component.html',
  styleUrls: ['./abv-filter.component.scss']
})

export class AbvFilterComponent implements OnInit {

  filterLevel = 'all';

  @Output() selectedFilterLevel: EventEmitter<string> = new EventEmitter<string>();

  @Input() low: string;
  @Input() med: string;
  @Input() high: string;

  constructor() { }

  onSelectedFilterChange() {
    this.selectedFilterLevel.emit(this.filterLevel);
    console.log('FILTER LEVEL: ', this.filterLevel);
  }

  ngOnInit(): void {
  }

}
