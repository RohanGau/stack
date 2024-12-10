var t = -1;
var MAX = 100;
var array = Array(MAX).fill(0);

console.log("array :", array);

function isEmpty() {
    return (t < 0);
}

function push(data) {
    if(1 > (MAX - 1)) {
        console.log("Stack overflow");
        return;
    } else {
        t++;
        array[t] = data;
        console.log(data + " pushed into stack");
    }
}

function pop() {
    if(isEmpty()) {
        console.log("stack is underflow")
        return 0;
    } else {
        var x = array[t];
        t -= 1;
        return x;
    }
}

function peek() {
    if(isEmpty()) {
        console.log("stack is underflow");
        return 0;
    } else {
        const x = array[t];
        return x;
    }
}

function print() {
    for(let i = t; i > -1; i--) {
        console.log("index of " + i + " is :" + array[i]);
    }
}

push(10);
push(20);
push(30);
push(40);
push(50);
push(60);
print();
console.log("pop element :", pop());
// console.log("peek element :", peek());
print();


// console.log()

