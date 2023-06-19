const signupForm = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const redClassEl = document.getElementsByClassName("red");
const errors = document.getElementsByClassName("error");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function addingErrorMsg(el, errText, e) {
    let err = document.createElement("p");
    err.classList.add("error");
    el.parentElement.classList.add("red");
    err.innerText = errText;
    el.after(err);
    el.classList.add("red");
    e.preventDefault();
}

signupForm.addEventListener("submit", e => {
    while (redClassEl.length > 0) {
        redClassEl[0].classList.remove("red");
    }
    for (i = errors.length; i > 0; i--) {
        errors[0].remove();
    }
    if (firstName.value === "" || firstName.length === 0) {
        addingErrorMsg(firstName, "First Name cannot be empty", e);
    }

    if (lastName.value === "" || lastName.length === 0) {
        addingErrorMsg(lastName, "Last Name cannot be empty", e);
    }
    /*Despite being ill-advised, I changed type=email in HTML to type=text in order for custom email validation to work  */
    if (!email.value.match(emailRegex)) {
        addingErrorMsg(email, "Looks like this is not an email", e);
    }

    if (password.value === "" || password.length === 0) {
        addingErrorMsg(password, "Password cannot be empty", e);
    }
})