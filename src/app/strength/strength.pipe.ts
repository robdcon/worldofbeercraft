import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({
    name: 'strength'
})

export class StrengthPipe implements PipeTransform {

    transform(strength: number): string {
        if (strength <= 3.5) {
            return 'Weak';
        } else if (strength <= 6.5) {
            return 'Medium';
        } else {
            return 'Strong';
        }
    }
}
