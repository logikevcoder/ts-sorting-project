"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        // collection.length .. using get allows length to be used as a property, not a method
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // check if the left index is greater than the index directly after it
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    // assign the value of the left index to value directly after it
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
