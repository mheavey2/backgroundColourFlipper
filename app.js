const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // change background color of document body
  console.log(document.body);
  //   get random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// get a random number between 0 and last index of the colors array. Round down using 'floor' to get integer value
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
