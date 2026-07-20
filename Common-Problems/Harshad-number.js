
function HarshadNumber(n)
{

if(n<=0) return " No Harshad Number"

let sum=0
let original = n;

while(n>0){
let dig = n%10;
sum +=dig
n= Math.floor(n/10)
}

if(original>sum) return "Harshad Number"
else{
    return " No harshad Number"
}
}

console.log(HarshadNumber(12));
