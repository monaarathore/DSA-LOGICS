

function findFactor(n){

if(n<=0) return false;
process.stdout.write(1+" ")

    for(let i=2;i<=n/2;i++){
if(n%i==0){
process.stdout.write(i+" ")
}

    }
    if(n>1){
   process.stdout.write(n+" ")
   }
   

}
console.log(findFactor(36));
