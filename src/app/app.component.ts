import { Component } from '@angular/core';
import beers from './_files/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World of Beer Craft';
  public beerList: {
    name: string,
    city: string,
    county: string,
    abv: number,
    ibu: number,
    style: string,
    description: string
  }[] = beers;
}
