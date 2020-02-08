import { StrengthPipe } from './strength.pipe';

describe('Strength pipe', () => {
    it('should display weak if strength is less than 4', () => {

        const pipe = new StrengthPipe();

        const val = pipe.transform(5);

        expect(val).toEqual('5 (weak)');
    })
})