import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: string;
  constructor() { }

  setLevel(level) {
    this.value = level;
    console.log(this.value);
  }

  ngOnInit(): void {
  }

}
