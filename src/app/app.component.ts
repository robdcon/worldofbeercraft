import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Beer } from './models/beer';

interface Config {
  beersUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})

export class AppComponent {

  title = 'World of Beer Craft';
  beers = [];
  config: Config;
  constructor(private apiService: ApiService) {}
  public beerList: Beer[] = this.beers;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    // tslint:disable-next-line: no-unused-expression
    this.apiService.getConfig().subscribe((data: Config) => {this.config  = data; } );
  }

  getBeers() {
      this.apiService.getBeers(this.config.beersUrl).subscribe(beerdata => {this.beers = beerdata; console.log('Beers: ', this.beers); } );
     
  }
}


