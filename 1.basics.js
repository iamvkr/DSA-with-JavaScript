import Input from "./utility.js";

export default async function main() {
    /** Basic Number Operations */
    /** 1. Write a program to check whether a number is even or odd. */
    // const n = Number(await Input("Enter your number"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("negative number");
    //     return false;
    // }
    // if (Math.floor(n%2) == 0) {
    //     console.log("Number is even");
    // }else{
    //     console.log(("Number is odd"));
    // }

    /** 2. Determine if a given number is positive, negative, or zero. */
    // const n = Number(await Input("Enter your number"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    // }
    // else{
    //     if (n > 0) {
    //         console.log("Number is positive",n);
    //     } else if(n < 0) {
    //         console.log(("Number is negative " + String(n)));
    //     }else{
    //         console.log("Number is equal to 0");
    //     }
    // }

    /** 3. Check whether a number is divisible by 5 and 11 or not */
    // const n = Number(await Input("Enter your number"));
    // if (isNaN(n)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (n < 0) {
    //     console.log("Number is negative");
    //     return false;
    // }
    // else{
    //     if (n%5 == 0 && n%11 == 0) {
    //         console.log("number is divisible by 5 and 11");
    //     }else{
    //         console.log("number is not divisible by 5 and 11");
    //     }
    // }

    /** 4. Find the greatest of three numbers entered by the user. */
    // const a = Number(await Input("Enter first Number"));
    // const b = Number(await Input("Enter 2nd Number"));
    // const c = Number(await Input("Enter 3rd Number"));
    // if (isNaN(a) || isNaN(b) || isNaN(c)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (a > b && a > c) {
    //     console.log(`${a} is greatest`);
    // } else if(b > c) {
    //     console.log(`${b} is greatest`);
    // }else{
    //     console.log(`${c} is greatest`);
    // }

    /** 5. Check if a year is a leap year. */
    // const year = Number(await Input("Enter year"));
    // if (isNaN(year)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (year%4 === 0) {
    //     if (year%100 === 0 && year%400 === 0) {
    //         console.log(`is a leap year`);
    //     }else{
    //         console.log(`not a leap year`);
    //     }
    // } else {
    //     console.log(`not a leap year`);
    // }
    /**
    Check Leap Year Using newDate()
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
    */

    /**  Math-based Conditions */
    /** 1. Given marks in 3 subjects, check if a student is pass or fail (minimum passing marks = 40 in each). */
    // const m1 = Number(await Input("Enter 1st subject marks"));
    // const m2 = Number(await Input("Enter 2nd subject marks"));
    // const m3 = Number(await Input("Enter 3rd subject marks"));
    // if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (m1 >= 40 && m2 >= 40 && m3 > 40) {
    //     console.log("passed");
    // }else{
    //     console.log("failed");
    // }

    /** 2. Given 3 sides of a triangle, check whether the triangle is valid (sum of any two sides > third side). */
    // const s1 = Number(await Input("Enter 1st side"));
    // const s2 = Number(await Input("Enter 2nd side"));
    // const s3 = Number(await Input("Enter 3rd side"));
    // if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1)) {
    //     console.log("valid traingle");
    // }else{
    //     console.log("invalid triangle");
    // }

    /** 3. Identify the type of triangle based on sides: equilateral, isosceles, or scalene. */
    // const s1 = Number(await Input("Enter 1st side"));
    // const s2 = Number(await Input("Enter 2nd side"));
    // const s3 = Number(await Input("Enter 3rd side"));
    // if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // if (s1 == s2 == s3) {
    //     console.log("equilateral traingle");
    // }else if( s1 == s2 || s2 == s3 || s3 == s1){
    //     console.log("isosceles triangle");
    // }else{
    //     console.log("scalene triangle");
    // }

    /**
     * 4. Write a program to calculate the electricity bill based on usage:
     * Up to 100 units: ₹1.5/unit
     * 101–300 units: ₹2/unit
     * Above 300 units: ₹3/unit
     */

    // let usage = Number(await Input("Enter usage"));
    // if (isNaN(usage)) {
    //     console.log("invalid number");
    //     return false;
    // }
    // let s = 0;
    // if (usage > 300) {
    //     s = s + (usage - 300) * 3;
    //     usage = 300;
    // }
    // if (usage <= 300 && usage > 100) {
    //     s = s + (usage - 100) * 2;
    //     usage = 100;
    // }
    // if (usage <= 100 && usage > 0) {
    //     s = s + (usage - 0) * 1.5;
    // }else{
    //     console.log("usage cannot be less than 0");
    //     return false
    // }
    // console.log("usage cost: ",s);

    /** 5. Implement a simple calculator using switch-case (addition, subtraction, multiplication, division) */
    let n1 = Number(await Input("Enter number 1"));
    let n2 = Number(await Input("Enter number 2"));
    let op = Number(await Input("Enter  \n 1 for '+' \n 2 for '-' \n 3 for '*' \n 4 for '/' \n"));

    switch(op){
        case 1:
            console.log(`${n1} + ${n2} = ${n1 + n2}`);
            break;
        case 2:
            console.log(`${n1} - ${n2} = ${n1 - n2}`);
            break;
        case 3:
            console.log(`${n1} * ${n2} = ${n1 * n2}`);
            break;
        case 4:
            console.log(`${n1} / ${n2} = ${n1 / n2}`);
            break;
        default:
            console.log("Invalid operation");
    }
}