//Find the sum of all the multiples of 3 or 5 below 1000

var totalSum = 0;
for (num = 1; num < 1000; num++) {
    if (num % 3 === 0 || num % 5 ===0) {
        totalSum = totalSum + num;
    }
}
