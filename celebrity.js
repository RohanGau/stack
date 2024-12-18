// function knows(a, b, matrix) {
//     return matrix[a][b];
// }

function knows(a, b, matrix) {
    return matrix[a][b] === 1;
}

// using iterative method
// function findCelebrity(n, matrix) {
//     let outdegree = new Array(n).fill(0);
//     let indegree = new Array(n).fill(0);
    
//     for(let i = 0; i < n; i++) {
//         for(j = 0; j < n; j++) {
//             let x = knows(i, j , matrix);
//             console.log("i :" + i + " j :" + j + " value :" + x);
//             outdegree[i] += x;
//             indegree[j] += x;
//         }
//     }
    
//     console.log("outdegree :", outdegree);
//     console.log("indegree :", indegree);
//     for(let i = 0; i < n; i++) {
//         if(indegree[i] === n - 1 && outdegree[i] === 0) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// using stack
function findCelebrity(n, matrix) {
    let stack = [];
    // Celebrity
    let C;

    // Push everybody to stack
    for (let i = 0; i < n; i++) {
        stack.push(i);
    }

    // Extract top 2

    // Find a potential celebrity
    while (stack.length > 1) {
        // console.log("stack :", stack);
        let A = stack.pop();
        let B = stack.pop();
        console.log("A :", A, " B :", B);
        if (knows(A, B, matrix)) {
            stack.push(B);
        } else {
            stack.push(A);
        }
    }
    

    // Potential candidate?
    C = stack.pop();

    // Check if C is actually a celebrity or not
    for (let i = 0; i < n; i++) {
        // If any person doesn't know 'C' or 'C' doesn't
        // know any person, return -1
        if (i !== C
            && (knows(C, i, matrix)
                || !knows(i, C, matrix))) {
            return -1;
        }
    }

    return C;
}


function celebrity(n, matrix) {
    // This function returns the celebrity
    // index 0-based (if any)

    let i = 0, j = n - 1;
    while (i < j) {
        if (matrix[j][i] === 1) { // j knows i
            j--;
        }
        else { // j doesn't know i so i can't be celebrity
            i++;
        }
    }

    // i points to our celebrity candidate
    let candidate = i;

    // Now, all that is left is to check that whether
    // the candidate is actually a celebrity i.e: he is
    // known by everyone but he knows no one
    for (let k = 0; k < n; k++) {
        if (k !== candidate) {
            if (matrix[k][candidate] === 0
                || matrix[candidate][k] === 1) {
                return -1;
            }
        }
    }

    // if we reach here this means that the candidate
    // is really a celebrity
    return candidate;
}


let n = 4;
let matrix = [
    [ 0, 0, 1, 0 ],
    [ 0, 0, 1, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 1, 0 ],
];
let id = celebrity(n, matrix);
if(id === -1) {
    console.log("not found");
} else {
    console.log("found");
}
