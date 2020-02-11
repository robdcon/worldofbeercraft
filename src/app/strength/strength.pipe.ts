import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({
    name: 'strength'
})

export class StrengthPipe implements PipeTransform {

    transform(strength: string): object {

         if (strength === 'low') {
            return {min: 0, max: 3.5};
        } else if (strength === 'med') {
            return {min: 3.5, max: 6.5};
        } else if (strength === 'strong') {
            return {min: 6.5, max: 999};
        } else if (strength === 'all') {
            return {min: 0, max: 100};
        }
    }
}
