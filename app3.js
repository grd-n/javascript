const cursor = document.querySelector("#apple h1");

// function cursorOn(){
//     if(cursor.style.color === "blue"){
//         cursor.style.color = "tomato";
//     } else {
//         cursor.style.color = "blue";
//     }
// }

// function cursorOn(){
//     const currentColor = cursor.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     cursor.style.color = newColor;
// }

// function cursorOn(){
//     if(cursor.className === "active"){
//         cursor.className = "";
//     } else {
//         cursor.className = "active";
//     }
// }

function cursorOn(){
    const clickedClass = "active"
    cursor.classList.toggle(clickedClass);
}

cursor.addEventListener("click", cursorOn)