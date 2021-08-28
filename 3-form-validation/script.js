const form = document.getElementById("form-el")
const fullname = document.getElementById("fullname-el")
const username = document.getElementById("username-el")
const email = document.getElementById("email-el")
const phone = document.getElementById("phone-el")
const password = document.getElementById("password-el")
const confirmedPassword = document.getElementById("confirm-el")
const messageForUser = document.getElementById("message-el")
const submitBtn = document.getElementById("submit-el")
let formIsValid = false
let passwordMatch = false
let message = ""

// TO-DO
// 1. check validation
// 2. store data
// 3. process data

function submitClicked(){
  formIsValid = form.checkValidity()

  // text validation
  if (!formIsValid){
    messageForUser.textContent = "Please fill out all fields."
    messageForUser.style.color = "#FF8F5C"
  }
  
  // password validation
  if (password.value === confirmedPassword.value){
    passwordMatch = true
    password.style.borderColor = "green"
    confirmedPassword.style.borderColor = "green"
  }
    else{
      passwordMatch = false
      password.style.borderColor = "#FF8F5C"
      confirmedPassword.style.borderColor = "#FF8F5C"
      messageForUser.textContent = "Check your password."
    }

  // all validation
  if (formIsValid && passwordMatch){
    messageForUser.textContent = "Registration succeed!"
    messageForUser.style.color = "#8AA896"
  }
}

function storeData(){
  const usersData = {
    fullname: form.fullname.value,
    username: form.username.value,
    email: form.email.value,
    phone: form.phone.value
  }
  console.log(usersData)
}

function processingForm(e){
  e.preventDefault()
  submitClicked()

  if (formIsValid && passwordMatch){
    storeData()
  }
}

form.addEventListener("submit", processingForm)
