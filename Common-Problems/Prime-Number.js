//best way to find prime number

function findPrime(n){

if(n<=1) return false

for(let i=2;i*i<=n;i++){
    if(n%i==0){
        return false;
    
    }
    
}

return true;
}

if(findPrime(13)){
    console.log(" Prime number");
    
}else{
    console.log("Not a prime number");
    
}

