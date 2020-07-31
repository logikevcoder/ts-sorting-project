import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(23);
linkedList.add(2424);

const numbersCollection = new NumbersCollection([10, 3, -5, 11, 0, 200]);
const charactersCollection = new CharactersCollection('XaAgseaFfFggyBkJ');

const linkedListSorter = new Sorter(linkedList);
const sorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);

linkedListSorter.sort();
linkedList.print();
sorter.sort();
charSorter.sort();

console.log('numbersCollection.data', numbersCollection.data);
console.log('charactersCollection.data', charactersCollection.data);
