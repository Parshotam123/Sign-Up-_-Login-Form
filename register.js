let signUp = document.getElementById("signup-form");

signUp.addEventListener("submit", function (event) {
    event.preventDefault();

    let emailValue = document.getElementById("email").value.trim(); 
    let passwordValue = document.getElementById("password").value.trim();

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
    }

    let passLength = 6;
    if (passwordValue.length < passLength) {
        alert("Password " + passLength + " characters ka hona chahiye.");
    }

    if (localStorage.getItem(emailValue)) {
        alert("This email is already registered. Please log in instead.");
    }

    let user = {
        email: emailValue,
        password: passwordValue, 
    };

    localStorage.setItem(emailValue, JSON.stringify(user));
    
    alert("Registration Ho Gayi Jee.");
    window.location.href = "login.html";
});