// three inputs
// return the number of equal values => 0, 2, 3

const input1 = 40   
const input2 = 40
const input3 = 50 

let answer = 0  

if ((input1 === input2) && (input1 ===input3)) {
    answer = 3
}

else if ((input1 === input2) || (input2 === input3) || (input1 === input3)) {
    answer = 2
}

console.log(answer)