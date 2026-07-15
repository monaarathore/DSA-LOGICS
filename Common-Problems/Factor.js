

function findFactor(n){

    let arr =[]

    for(let i=0;i<=n/2;i++){
if(n%i==0){
    arr[i]=n;
}
    }
    return arr;
}
console.log(findFactor(36));
