import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  filterFn = (min, max) => {

    return (value) => {
        console.log('minVal: ', min);
        console.log('maxVal: ', max);
        console.log('value: ', value);
        if (value > min && value <= max) {
            return true;
        }
        return false;
    };
}

}
