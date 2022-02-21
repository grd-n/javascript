const h1 = document.querySelector('.hello h1')

console.dir(h1);

function handleMouseClick(){
    const hi = "clicked";
    if (h1.className === hi){
        h1.className = "";
    } else {
        h1.className = hi;
    }
}

h1.addEventListener("click", handleMouseClick);