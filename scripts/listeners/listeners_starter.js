'use strict';
console.log('--- loading listener: _');

const checkboxes = Array.from(document.querySelectorAll('.inbox input[type = "checkbox"]'));

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleCheck);
})
