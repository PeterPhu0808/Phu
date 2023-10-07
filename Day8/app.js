const loginForm = document.getElementById("login-form");
const defaultUsername = "admin";
const defaultPassword = "mindx";

loginForm.addEventListener("submit", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username != defaultUsername || password != defaultPassword) {
        alert("Login Fail! Please check your username/password");
    }
    else {
        alert("Login Success!");
    }
    // alert("username: " + username + "\n password: " + password);
})