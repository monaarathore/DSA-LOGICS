
let prompt = require('prompt-sync')();

let n = prompt("Enter a 13-digit ISBN Number:");

if (n.length != 13) {
    console.log("Invalid ISBN");
} else {
    let ans = 0;
    let multipler = 1;

    for (let i = 12; i >= 0; i--) {
        let dig = parseInt(n[i]);
        
        ans = ans + (dig * multipler);

       
        if (multipler === 1) {
            multipler = 3;
        } else {
            multipler = 1;
        }
    }
    
    console.log(ans % 10 == 0 ? "Valid ISBN" : "Invalid ISBN");
}