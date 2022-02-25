const hello = document.querySelector(".sayHello h1");
hello.style.color = "blue"
// function handleColor(){
//     const currentColor = hello.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     hello.style.color = newColor; // 순서 잘 확인할 것.
// }

// function handleColor(){
//     const clickedClass = "active";
//     if(hello.classList.contains(clickedClass)){
//         hello.classList.remove(clickedClass);
//     } else {
//         hello.classList.add(clickedClass);
//     }
// }

// function handleColor(){
//     hello.classList.toggle("active");
// } // toggle을 이용해서 가장 간단하게 정리한 방법.

hello.addEventListener("click", handleColor);

