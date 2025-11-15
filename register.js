// document.getElementById("signup-form").addEventListener("submit", function (event) {

//     event.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let user = {
//         email: email,
//         password: password,
//     };

//     localStorage.setItem(username, JSON.stringify(user));
//     alert("Registration successful! Please login.");
//     window.location.href = "login.html";
// }); 
// let emailValue = document.getElementById("email").value;
// let passwordValue = document.getElementById("password").value;

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
        return;
    }

    let user = {
        email: emailValue,
        password: passwordValue,
    };

    localStorage.setItem(emailValue, JSON.stringify(user));
    alert("Registration Ho Gayi Jee");
    window.location.href = "login.html";
});