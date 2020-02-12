import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../models/beer';
import { ApiService } from '../services/api.service';
import { BeersService } from '../beers/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  beer: object;

  constructor(private route: ActivatedRoute,
              private beerService: BeersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // console.log('PARAMS: ', params.get('name'));
      console.log('Beer: ', this.beerService.getBeer(params.get('name')));
      this.beerService.getBeer(params.get('name')).then(res => res.subscribe(data => {
        console.log(data);
        this.beer = data[0];
      }));
      });
  }

}
