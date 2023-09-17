

// ======================= queue data structure  ================ 

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue(item) {
        this.items.shift(item)
    }
    peek(){
        return this.items[0]
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        return this.items.toString()
    }
}


// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)


// console.log('====================================');
// console.log(queue.isEmpty());
// console.log(queue.print());
// console.log(queue.peek());
// console.log(queue.size());
//     queue.dequeue();
// console.log(queue.size());
// console.log(queue.peek());
// console.log('====================================');


// ===================== queue optimized for enqueue  and dequeue ====================== 

class OptimizedQueue {
        constructor(){
            this.items = {}
            this.front = 0
            this.rear = 0
        }

        enqueue(item){
            this.items[this.rear] = item
            this.rear += 1
        }
        dequeue(){
            const item = this.items[this.front];
            delete this.items[this.front]
            this.front++
            return item
        }
        size(){
            return this.rear - this.front 
        }
        isEmpty() {
            return this.rear - this.front === 0

        }
        peek(){
            return this.items[this.front]
        }
        print(){
           return this.items
        }
}

const optimizedQueue = new OptimizedQueue()
optimizedQueue.enqueue(12)
optimizedQueue.enqueue(124)
optimizedQueue.enqueue(1245)

console.log('====================================');
console.log(optimizedQueue.isEmpty());
console.log(optimizedQueue.print()); 
console.log(optimizedQueue.size()); 
console.log(optimizedQueue.peek()); 
optimizedQueue.dequeue()
console.log(optimizedQueue.peek()); 
console.log(optimizedQueue.size()); 
console.log(optimizedQueue.print()); 
console.log('====================================');