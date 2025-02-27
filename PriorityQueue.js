class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // For max-heap (higher priority means higher value)
      if (element.priority <= parent.priority) break;

      // Swap parent and element
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    this.values[0] = this.values.pop(); // Replace root with last element
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      // Swap values
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("task 1", 2);
pq.enqueue("task 2", 5);
pq.enqueue("task 3", 1);
pq.enqueue("task 4", 4);

console.log(pq.values); // Check heap structure

//console.log(pq.dequeue()); // Should return highest priority element (task 2, priority 5)
console.log(pq.values); // Check updated heap
