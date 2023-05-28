const login = document.getElementById("login");
const send = document.getElementById("send");
const name = document.getElementById("user");
const pass = document.getElementById("pass");

login.addEventListener("click", () => {
    document.getElementById("loginInput").classList.toggle("hidden")
});

send.addEventListener("click", () => {
    try {
        let username = string(user.value)
        let password = string(pass.value)
        checkCreds(username, password)
    } catch(err) {
        console.error(err)
        console.error("Make sure you enter something next time...")
    }
});

function checkCreds(user, pass) {
    fetch("https://api.netlify.com/api/v1/accounts/termincc/env/user")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {console.error("Error:", error)})
    fetch("https://api.netlify.com/api/v1/accounts/termincc/env/pass")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {console.error("Error:", error)})
}