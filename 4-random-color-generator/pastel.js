const pastelColors = [
  "#FEC5BB", "#FCD5CE", "#FAE1DD", "#F8EDEB", "#E8E8E4", "#D8E2DC", "#ECE4DB", "#FFE5D9", "#FFD7BA", "#FEC89A",
  "#CCD5AE", "#E9EDC9", "#FEFAE0", "#FAEDCD","#EAE4E9", "#FFF1E6","#DFE7FD", "#E2ECE9","#FDE2E4", "#E2E2DF","#F7D9C4", "#C9E4DE"
]

const btn = document.getElementById("btn")
const colorGenerated = document.querySelector(".color")


function getRandomColor(){
  return Math.floor(Math.random() * pastelColors.length)
}

btn.addEventListener("click", function(){
  const randomColor = getRandomColor()
  console.log(randomColor)

  document.body.style.backgroundColor = pastelColors[randomColor]
  colorGenerated.textContent = pastelColors[randomColor]
})