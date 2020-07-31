export class NumbersCollection {
  constructor(public data: number[]) {}

  // collection.length .. using get allows length to be used as a property, not a method
  get length(): number {
    return this.data.length;
  }

  // check if the left index is greater than the index directly after it
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // assign the value of the left index to value directly after it
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
