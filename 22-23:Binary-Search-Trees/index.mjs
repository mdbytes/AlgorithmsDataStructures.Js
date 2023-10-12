import { BinarySearchTree } from './BinarySearchTree.mjs';

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('Breadth First Search');
console.log(tree.breadthFirstSearch());

console.log('Depth First Search PreOrder');
console.log(tree.depthFirstSearchPreOrder());

console.log('Depth First Search PostOrder');
console.log(tree.depthFirstSearchPostOrder());

console.log('Depth First Search InOrder');
console.log(tree.depthFirstSearchInOrder());
