//Finding the digital root of a number
let num =8;
while(num>9){
    let sum =0;
    while(num>0){
        let digit = num%10;
        sum += digit;
        num = Math.floor(num/10);
    }
    num =sum;
}
console.log(num);

