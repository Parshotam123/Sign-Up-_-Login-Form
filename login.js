document.addEventListener("DOMContentLoaded", function () {

    let loginForm = document.getElementById("formLogin");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let userJSON = localStorage.getItem(email);

        if (userJSON) {

            let parsedUser = JSON.parse(userJSON);

            if (parsedUser.password === password) {
                localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
                alert("Login Ho Gaya Jee!");
                window.location.href = "page.html";
            }
            else {
                alert("Password Galat Hai Jee");
            }
        }

        else {
            alert("User Nhn Mila.");
        }
    });
});