/*
  1. create a variable called "loggedIn" that starts off as false
  2. create a while loop while loggegin is false
  3.each loop print out:  "incorrect loggedin credentials"
  4. after 3 loop iterations, change loggedIn to be true
  after loop is doneprint out: "succesfully logged in"

  Hint be careful for infinite loop!
  Hint2: use CMD-C OR CTRL+C TO GET OUT OF THE INfinite loop in node
  */

  let loggedIn = false;
   let loopCounter = 0;

  while(!loggedIn){
    console.log("incorrect login credentials");
    if (loopCounter === 2) {
        loggedIn =true;
    }
    loopCounter++;
}

//after the loop
console.log("succesfullylogged In!");