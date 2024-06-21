// function twoIntegers(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + "is larger than" + num2);
//   } else if (num2 > num1) {
//     console.log(num2 + "is larger than" + num1);
//   } else {
//     console.log("both numbers are equal");
//   }
// }
// twoIntegers(11, 5);

// function threeVariables(a, b, c) {
//   let product = a * b * c;
//   if (product > 0) {
//     console.log("product is positive");
//   } else {
//     console.log("product is negative");
//   }
// }
// threeVariables(-6, -3, -2);

// function loop() {
//   for (let x = 0; x <= 15; x++) {
//     if (x % 2 === 0) {
//       console.log("the number " + x + " is even");
//     } else {
//       console.log("the number " + x + " is odd");
//     }
//   }
// }
// loop();


// // //function pattern(){

// // // Variables to control loop counters and character output
// var a, b, str;

// // // Outer loop for rows
// for (a = 1; a <= 6; a++) {
//   //   // Inner loop for characters in each row
//   for (b = 1; b < a; b++) {
//     //     // Accumulate asterisks in the 'chr' variable
//     str = str + "*" + " ";
//   }

//   //   // Print the accumulated characters for the current row
//   console.log(str);

//   //   // Reset 'chr' for the next row
//   str = "";
// }



// let x = 1077;
// let y = 288;
// var gcd;
// while (x != y) {
//   if (x > y) {
//     x = x - y;
//   } else {
//     y = y - x;
//   }
// }
// gcd = x;
// console.log(gcd);


// var num = 0;
// for (var a = 0; a < 600; a++) {
//   if (a % 3 === 0 || a % 5 === 0) {
//     num += a;
//   }
// }
// console.log(num);
