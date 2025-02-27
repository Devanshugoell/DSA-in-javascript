class MaxBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.value.push(val);
    if (this.value.length > 1) this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];

      if (element <= parent) break;

      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(29);
console.log(heap.value); // Heap after insertions

console.log(heap.extractMax()); // Removes and returns max (55)
console.log(heap.value); // Heap after extracting max
