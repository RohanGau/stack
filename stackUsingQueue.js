/*Javascript Program to implement a stack using
two queue push heavy operation */

// Two inbuilt queues
class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {

        // Push x first in isEmpty q2
        this.q2.push(x);
        // Push all the remaining
        // elements in q1 to q2.
        while (this.q1.length != 0) {
            this.q2.push(this.q1[0]);
            this.q1.shift();

        }

        // swap the names of two queues
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
    }

    pop() {
        // if no elements are there in q1
        if (this.q1.length == 0)
            return;
        
        const element = this.q1[0];
        this.q1.shift();
        return element;
    }
    
    print() {
        for(let i = 0; i < this.q1.length; i++) {
            console.log("element --> ", this.q1[i]);
        }
    }

    top() {
        if (this.q1.length == 0)
            return -1;
        return this.q1[0];
    }

    size() {
        console.log(this.q1.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q1.length == 0;
    }

    front() {
        return this.q1[0];
    }
}

/*Javascript Program to implement a stack using
two queue pop heavy operation */

// Two inbuilt queues
class Stack2 {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
       if(this.q1.length === 0) {
           return;
       }
       // Leave one element in q1 and push other in q2
       while(this.q1.length !== 1) {
           this.q2.push(this.q1[0]);
           this.q1.shift();
       }
       const element = this.q1.shift();
       this.q = this.q1;
       this.q1 = this.q2;
       this.q2 = this.q;
       return element;
    }
    
    print() {
        for(let i = this.q1.length - 1; i >= 0; i--) {
            console.log("element --> ", this.q1[i]);
        }
    }

    top() {
        if(this.q1.length === 0) {
            return -1;
        }
        
        while(this.q1.length !== 1) {
            this.q2.push(this.q1[0]);
            this.q1.shift();
        }
        
        const element = this.q1.shift();
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
        return element;
    }

    size() {
        console.log(this.q1.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q1.length == 0;
    }

    front() {
        return this.q1[0];
    }
}

/*Javascript Program to implement a stack using
only one queue */

// One inbuilt queue
class Stack {
    constructor() {
        this.q = [];
    }
    
    // Push operation
    push(data) {
        
        //  Get previous size of queue
        let s = this.q.length;
        
        // Push the current element
        this.q.push(data);
        
        // Pop all the previous elements and put them after
        // current element
        for (let i = 0; i < s; i++) {
            console.log("before :", this.q);
            // Add the front element again
            this.q.push(this.q[0]);
            
            // Delete front element
            this.q.shift();
            
            console.log("after :", this.q);
        }
    }
    
    // Removes the top element
    pop() {
        // if no elements are there in q1
        if (this.q.length == 0)
            console.log("No elements");
        else
            return this.q.shift();
    }

    top() {
        if (this.q.length == 0)
            return -1;
        return this.q[0];
    }

    size() {
        console.log(this.q.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q.length == 0;
    }

    front() {
        return this.q[0];
    }
    
    print() {
        for(let i = 0; i < this.q.length; i++) {
            console.log("element --> ", this.q[i]);
        }
        
    }
}


// Driver code


let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);

console.log("current size: ");
s.size();
const element = s.pop();
console.log("pop element :", element);
s.print();
// s
// console.log(s.top());
// s.pop();
// console.log(s.top());
// s.pop();
// console.log(s.top());

// console.log("current size: ");
