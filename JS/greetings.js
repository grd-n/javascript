const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLogin(){
    const value = loginInput.value;
    if (value === "") {
        alert("Please write your name!");
    } else {
        console.log("hello", loginInput.value);
    }

}

loginButton.addEventListener("click", handleLogin);