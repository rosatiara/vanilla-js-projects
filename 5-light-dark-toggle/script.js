const sunMoonContainer = document.querySelector(".sun-moon-container") //select the sun-moon-container class


// run this function everytime the toggle-button is clicked
document.querySelector(".toggle-button").addEventListener("click", function(){
  // set the body class as "dark"
  document.body.classList.toggle("dark")

  // make the rotation always to the right (the +180 part)
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"))
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180)
})