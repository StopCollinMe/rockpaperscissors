function fibonacci(position){
    if(position < 0) return 'Oops';
    if(position === 0) return 0;
    let a = 0;
    let b = 1;
    for(let i = 0; i < position; i++){
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

console.log(fibonacci(10));