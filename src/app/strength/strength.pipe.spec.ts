import { StrengthPipe } from './strength.pipe';

describe('Strength pipe', () => {
    it('should display correct range object', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform('low');

        expect(val).toEqual({min: 0, max: 3.5});
    });
});

describe('Strength pipe', () => {
    it('should display correct med range object', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform('med');

        expect(val).toEqual( {min: 3.5, max: 6.5});
    });
});

describe('Strength pipe', () => {
    it('should display correct object if all selected', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform('all');

        expect(val).toEqual({min: 0, max: 100});
    });
});

