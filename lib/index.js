// Stack(LIFO) - Stack is a data structure used to store items in a particular order where 
//         the last item added is the forst item removed.
//          This principle is called LIFO (Last in, First Out)


class Stack {
  constructor() { this.items = []; }
  push(el) { this.items.push(el); }
  pop() { return this.items.pop(); }
}

const history = new Stack();
history.push("Page 1");
history.push("Page 2");
console.log(history.pop());


//Queue(FIFO: First-in, First-out)  - is a linear data structure where:
//        elemntdeare sdded at the rear (end).
//       element are removed fro, thr front (beginning)

class Queue {
  constructor() { this.items = []; }
  enqueue(el) { this.items.push(el); }
  dequeue() { return this.items.shift(); }
}

const printer = new Queue();
printer.enqueue("Doc_A");
printer.enqueue("Doc_B");
console.log(printer.dequeue());
