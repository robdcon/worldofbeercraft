import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() beer: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
