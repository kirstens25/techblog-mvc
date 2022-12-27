const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector("#user_name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (user_name && email && password) {
      // create a post request with the details entered
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ user_name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // redirect to homepage
        document.location.replace("/dashboard");
      } else {
        //  alert user if request has failed
        alert("Failed to sign in");
      }
    }
  };
  
  // event listener for the submit button
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signUpFormHandler);