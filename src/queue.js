const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
		this.node = new ListNode();
	}
    
  getUnderlyingList() {
    return this.node
  }

  enqueue(value) {
    let node = this.node; // указатель на этот узел
    while (node.next) { // пока есть куда двигаться
      node = node.next; // переходим на следующий элемент (перешли к конечному)
    }
    if(node.value) { // если у конечного узла есть значение
      node.next = new ListNode(value); // создаем следующее новое значение
    }
    else { // если нет значения
      node.value = value; // конечный принимает значение
    }
  }

  dequeue() {
    const node = this.node; // текущий
    if (node.next) { // если есть следующий элемент
      this.node = this.node.next; // следующий становится такущим
    }
    else { //  если нет
      node = new ListNode(); //  новый станет текущим
    }
    return node.value; // возвратим значение удаленного узла
  }
}

module.exports = {
  Queue
};
