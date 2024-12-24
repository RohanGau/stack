class StackUsingPriorityQueue {
    constructor() {
        this.heap = []; // array to simulate the priority queue
        this.counter = 0; // counter to track the priority
    }
    
    push(value) {
        this.counter++;
        this.heap.push({value, priority: this.counter });
        this.heap.sort((a, b) => b.priority - a.priority);
    }
    
    isEmpty() {
        if(this.heap.length === 0) {
            return true;
        }
        return false;
    }
    
    pop() {
        if(this.isEmpty()) {
            console.log("stack overflow");
            return;
        }
        // console.log("heap :", this.heap);
        return this.heap.shift().value;
        // const item = this.heap.pop();
        // return item.value; 
    }
    
    print() {
        for(let i = 0; i < this.heap.length; i++) {
            console.log("element -> ", this.heap[i]);
        }
    }
}

class Stack {
    constructor() {
        this.array = Array(10).fill(0);
        this.top = -1;
    }
    
    push(data) {
        if(this.top === this.array.length -1) {
            console.log("stack is overflow");
            return;
        }
        this.array[++this.top] = data;
    }
    
    pop() {
        if(this.top < 0) {
            console.log("stack is underflow");
            return;
        }
        const element = this.array[this.top];
        this.top--;
        return element
    }
    
    peak() {
        if(this.top < 0) {
            console.log("stack is underflow");
            return;
        }
        return this.array[this.top];
    }
    
    isEmpty() {
        return (this.top < 0)
    }
    
    print() {
        for(let i = this.top; i > -1; i--) {
            console.log("element -> ", this.array[i]);
        }
    }
    
}

var prefix = function(str) {
    let prefixString = "";
    const stack = new Stack();
    
    const precedence = (op) => {
        if(op === "*" || op === "/") return 2;
        else if(op === "+" || op === "-") return 1;
        else return 0;
    };
    
    
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if(/[a-zA-Z0-9]/.test(char)) {
            prefixString += char;
        }
        
        else if(char === "(") {
           stack.push(char); 
        }
        
        else if(char === ")") {
            while(!stack.isEmpty() && stack.peak() === "(") {
                prefixString += stack.pop();
            }
            stack.pop();
        } else {
            while(
                !stack.isEmpty() && 
                precedence(stack.peak()) > precedence(char)
            ) {
                prefixString += stack.pop();
            }
            stack.push(char);
        }
        
        // **********myself************
        // else {
        //     while(stack.top  !== -1) {
        //         const popElement = stack.pop();
        //         if(popElement === "(") {
        //             break;
        //         }
        //         operator = operator + popElement;
        //     }
        // }
        // if(str[i] !== "*" && str[i] !== "/" && str[i] !== "+" && str[i] !== "-" && str[i] !== "(" && str[i] !== ")") {
        //     prefixString = prefixString + str[i];
        // } else {
        //     if(stack.top === -1 || str[i] === "(") {
        //         stack.push(str[i]);
        //     } else {
        //         const lastStackElement = stack.peak();
        //         let operator = "";
                
        //         if(str[i] === "+" || str[i] === "-") {
        //             if(lastStackElement === "*" || lastStackElement === "/" ) {
        //                 while(stack.top !== -1) {
        //                   operator = operator + stack.pop();
        //                 }
        //             }
        //             stack.push(str[i]);
        //         } else if(str[i] === ")") {
        //             while(stack.top  !== -1) {
        //                 const popElement = stack.pop();
        //                 if(popElement === "(") {
        //                     break;
        //                 }
        //                 operator = operator + popElement;
        //             }
        //         } else {
        //           stack.push(str[i]); 
        //         }
        //         prefixString = prefixString + operator;
        //     }
        // }
    }
    while(!stack.isEmpty()) {
        prefixString += stack.pop();
    }
    return prefixString;
}

const expression = "A+B*C"
console.log("prefix :", prefix(expression));


// stack.push(12);
// stack.push(13);
// stack.push(14);
// console.log("pop element :", stack.pop());
// stack.push(15);
// stack.push(16);
// console.log("pop element :", stack.pop());
// stack.push(17);
// stack.print();
// // console.log()



