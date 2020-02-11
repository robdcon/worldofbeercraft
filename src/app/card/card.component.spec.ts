import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Beer } from '../models/Beer';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  
  const beer = {
    name: 'Rob\'s Brew',
    city: 'Limehouse',
    county: 'London',
    abv: 6,
    ibu: 1,
    style: 'dark',
    description: 'good'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.beer = beer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name Rob\'s Brew ', () => {
    expect(fixture.nativeElement.querySelector('h3').innerText).toEqual('Rob\'s Brew');
  });
  it('should render the city Rob\'s Brew ', () => {
    expect(fixture.nativeElement.querySelector('.city').innerText).toEqual('City: Limehouse');
  });
});
