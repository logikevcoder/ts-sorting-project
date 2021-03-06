"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(23);
linkedList.add(2424);
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 11, 0, 200]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaAgseaFfFggyBkJ');
var linkedListSorter = new Sorter_1.Sorter(linkedList);
var sorter = new Sorter_1.Sorter(numbersCollection);
var charSorter = new Sorter_1.Sorter(charactersCollection);
linkedListSorter.sort();
linkedList.print();
sorter.sort();
charSorter.sort();
console.log('numbersCollection.data', numbersCollection.data);
console.log('charactersCollection.data', charactersCollection.data);
