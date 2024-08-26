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

description.style.fontSize = "25px";

//! ADDING PROPERTY VALUES TO AN ARR OF NODES;
//? Males sure when calling a method for
//?DOM element to only affect one item at a time
let allPTags = document.querySelectorAll("textSide p");
console.log(allPTags);

// allPTags[1].style.fontSize = "60px";

function changeParagraphColor() {
  for (let i = 0; i < allPTags.length; i++) {
    allPTags[i].style.color = "tomato";
  } //END FOR LOOP
} //END FUNCTION

changeParagraphColor();

//!DOM EVENT LISTENERS

//?Event listeners are waiting for a type of event to fire off("Click, Hover, keydown, etc.") & if the event is cliked the function will run.

let imageElement = document.querySelector(".imageSide img");

let pFirstColumns = document.querySelectorAll(".firstCol p");
console.log(imageElement);
console.log(pFirstColumns);

imageElement.addEventListener("click", reColorParagraphs);

function reColorParagraphs() {
  for (let i = 0; i < pFirstColumns.length; i++) {
    const currentParagraph = pFirstColumns[i];
    pFirstColumns[i].style.color = "yellow";
  } //END OF FOR LOOP
} // END OF FUNCTION
