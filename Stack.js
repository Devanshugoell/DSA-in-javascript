class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;

    var removedNode = this.first;
    this.first = this.first.next;
    --this.length;

    if (this.length === 0) this.last = null;

    return removedNode.val;
  }
}
