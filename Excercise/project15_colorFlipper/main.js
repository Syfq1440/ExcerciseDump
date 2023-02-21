const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// function for btn
btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    // consolo.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}