// Takes a number and returns the sum of all numbers from 1 up to the number passed in.
function sumRange(n) {
    if (n == 1){
        return 1;
    }
    else {
        return n + sumRange(n-1);
    }
}
let sum = sumRange(8);
console.log(sum); //36

// // Takes in a base and an exponent
function power(base, exp) {
    if (exp == 0) {
        return 1;
    }
    else {
        return base * power(base, exp -1);
    }
}
let pow = power(2,6)
console.log(pow); //64
