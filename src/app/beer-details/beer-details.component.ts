import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../models/beer';
import { BeersService } from '../beers/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  @Input() beer: Beer;
  constructor(private route: ActivatedRoute,
              private beerService: BeersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('PARAMS: ', params.get('name'));
    });
  }

}
