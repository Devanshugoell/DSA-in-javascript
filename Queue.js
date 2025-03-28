class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;

    var removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;

    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }

    this.length--;
    return removedNode.val;
  }
}
