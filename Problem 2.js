//Using the Fibonacci sequence, find the sum of the even-valued terms
//Values do not exceed four million

var first = 1;
var second = 0;
var sum = 0;
var total = 0;

while (sum < 4000000) {
    sum = first + second; 
        if (sum % 2 === 0) {
            total += sum;
        }
    first = second;
    second = sum;
}

console.log(total);