import { BinarySearchTree } from './BinarySearchTree.mjs';

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.breadthFirstSearch();

tree.depthFirstSearchPreOrder();
