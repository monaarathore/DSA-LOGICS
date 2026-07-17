function factorial(num){
    let fact =1;

    // factorial of zero and one is always one
    if(num<0) return false;
    if(num===1&&num===0){
        return 1;
    }

    for(let i=1;i<=num;i++){
        fact *=i;
    }
    return fact;
}

console.log(factorial(5));
