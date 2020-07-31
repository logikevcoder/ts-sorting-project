import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 11, 0, 200]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log('numbersCollection.data', numbersCollection.data);
