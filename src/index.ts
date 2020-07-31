import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 11, 0, 200]);
const charactersCollection = new CharactersCollection('XaAgseaFfFggyBkJ');

const sorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);

sorter.sort();
charSorter.sort();

console.log('numbersCollection.data', numbersCollection.data);
console.log('charactersCollection.data', charactersCollection.data);
