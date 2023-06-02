const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
// The goal is to get a random number between 0 and 3, the total no. of colours in the array
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length); // Round down to the closest integer to get a whole number
}