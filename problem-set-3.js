/*
 create a while loop that runs from 1-100
 every 10 loops print out:checkpoint! and the loop number
 on loop 50 print out ONLY:Half way there!
 on the final loop (100) print out ONLY: Yoy made it!
 After the loop is done,print out:All done!

 you should see this printed out with run:
 checkpoint! 10
 checkpoint! 20
 checkpoint! 30
 checkpoint! 40
 half way there!
 checkpoint! 60
 checkpoint! 70
 checkpoint! 80
 checkpoint! 90
 you made it!
 all,done!

 hint:lookup the "continue" keyword for loops
 */

let count = 1;
while (count <= 100) {
    if (count === 50) {
        console.log("Half way there!");
        count++;
        continue;
    }
    if (count === 100) {
        console.log("You made it!");
        count++;
        continue;
    }
    if (count % 10 === 0) {
        console.log(`Checkpoint! ${count}`);
    }
    count++;
    }
console.log("All done")
