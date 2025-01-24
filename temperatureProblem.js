/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        if(stack.length === 0) {
            stack.push(i);
        } else {
            while(stack.length !== 0) {
                if(temperatures[i] > temperatures[stack[stack.length - 1]]) {
                    const index = stack.pop();
                    answer[index] = i - index;
                } else {
                    break;
                }
            }
            stack.push(i);
        }
    }
    return answer;
};
