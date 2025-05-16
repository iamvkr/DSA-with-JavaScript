import Input from "./utility.js";

export default async function main() {

    /** 1. print n hello world */
    // let n = 5;
    // for (let i = 0; i < n; i++) {
    //     console.log("Hello world");
    // }

    /** 2. one to n and vice versa */
    // let n = 5;
    // for (let i = 1; i <= n; i++) {
    //     console.log(i);
    // }
    // for (let i = n; i >= 1; i--) {
    //     console.log(i);
    // }

    /** 3. sum of n natural number */
    // let n = Number(await Input("Enter number"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // let s = 0;
    // for (let i = 1; i <= n; i++) {
    //     s = s + i
    // }
    // console.log("sum of n natural number:",s);

    /** 4. factorial natural number */
    // let n = Number(await Input("Enter number"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // if (n <= 1) {
    //     console.log("factorial:", 1);
    // } else {
    //     let f = 1;
    //     for (let i = 1; i <= n; i++) {
    //         f *= i;
    //     }
    //     console.log("factorial:", f);
    // }

    /** prime number */
    // let isPrime = true;
    // let n = Number(await Input("Enter number to check prime"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // if (n === 1) { // if n is 1, not a prime
    //     console.log("not a prime");
    // } else if (n === 2) { // 2 is only even prime
    //     console.log("prime number");
    // } else if (n % 2 === 0) { // all even number are not prime
    //     console.log("not a prime number");
    // } else {
    //     for (let i = 3; i < Math.floor(n/2); i++) {
    //         if (n % i === 0) {
    //             isPrime = false;
    //             break;
    //         }else{
    //             isPrime = true;
    //         }
    //     }
    //     if (isPrime) {
    //         console.log("prime number");
    //     }else{
    //         console.log("not a prime number");
    //     }
    // }


    /** sum of digits */
    // let n = Number(await Input("Enter number to find sum of digits"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // let s = 0;
    // while (n > 0) {
    //     const rem = Math.floor(n%10);
    //     s = s + rem;
    //     n=Math.floor(n/10);
    // }
    // console.log("sum of digits:",s);

    /** reverse of number */
    // let n = Number(await Input("Enter number to reverse"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // let rev = 0;
    // while (n > 0) {
    //     const rem = Math.floor(n%10);
    //     rev = (rev * 10) + rem;
    //     n=Math.floor(n/10);
    // }
    // console.log("reverse of numbers:",rev);

    /** strong number 145 = 1! + 4! + 5! */
    // let n = Number(await Input("Enter number to check strong"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // let sum = 0;
    // let copyN = n;
    // while (n > 0) {
    //     let fact = 1;
    //     const rem = Math.floor(n%10);
    //     for (let i = 1; i <= rem; i++) {
    //         fact = fact * i;
    //     }
    //     sum = sum + fact;
    //     n=Math.floor(n/10);
    // }
    // if (copyN === sum) {
    //     console.log("is a strong");
    // }else{
    //     console.log("not a strong");
    // }

    /** guess the number (do-while)*/
    let random = Math.floor(Math.random() * 100) + 1;
    do {
        let n = Number(await Input("Guess the number (1 - 100)"));
        if (isNaN(n) || n < 0 || n > 100) {
            console.log("invalid number");
        }else if (n < random) {
            console.log("too low");
        }else if(n > random){
            console.log("too high");
        }else{
            console.log("congrats! number was:",random);
            break;
        }
    } while (true);

}