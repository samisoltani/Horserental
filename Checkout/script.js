let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lasttname");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let address = document.querySelector("#address");
let firstname2 = document.querySelector("#firstname2");
let lastname2 = document.querySelector("#lasttname2");
let email2 = document.querySelector("#email2");
let tel2 = document.querySelector("#tel2");
let address2 = document.querySelector("#address2");
let successMsg = document.querySelector("#form-message");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.textContent = firstname.value + "" + lastname.value + " , the payment page will open in a minute. Thanks for your patience! ";
    successMsg.classList.remove("hidden");

    firstname.value = "";
    lastname.value = "";
    email.value = "";
    tel.value = "";
    passportnumber.value = "";
    address.value = "";
    firstname2.value = "";
    lastname2.value = "";
    email2.value = "";
    tel2.value = "";
    passportnumber2.value = "";
    address2.value = "";
})