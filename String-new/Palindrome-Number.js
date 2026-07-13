



function palindromeNumber(num){

    let reverse =0;
    let original = num

    if(num<=0) return false;
    while(num>0){
        let digit = num%10;
        reverse = reverse*10+digit
        num = Math.floor(num/10)
    }
    

    if(reverse===original){
    console.log(`Number is Palindrome ${original}`);
    
}else{
    console.log(`Number is Not Palindrome ${original}`);
}


}

palindromeNumber(123)
