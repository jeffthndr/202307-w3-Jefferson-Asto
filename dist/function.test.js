/* eslint-disable no-undef */
import { foo } from './functions.js';
describe('first', () => {
    test('should first', () => {
        const text = 'Soy foo';
        const r = foo(text);
        expect(r).toBe(text);
    });
});
