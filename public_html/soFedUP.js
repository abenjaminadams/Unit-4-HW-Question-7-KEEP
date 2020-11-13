/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//While writing this for the THIRD TIME I AM NOT HAPPY
//SO EXCUSE ANY SHORTCUTS BECAUSE HONESTLY I AM DONE DOING THIS QUESTION
//WITH LITTLE CONCERN
//BUT STILL FUNCTIONAL


alert("If you want to use this lame calculator hit OK!");
let dayCount, userValue=0, weekResults=[], toTAL=0;
let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];



for (dayCount=0; dayCount<=4; dayCount++) {
    
   userValue=prompt("Enter the amount you made on " + weekDay[dayCount]);
   document.write("Good for you, you made $" + userValue + ' on  ' + weekDay[dayCount] + '<br>');
   
   weekResults.push(userValue);
   
  toTAL = Number(toTAL) + Number(userValue);
  
  
}

document.write("Total Sales For The Week: $" + toTAL );

exit();
