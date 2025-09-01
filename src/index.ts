import { LodashFilter } from './LodashFilter.js';

const originalList = ["1101","1102","1103"];

const lodashFilter = new LodashFilter();
console.log('1101 1102 =>', JSON.stringify(lodashFilter.filter(originalList, '1101 1102')));
console.log('110 =>', JSON.stringify(lodashFilter.filter(originalList, '110')));
console.log('110 1103 =>', JSON.stringify(lodashFilter.filter(originalList, '110 1103')));
