 function checkNeonNumber(n){
let sum=0
    let sq = n*n;

    while(sq>0){
        let digit = sq%10;
        sum = sum+digit
        sq = Math.floor(sq/10)
    }
    if(sum===n) return "Neon Number"
    else{
        return "Not Neon"
    }
 }

 console.log(checkNeonNumber(8));
 