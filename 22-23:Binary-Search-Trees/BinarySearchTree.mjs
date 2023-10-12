export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);

    // If root is null add node as root
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // Traverse the tree to find where node belongs
      // Begin with root
      let current = this.root;

      // Continue loop until value has been input
      while (true) {
        // Check if value to be inserted is less than current value
        if (val < current.val) {
          // Since it is lower than current value, see if you can insert it into the left position of current
          if (current.left === null) {
            // Left was null so insert the value
            current.left = newNode;

            // We are done so make current null
            return current.left;
          } else {
            // We are not done yet so make the current node to be current.left
            current = current.left;
          }

          // Check to see if the value to be inserted is greater than the current value
        }
        if (val > current.val) {
          // Value is greater than the current value so check to see if current.right is null
          if (current.right === null) {
            // Current right is null so reassign it to the new node
            current.right = newNode;

            // Set current to null because we are done
            return current.right;
          } else {
            current = current.right;
          }
        }
        if (val === current.val) {
          // found duplicate already in the BST
          return current;
        }
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    var data = []; // storing data as visited
    var queue = []; // using array as queue
    var node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  depthFirstSearchPreOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
}
