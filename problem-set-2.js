/*
   create a while loop that will print out all the even numbers
   between 10 and 40

   do the same for all odd numbers as well
   */

   let number = 10;

   while(number<= 40){
    if (number % 2 ===0){
        //even
        console.log(number);
    }

    number++;
}