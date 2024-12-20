class Stack2 {
    constructor(n) {
        this.array = new Array(n);
        this.size = n;
        this.top1 = -1;
        this.top2 = n; // start from the end of the array for stack 2
    }
    
    push1(data) {
        if(this.top1 + 1 === this.top2) {
            console.log("stack overflow");
        } else {
            this.top1++;
            this.array[this.top1] = data;
        }
    }
    
    push2(data) {
        if(this.top2 - 1 === this.top1) {
            console.log("stack overflow");
        } else {
            this.top2--;
            this.array[this.top2] = data;
        }
    }
    
    pop1() {
        if(this.top1 < 0) {
            console.log("stack underflow");
            return;
        } else {
            const data = this.array[this.top1];
            this.top1--;
            return data;
        }
    }
    
    pop2() {
        if(this.top2 >= this.size) {
            console.log("stack underflow");
        } else {
            const data = this.array[this.top2];
            this.top2++;
            return data;
        }
    }
    
    print1() {
        for(let i = this.top1; i > -1; i--) {
            console.log("stack 1 item : " +  this.array[i] + " at position of " + i);
        }
    }
    
    print2() {
        for(let i = this.top2; i < this.size; i++) {
            console.log("stack 2 item : " +  this.array[i] + " at position of " + i);
        }
    }
}

class Stack {
    constructor(n) {
        this.array = new Array(n);
        this.size = n;
        this.top1 = -1;
        this.top2 = Math.floor(n / 2);
    }
    
    push1(data) {
        if(this.top1 > (this.size / 2))  {
            console.log("stack overflow");
        } else {
           this.top1 = this.top1 + 1;
           this.array[this.top1] = data;
        }
    }
    
    push2(data) {
        if(this.top2 > this.size)  {
            console.log("stack overflow");
        } else {
           this.top2 = this.top2 + 1;
           this.array[this.top2] = data;
        }
    }
    
    pop1() {
        if(this.top1 < 0)  {
            console.log("stack underflow");
        } else {
            const data = this.array[this.top1];
            this.top1 = this.top1 - 1;
            return data;
        }
    }
    
    pop2() {
        if(this.top2 < (this.size / 2))  {
            console.log("stack underflow");
        } else {
            const data = this.array[this.top2];
            this.top2 = this.top2 - 1;
            return data;
        }
    }
    
    print1() {
        for(let i = this.top1; i > -1; i--) {
            console.log("stack 1 item : " +  this.array[i] + " at position of " + i);
        }
    }
    
    print2() {
        for(let i = this.top2; i > this.size / 2; i--) {
            console.log("stack 2 item : " +  this.array[i] + " at position of " + i);
        }
    }
}

const stack = new Stack2(20);
stack.push1(10);
stack.push2(20);
stack.push1(30);
stack.push2(40);
stack.push1(50);
stack.push2(60);
console.log("pop element stack 1 :",stack.pop1())
stack.push1(70);
stack.push2(80);

stack.print1();
stack.print2();
