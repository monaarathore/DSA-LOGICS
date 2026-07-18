
let  prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number"))

let copy =n, count =0;

while(n>0){
    count ++;
    n = Math.floor(n/10);
}

if(count !=10) console.log("Invalid ISBN");

else{
    let ans =0;
    while(copy>0){
        let dig = copy%10;
        ans = ans +(dig*count);
        count--;
        copy =Math.floor(copy/10)
    }
    console.log(ans%11==0? "Valid ISBN" : "Invalid ISBN");
    
}


//There are many problems in that code 
// 1.Problem 1: Number(prompt(...)) aur Leading Zeros (Shuruat ke 0)

// ISBN number 0 se bhi start hote hai or jab ap ase number ko Number() method me dalte ho toh JS age wala zero gayab kr deta hai jise tumhe invalid answer bhi mil skta hai 


// 2.Problem 2: Aakhiri Digit 'X' ko Handle Nahi Kar Payega = Kyuki ham ise string ko number me convert kr re h to Number() jb jasie hi 'x' ko dekhenga wo NaN return kr dega jise output sahi nhi ayega


//Solution
let prompt = require('prompt-sync')();

let n = prompt("Enter a 10-digit Number:")

if(n.length!=10){
    console.log("Invalid ISBN");
    
}else{
    let ans = 0;
    let multipler = 1

    for(let i=9 ;i>=0;i--){

    }
}