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
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    var prevNode = this.get(index - 1);
    var newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

// Test Cases
const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);
linkedList.push(10);
linkedList.reverse();
console.log(linkedList);
