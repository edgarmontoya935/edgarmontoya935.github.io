const LoginForm = document.querySelector("#login")
const RegForm = document.querySelector("#register")
const Indicator = document.querySelector("#indicator")

function register(){
    RegForm.style.transform = "translateX(0px)"
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(115px)"
}

function login(){
    RegForm.style.transform = "translateX(300px)"
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
}