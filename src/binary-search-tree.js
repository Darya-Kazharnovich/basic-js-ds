const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(data) {
    this.origin = addData(this.origin, data); // заполним значением из функции
    function addData(node, data) { 
      if (!node) { // если нет узла
        return new Node(data); // создаем
      }
      if (node.data === data) { // если такое значение уже есть
        return node; // не изменяем
      }
      if (data < node.data) { // если значение ниже, чем такущий узел
        node.left = addData(node.left, data); // добавляем влево
      } else {
        node.right = addData(node.right, data); // если выше, чем текущий, то вправо
      }
      return node; 
    }
  }

  has(data) {
    return hasData(this.origin, data) // возвратим true или false
    function hasData(node, data) { 
      if (!node) { // если нету, то false
        return false;
      }
      if (node.data === data) { // если есть, то true
        return true;
      }
      if (data < node.data) { 
        return hasData(node.left, data); // если data < текущей, ищем слева
    } else {
        return hasData(node.right, data); // если data > текущей, ищем справа
    }      
  }
}

  find(data) {
    return findData(this.origin, data); // как та, что выше, только возвращаем null или значение
    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findData(node.left, data);
    } else {
        return findData(node.right, data);
    }  
    }
  }

  remove(data) {
    this.origin = removeData(this.origin, data) // заполним значением из функции
    function removeData(node, data) {
      if (!node) { // если нет узла
        return null; // возвратим ноль
      }
      if (data < node.data) { // если данные меньше данных узла
        node.left = removeData(node.left, data) // левое значение
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data) 
        return node;
      } else {
        if (!node.left && !node.right) { // если по сторонам ничего нет 
          return null
        }
        if (!node.left) { // если нет левого
          return node = node.right
        }
        if (!node.right) { // если нет правого
          return node = node.left
        }
        let max = node.left;
        while (max.right) {
          max = max.right;
        }
        node.data = max.data;
        node.left = removeData(node.left, max.data);
        return node;
      }
    }
  }

  min() {
    let node = this.origin;
    if (!node) { // если нет узла, то null
      return null;
    }
    while (node.left) { // минимальные значения находится максимально слева
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.origin;
    if (!node) {
      return null;
    }
    while (node.right) { // максимальные значения находится максимально справа
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};