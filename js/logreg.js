const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSignUp.addEventListener("click", e => {
    formRegister.classList.remove("hide");
    formLogin.classList.add("hide")
})
