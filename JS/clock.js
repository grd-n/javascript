const clock = document.querySelector("h2#clock");

function setClock(){
    const date = new Date();

    let hour = addZero(date.getHours());
    let minute = addZero(date.getMinutes());
    let second = addZero(date.getSeconds());

    let time = `${hour}:${minute}:${second}`

    clock.innerText = time;
}

function addZero(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}

// setInterval(sayHello, 1000);
setClock();
setInterval(setClock, 1000);