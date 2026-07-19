function CheckAutomorphic(n){

    let sq= n*n;

    while(n>0){
        let dig = n%10
        let digi = sq%10
        if(dig!=digi) {
            return "Not Automorphic"
        }
        n = Math.floor(n/10)
        sq = Math.floor(sq/10)
    }

    return "Automorphic number"
}

console.log(CheckAutomorphic(25)); // Output: Automorphic Number (25*25 = 625)
console.log(CheckAutomorphic(7));