$(document).ready(function () {
  $('#loginForm').submit(function (e) {
    e.preventDefault();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Login success (frontend only). Redirecting...");
      window.location.href = "home.html"; // Must exist in /Pages
    }
  });

  $('#signupForm').submit(function (e) {
    e.preventDefault();
    const name = $('#fullname').val().trim();
    const email = $('#email').val().trim();
    const pass = $('#password').val().trim();
    const confirmPass = $('#confirmPassword').val().trim();

    if (!name || !email || !pass || !confirmPass) {
      alert("All fields are required.");
    } else if (pass !== confirmPass) {
      alert("Passwords do not match.");
    } else {
      alert("Signup success (frontend only). Redirecting to login...");
      window.location.href = "login.html";
    }
  });
});
