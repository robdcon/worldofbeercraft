import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Beer } from '../models/beer';

interface Config {
  beersUrl: string;
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  providers: [ApiService]
})
export class BeersComponent implements OnInit {

  beers = [];
  config: Config;
  constructor(private apiService: ApiService) { }
  public beerList: Beer[] = this.beers;

  ngOnInit(): void {
    this.getConfig();
  }

  async getConfig() {
    // tslint:disable-next-line: no-unused-expression
    this.apiService.getConfig().subscribe((data: Config) => {this.config  = data; } );
  }

  getBeers() {
      this.beers = this.apiService.getData(this.config.beersUrl).subscribe((data: Beer[]) => {this.beers  = data; } );
  }

}
