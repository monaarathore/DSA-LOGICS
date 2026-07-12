//Swapping

let a = 10
let b = 20

a = a+b;
b= a-b;
a=a-b
console.log(`value of a ${a}, value of b ${b}`)

/*Compound Interest - Yeh interest ham tab nikalte hai jab hame interest ka interest nikalna ho 
- Imgine kijiye apne ₹100 (P) bank me deposite kraye or bank apko saal ke 10% (R) interest deta hai 
- Year 1 : Apko 100 rupee pe 10% interest mila to total = 100+10 = 110 rupees
- Year 2 : Apko ab 100 per nhi 110 pe 10% ka interest milega jo honge 11 rupee = 121 rupees

Iska standard formula hota hai:
            A=P*(1+R/100)^T
            CI = A-P

P = Principal amount (Shuruwati paisa)
R = Rate of interest (Byaj ki dar)
T = Time period (Kitne saal ke liye)
A= Total Amount (Paisa + Byaj)


*/
function FindCompoundInterest(P,R,T){

    let A = P* Math.pow((1+R/100),T)
    let CI = A-P
    return CI.toFixed(0)
}


console.log(FindCompoundInterest(100,10,2));


//"Digit Extraction and Digit Removal" 
/* Means agar tumhe kisi digit se end ke number ko remove krna ya use hi rakhna ho to yeh logic use krna 
1. Agar tumhe Kisi digits se usme se last number ko remove krnahai to = 10 se divide kr do puri digit ko
Example :- 2345678 /10 = 234567 (jinte number hatane ho utne 0 laga do agar last ki 2 number hatne h to /100 kr do)

2. Agar tumhe kisi digit me se uski last number hi rakhna ho baki sab ko hatna ho to = modulus ka use kro 
Example : -  2345%10 = 5 

Leetcode Problems  That Use This Logic

1.sum of digit 345 =3+4+5 = 12 
Approch :
- Pehle ek num user se lenge 
- Fir ek sum varible banayenge jisme ham jo sum hoga wo store krenge 
- Ab hame while loop ka use kia h jab tak num 0 nhi ho jata yeh chalta rahega
- Ab hame ek ek number ko sum krna hai to ham piche se ek digit nikalenge or ek new variable me store kr denge  by using modulus % operator
- Ab jo digit me store hua single number h use sum me add kr denge
- Ab num to 345 se hi initialize hai isme ham chota krna hoga nhi to yeh infinite time chalega to uskeliye hame last wali digit jo hamne digit variable me store kia h use hata denge by using dvivide operator

let sum = 0;
let num = 345;
while(num > 0) {
    let digit = num % 10;
    sum += digit;
    num = num / 10;
    console.log(`Num: ${num}, Digit: ${digit}, Current Sum: ${sum}`);
}

NOTED :
- Yeha hamne kya kia ha yhe jo code hai yeh wrong hai yeh hame infinit loop me yeh jayega 
- Reason : First hamne jo num = num/10 kia hai yeh decimal value dega jo kabhi 0 se choti nhi hogi balki jo 0 ki range me chalenge like 0.4455,0.56,0.32 ase jo kabhi khatam nhi hogi or iska solution hai " MATH.Floor " kas use krna 
            or tumne console ko while ke undr rakha hai to yeh ek process ko show krega final ouput hi dekhana hai to tumhe console ko block ke bahar likhna hoga

RIGHT APPROCH :-

            */
let sum =0
let num = 345
while(num>0){
let digit = num%10
sum +=digit
num =Math.floor(num/10)  //decimal ko clear krega
}
console.log(sum)



/*
2.  Palindrome Number (LeetCode #9)
Problem: Check if a number reads the same forward and backward. For example, 121 is a palindrome, but 123 is not.

How to approch:
1. Agar koi negative number aya like -121 apn isko ulta padho to 121- hoga so negative numbr can never be palindrome to return false hoga
2. AB hame uski original copy kisi variable me store krni hogi isliye ham ek varible create krenge "original" name ka 
3. Ab hamne ise reverse krna hoga means hamne modulus ki help se last digit se extract krna hoga to use store krne ke liye "reversedNum " name ka variable create hoga
4. The loop Logic : Inside you while loop 
*/

let num1 = 123
let original = num1
let reverseNum =0
while(num1>0){
    let digit = num1%10;
    reverseNum = (reverseNum *10 )+digit
    num1 = Math.floor(num1/10);
}
if(original ===reverseNum){
    console.log("number is palidrome");
}else{
    console.log("Not palidrome")
}

