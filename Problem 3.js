function largestPrimeNumber (num){
    var div = 2; //first divisor
    var x = num; //number we will factor
    while (x > div) {
        if (x % div === 0) { //check if number can continue to be factored
            x = x / div;
        } else {
            div++; //if it is not divisible then we increase div by 1
        }
    } return " The largest prime factor is " + div;
}

largestPrimeNumber(600851475143);