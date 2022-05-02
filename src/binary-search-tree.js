const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root
  }

  add(data) {
    this.root = addElement(this.root, data);
    function addElement(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchElement(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data
        ? searchElement(node.left, data)
        : searchElement(node.right, data);
    }
    return searchElement(this._root, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
  }

  max() {
  }
}

module.exports = {
  BinarySearchTree
};