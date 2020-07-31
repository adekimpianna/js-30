'use strict';


//they read user input from events or from the DOM
//const checkboxes = document.querySelectorAll('.item input[type = "checkbox"]');

function handleCheck(e) {
  let checking = document.querySelectorAll('.item input[type = "checkbox"]');
  
  let inBetween = false;
  if (e.shiftKey && this.checked) {
  checkboxes.forEach(checkbox => {
   if (checkbox === this || checkbox === lastChecked) {
    inBetween = !inBetween;
   }

   inBetween ? (checkbox.checked = true) : "";

  });
 }

 lastChecked = this;

 //they log any important information for developers
console.log('--- loading handler: multiple checks');

};

/* handlers define user interactions
  they communicate results to the user
  
*/
