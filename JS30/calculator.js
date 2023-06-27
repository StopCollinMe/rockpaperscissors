const add = function (a,b){
    return a + b;
}

const subtract = function (a,b){
    return a - b;
}

const getTheSum = function (...args){
    return args.reduce((a,b) => a + b,0);
}

const multiply = function (a,b){
    return a * b;
}

const getThePower = function (a,b){

    //MY SOLUTION

//     if(b === 0){
//         return 1;
//     }
//     let total = 1;
//     for(b; b > 0; b--){
//         total *= a;
//     }
//     return total;

    //GOOD SOLUTION
    return Math.pow(a,b);
}

const factorial = function (num){
        //Make sure there's a case for 0 so it returns 1 since 0 would be false.

        if(num ===0){
            return 1;
        }
        let total = 1;
        for(num; num > 0; num--)
        {
            total *= num;
        }
        return total;

}

const recursiveFactorial = function(n){
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

console.log(getTheSum(1,2,3,4,5,6));

console.log(factorial(10)); 

console.log(getThePower(5,2));

console.log(recursiveFactorial(10)); 

