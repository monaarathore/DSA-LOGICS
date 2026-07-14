
function GetSum(num){
  let sum =0;
  while(num>0){
    let digit = num%10;
    sum += Math.pow(digit,2)
    num = Math.floor(num/10);
  }
  return sum;
}
function isHappy(n){
    let seen = new Set();

    while(n!==1 && !seen.has(n) ){
    seen.add(n);
    n= GetSum(n);
}
return n===1;
}
console.log(isHappy(19));
