document.addEventListener("DOMContentLoaded", function () {

    let loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let userJSON = localStorage.getItem(email);

        if (userJSON) {

            let parsedUser = JSON.parse(userJSON);

            if (parsedUser.password === password) {
                localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
                alert("Login Ho Gaya Jee!");
                window.location.href = "home.html";
            }
            else {
                alert("Password Galat Hai Jee!");
            }
        }

        else {
            alert("User Nhn Mila.");
        }
    });
});