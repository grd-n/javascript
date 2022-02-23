const imageArray = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = imageArray[Math.floor(Math.random()*imageArray.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";

document.body.appendChild(bgImage);