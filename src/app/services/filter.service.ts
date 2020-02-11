import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  filterFn = (min, max) => {

    return (value) => {
      
        if (value >= min && value <= max) {
            return true;
        }
        return false;
    };
}

}
