import { describe, it, expect } from 'vitest';
import { LodashFilter } from '../src/LodashFilter.js';

describe('LodashFilter', () => {
  const items = ["1101","1102","1103"];
  const filter = new LodashFilter();

  it('filters with "1101 1102" -> [1101,1102]', () => {
    const result = filter.filter(items, '1101 1102');
    expect(result).toEqual(["1101","1102"]);
  });

  it('filters with "110" -> all three', () => {
    const result = filter.filter(items, '110');
    expect(result).toEqual(["1101","1102","1103"]);
  });

  it('filters with "110 1103" -> [1103]', () => {
    const result = filter.filter(items, '110 1103');
    expect(result).toEqual(["1103"]);
  });

  it('empty query -> empty result', () => {
    const result = filter.filter(items, '');
    expect(result).toEqual([]);
  });
});
