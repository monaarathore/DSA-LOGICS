function printPrimeFactorsSmart(n) {
    // i = 2 se shuru karenge aur divide karte jayenge
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            console.log(i); // i hamesha prime hi nikalta hai!
            n = Math.floor(n / i); // n ko chota karte jao
        }
    }
    
    // Agar n aakhiri me 1 se bada bacha hai, toh woh khud ek prime number hai
    if (n > 1) {
        console.log(n);
    }
}

printPrimeFactorsSmart(36); 
// Output: 2, 2, 3, 3 (Iska product: 2*2*3*3 = 36)