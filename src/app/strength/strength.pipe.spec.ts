import { StrengthPipe } from './strength.pipe';

describe('Strength pipe', () => {
    it('should display weak if strength is less than 3.5', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform(3.5);

        expect(val).toEqual('Weak');
    });
});

describe('Strength pipe', () => {
    it('should display medium if strength is above 3.5 but less than 6.5', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform(5);

        expect(val).toEqual('Medium');
    });
});

describe('Strength pipe', () => {
    it('should display strong if strength is above 6.5', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform(7);

        expect(val).toEqual('Strong');
    });
});

