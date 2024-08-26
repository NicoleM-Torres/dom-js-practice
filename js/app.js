//! DOM SELECTION
//? 4 main types of selection elements in HTML

//* 1. getElelemntById
let listItemThree = document.getElementById("thirdListItem");
console.log(listItemThree);

//* 2. getElelemntsByClassName
let headerColumns = document.getElementsByClassName("col-6");
//collects all elements with the same class name and stores in arr
console.log(headerColumns);

//access 1 item in the arr based on the index []
console.log(headerColumns[1]);

//* 3. querySelector
//?similar to get classbyName but uses CSS styling selection

//selects one element
let listItemOne = document.querySelector(".aboutMe li:first-child");
console.log(listItemOne);

//* 4.querySelectorAll
//selects all elements under the same classname/id & stores in arr
let allListItems = document.querySelectorAll(".aboutMe li");
console.log(allListItems);

//!DOM STYLING & CHANGING TEXT
let description = document.querySelector(".textSide p:first-child");

//* innerHTML is a DOM method to change text.
description.innerHTML =
  "Bob Ross was a calm and amazing painter, that chose to die by smoking too much.";

  //* .style give you the option of changing the elements css properties from JavaScript

