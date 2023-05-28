const login = document.getElementById("login");
const send = document.getElementById("send");
const name = document.getElementById("user");
const pass = document.getElementById("pass");

login.addEventListener("click", () => {
    document.getElementById("loginInput").classList.toggle("hidden")
});

send.addEventListener("click", () => {
    try {
        let username = user.value
        let password = pass.value
        checkCreds(username, password)
    } catch(err) {
        console.error(err)
        console.error("Make sure you enter something next time...")
    }
});

function checkCreds(user, pass) {
    fetch(`https://api.netlify.com/api/v1/sites/2407c915-19a6-4f49-84d3-ec271d109626`, {
    headers: {
        'Authorization': `Bearer otvuIDPYJOrxBjbB9Peuvn5UujIfSbLDxO1YmAE1iP0`,
    },
    })
    .then(response => response.json())
    .then(data => {
        // Process the response data
        const environmentVariables = data.build_settings.env;
        console.log(environmentVariables);
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    });
}