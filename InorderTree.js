class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  DFSInOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      if (!node) return;
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const newTree = new BST();
newTree.insert(50);
newTree.insert(30);
newTree.insert(70);
newTree.insert(20);
newTree.insert(40);
newTree.insert(60);
newTree.insert(80);

console.log(newTree); // Output: [ 20, 30, 40, 50, 60, 70, 80 ]
console.log(newTree.DFSInOrder()); // Output: [ 20, 30, 40, 50, 60, 70, 80 ]
