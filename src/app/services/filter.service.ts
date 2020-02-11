import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private min: number, private max: number) {}

  filterFn = (min = this.min, max = this.max) => {

    return (value) => {
        console.log('minVal: ', min)
        console.log('maxVal: ', max);
        console.log('value: ', value);
        if (value > min && value <= max) {
            return true;
        }
    };
}

}
