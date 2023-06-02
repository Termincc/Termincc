const login = document.getElementById("login");
const send = document.getElementById("send");
const name = document.getElementById("user");
const pass = document.getElementById("pass");

login.addEventListener("click", () => {
    document.getElementById("loginInput").classList.toggle("hidden");
});

send.addEventListener("click", () => {
    try {
        let username = user.value;
        let password = pass.value;
        if (checkCreds(username, password) === true) {
            location.href = "../admin.html"
        } else {
            document.getElementById("error").innerHTML = "Invalid, try again:";
            document.getElementById("user").value = "";
            document.getElementById("pass").value = "";
        }
    } catch(err) {
        console.error(err);
        console.error("Make sure you enter something next time...");
    }
});

function checkCreds(user, pass) {
    if (user === "Termincc" && pass === "cheeseball") return true;
    else if (user === "SRUMadDog" && pass === "cheeseball") return true;
    else return false;
}