
// ======================= stack data structure ==============
class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}

const stack = new Stack()

stack.push(12)
stack.push(45)
stack.push(23)
stack.push(10)
console.log('====================================');
console.log(stack.isEmpty());
console.log(stack.print());
stack.pop();
console.log(stack.peek());
console.log(stack.print());
console.log('====================================');






