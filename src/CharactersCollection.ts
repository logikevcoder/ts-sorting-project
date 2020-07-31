export class CharactersCollection {
  constructor(public data: string) {}

  // collection.length .. using get allows length to be used as a property, not a method
  get length(): number {
    return this.data.length;
  }

  // check if the left index is greater than the index directly after it
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  // assign the value of the left index to value directly after it
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
