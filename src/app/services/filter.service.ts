import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  filterFn = (min, max) => { // Util function to check if a value falls between specified parameter contraints

    return (value) => {

        if (value >= min && value <= max) {
            return true;
        }
        return false;
    };
}

}
