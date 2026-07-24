function ArmstrongNumber(n){

    let k = String(n).length
    let sum =0
    let temp = n

    while(temp>0){
        let digit = temp%10;
        let pow = Math.pow(digit , k)
        sum +=pow
        temp = Math.floor(temp/10)
    }

    if(n===sum) return "Armstrong Number"
    else return "Not Armstrong Number"
}

console.log(ArmstrongNumber(153));
