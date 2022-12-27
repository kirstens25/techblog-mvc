// create a post request to /api/users/login when clicking the submit button on the login page
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      // create a post request with the email and password entered
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // redirect to homepage if email and password are correct
        document.location.replace("/");
      } else {
        // alert the user if either email or password is incorrect
        alert("Failed to log in");
      }
    }
  };
  
  // add event listener to login button
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  