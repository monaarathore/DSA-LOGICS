function reverseNumber(n){
if(n<=0) return false;

let reverse = 0;
while(n>0){
    let digit = n%10;
    reverse = reverse *10+digit
    n = Math.floor(n/10);
}
return reverse;
}

let final = reverseNumber(123)
console.log(final);



