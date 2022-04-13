// Declare a variable to easily grab the username input
let username = document.querySelector("#username");
// The function listens for when the form is submitted
// Prevent the default form submission
// Replace the text content of the heading with the input's value
// Clear the input value
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("h1").textContent = "Hello " + username.value + "!";
    username.value = "";
})