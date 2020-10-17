let email = {}, password = {}, signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password){
    return /^[A-Za-z]\w{7,14}$/.test(password);
}

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };


const handleFLoatingLabel = function() {
   
}

const handlePasswordSwitcher = function() {
    let checkbox = document.querySelector(`.c-toggle-password__checkbox`);
    let passwordInput = document.querySelector(`.c-toggle-password__input`);
    checkbox.addEventListener(`change`, function(){

        if(checkbox.checked){
            passwordInput.type = "text";
            
            console.log("checked")
        }
        else{
            passwordInput.type = "password";
            console.log("unchecked")
        }
    })
}

const doubleCheckEmailAddress = function(){
    if(!isEmpty(email.name.value) && isValidEmailAddress(email.name.value)){
        removeErrors(email.field, email.errorMessage);
    }
}

const doubleCheckPassword = function(){
    if(!isEmpty(password.name.value) && isValidPassword(password.name.value)){
        removeErrors(password.field, password.errorMessage);
    }
}

const enableListeners = function(){
    let emailVal = email.name;
    emailVal.addEventListener("blur", function(){
        if(isEmpty(emailVal.value) && !isValidEmailAddress(emailVal.value)){
            addErrors(email.field, email.errorMessage);
            email.field.addEventListener("input", doubleCheckEmailAddress);
        }
        else if(!isEmpty(emailVal.value) && !isValidEmailAddress(emailVal.value)){
            addErrors(email.field, email.errorMessage);
            email.field.addEventListener("input", doubleCheckEmailAddress);
        }
        else{
            removeErrors(email.field, email.errorMessage);
            email.field.removeEventListener("input", doubleCheckEmailAddress);
        }
    })


    let passwordVal = password.name;
    passwordVal.addEventListener("blur", function(){
        if(isEmpty(passwordVal.value) && !isValidPassword(passwordVal.value)){
            addErrors(password.field, password.errorMessage);
            password.field.addEventListener("input", doubleCheckPassword);
        }
        else if(!isEmpty(passwordVal.value) && !isValidPassword(passwordVal.value)){
            addErrors(password.field, password.errorMessage);
            password.field.addEventListener("input", doubleCheckPassword);
        }
        else{
            removeErrors(password.field, password.errorMessage);
            password.field.removeEventListener("input", doubleCheckPassword);
        }
    })

    signInButton.addEventListener("click", function(event){
        if(isValidEmailAddress(emailVal.value) && isValidPassword(passwordVal.value)){
            event.preventDefault();
            console.log(`Email: ${emailVal.value} Password: ${passwordVal.value}`);
        }
        else{
            event.preventDefault();
        }
    })
}

const addErrors = function(formField, errorField){
    formField.classList.add("has-error");
    errorField.innerHTML = "This field is required";
}

const removeErrors = function(formField, errorField){
    formField.classList.remove("has-error");
    errorField.innerHTML = "";
}

const getDOMElements = function(){
    email.name = document.querySelector(".js-email-value");
    email.errorMessage = document.querySelector(".js-email-error-message");
    email.field = document.querySelector(".js-form-email");

    password.name = document.querySelector(".js-password-value");
    password.errorMessage = document.querySelector(".js-password-error-message");
    password.field = document.querySelector(".js-form-password");

    signInButton = document.querySelector(".js-sign-in-button");

    email.errorMessage.innerHTML = "";
    password.errorMessage.innerHTML = "";

    enableListeners();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    handleFloatingLabel();
    handlePasswordSwitcher();


});