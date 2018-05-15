// data structure: stack
// array methods
// ES6 class

class Stack {
    constructor(array) {
        this.array = array;
    }
    isEmpty() {
        console.log(this.array.length === 0);
    }
    push(...element) {
        this.array.push(...element);
    }
    pop() {
        console.log(this.array.pop());
    }
    clear() {
        this.array = [];
    }
    print() {
        console.log(this.array.toString());
    }

}

let array = [];
let stack = new Stack(array);
stack.isEmpty();
stack.push(2, 3, 6);
stack.print();
stack.pop();
stack.push(10, 7, 1);
stack.print();
stack.clear();
stack.isEmpty();