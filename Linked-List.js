class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let removedNode = this.head;
    let prev = removedNode;

    while (removedNode.next) {
      prev = removedNode;
      removedNode = removedNode.next;
    }

    if (this.length === 1) {
      // If only 1 node exists
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prev;
      prev.next = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;
    var removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return removedNode;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count = 0;

    var current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(val, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    //Insert in the middle
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    if (!prev) return undefined;
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var prevIndex = this.get(index - 1);
    var removedNode = prevIndex.next;
    prevIndex.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  deleteDuplicates() {
    var currentHead = this.head;

    while (currentHead && currentHead.next) {
      if (currentHead.val === currentHead.next.val) {
        currentHead.next = currentHead.next.next;
      } else {
        currentHead = currentHead.next;
      }
    }
    return this.head;
  }

  getDecimalValue() {
    var currentHead = this.head;

    let val = 0,
      count = 0;

    let result = [];

    while (currentHead) {
      result.push(currentHead.val);
      currentHead = currentHead.next;
    }

    for (let i = result.length - 1; i >= 0; i--) {
      val += result[i] * Math.pow(2, count);
      count++;
    }

    return val;
  }

  getDecimalValue() {
    let val = 0;
    let current = this.head;
    while (current) {
      val = val * 2 + current.val;
      current = current.next;
    }
    return val;
  }
}

const ll = new LinkedList();
ll.push(1);
ll.push(0);
ll.push(1);
ll.push(0);
ll.push(0);
ll.push(1);
ll.push(0);
ll.push(1);
ll.push(0);

//101001010

console.log(ll.getDecimalValue());
