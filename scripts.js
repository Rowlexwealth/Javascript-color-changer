const colors = ["red", "green", "blue", "yellow", "gold", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor (Math.random() * colors.length);
}



// const colors = ["green", "red", "blue", "gold", "rgba(133,122,20)","F15026"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber]
// });

// function getRandomNumber() {
//     return Math.floor (Math.random() * colors.length);
// }