// Calls function after clicking button
function Survey(){
  let grade = prompt("Rate your team's draft letter grade!");
  //enter if else statement
if (grade === 'A' || grade === 'B'|| grade === 'a' || grade === 'b' || grade === 'A+' || grade === 'B+' || grade === 'A-' || grade === 'B-') {
document.getElementById('Response').innerHTML ="Wow! They might make playoffs next year!";  

   }
else 
  {document.getElementById('Response').innerHTML ="That's not good; hopefully your team was already good!";
     }
}