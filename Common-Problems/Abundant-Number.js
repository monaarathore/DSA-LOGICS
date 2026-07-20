function AbundantNumber(n){
if(n<=0) return "Not Abundant"
let sum =0
for(let i=1;i<n;i++){
    if(n%i==0){
        sum +=i;
    }

}
if(sum>n) return "Abundant Number"
else{
    return " Not Abundant Number"
}
}

console.log(AbundantNumber(12));
