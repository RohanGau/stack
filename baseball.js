var calPoints = function(operations) {
    let sum = 0;
    let stack = [];
    for(let i = 0; i < operations.length; i++) {
        if(stack.length > 1 && operations[i] === '+') {
            const operation = stack[stack.length - 1] + stack[stack.length - 2];
            sum += operation;
            stack.push(operation);
        } else if(stack.length > 0 && operations[i] === 'C') {
            sum -= stack.pop();
        } else if(stack.length > 0 && operations[i] === 'D') {
            sum += stack[stack.length - 1] * 2;
            stack.push(stack[stack.length - 1] * 2);
        } else {
            sum += Number(operations[i]);
            stack.push(Number(operations[i]));
        }
    }
    return sum;
};
