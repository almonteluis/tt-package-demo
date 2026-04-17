import { add } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
    expect(add(1, 2)).toBe(3);
});

test('add 5', () => {
    expect(add(2, 3)).toBe(5);
});
