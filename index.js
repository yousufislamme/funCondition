const demoText = "Hey you are my best friend ";
const maleOrFemale = document.getElementById("mySelect");
// click
document.getElementById("mySubmit").onclick = function () {
   let inputValue = document.getElementById("myName").value;
   document.getElementById("showDisplay").innerHTML = demoText + inputValue;
   console.log(inputValue);

   let typeText = inputValue.length;

   const selectedOption = mySelect.options[mySelect.selectedIndex].value;

   // set condition for select Meal / Female

   if (selectedOption === 'Meal') {

      console.log('i am a Meal');
      document.getElementById("myImg1").style.display = "block";

   } else if (selectedOption === 'Female') {
      console.log('i am a Female');
      document.getElementById("myImg2").style.display = "block";
   } else {
      console.log('no selected any general');
      document.getElementById("box").style.display = "none";
   }

   if (typeText > 0) {
      document.getElementById("box").style.display = 'block';
   } else {
      document.getElementById("box").style.display = 'none';
   }

}
