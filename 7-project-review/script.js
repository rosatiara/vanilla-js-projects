// array for reviews
const reviews = [
  {
    id: 1,
    reviewerName: "Christian Sanchez",
    job: "Software Engineer @ Google",
    img: "img/pic1.jpg",
    description: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."'
  },
  {
    id: 2,
    reviewerName: "Bruno La Bruna",
    job: "Graphic Designer @ QWERTY",
    img: "img/pic2.jpg",
    description: '"Blandit turpis tortor facilisis adipiscing sed sit, mi eros libero sagittis accumsan est erat, quisque venenatis laoreet hendrerit nulla."'
  },
  {
    id: 3,
    reviewerName: "Stephanie Grace",
    job: "IT Security Engineer @ Quora",
    img: "img/pic3.jpg",
    description: '"Pulvinar quis accumsan dictumst sodales magnis nostra odio gravida litora nisl cras, aliquet vehicula convallis iaculis tincidunt posuere ante ultricies cubilia nam donec."'
  },
  {
    id: 4,
    reviewerName: "Timothy Andrew",
    job: "Web Developer @ Facebook",
    img: "img/pic4.jpg",
    description: '"Habitasse feugiat lacus sed class posuere diam purus et porta nec fusce molestie, tristique morbi hendrerit integer duis massa ac est tortor leo. "'
  },
  {
    id: 5,
    reviewerName: "Jack Winskey",
    job: "iOS Developer @ Facebook",
    img: "img/pic5.jpg",
    description: '"Convallis posuere fusce duis dolor natoque risus turpis volutpat, libero magna augue sem lorem ut blandit nec sagittis, dictumst leo eleifend lectus dui maecenas tempus."'
  },
  {
    id: 6,
    reviewerName: "Jason Katniss",
    job: "UI Designer @ Google",
    img: "img/pic6.jpg",
    description: '"Fermentum id bibendum eleifend mi mus neque malesuada aliquet, dolor sodales maecenas tempor quis pellentesque suscipit, diam hendrerit ut sapien fames enim turpis."'
  },
  {
    id: 7,
    reviewerName: "Melissa Susan",
    job: "UI/UX Designer @ Facebook",
    img: "img/pic7.jpg",
    description: '"Sit pretium tristique turpis netus diam rutrum posuere eget at, mus dictum potenti ad magnis aenean nostra natoque, erat varius volutpat magna et fermentum semper porttitor."'
  },
  {
    id: 8,
    reviewerName: "Brittany Eve",
    job: "Data Scientist @ Quora",
    img: "img/pic8.jpg",
    description: '"Montes ultrices posuere sollicitudin ridiculus rhoncus, consequat euismod nisi arcu bibendum litora, lorem dis metus senectus."'
  },
  {
    id: 9,
    reviewerName: "Johnson Blue",
    job: "Tech Lead @ Twitter",
    img: "img/pic9.jpg",
    description: '"Penatibus sed turpis fames gravida ipsum ut elit, sem ultrices vestibulum nam ornare praesent leo primis, euismod aptent et nec nascetur tincidunt."'
  },
  {
    id: 10,
    reviewerName: "Sophia Drew",
    job: "Senior Android Developer @ Pinterest",
    img: "img/pic10.jpg",
    description: '"Convallis posuere fusce duis dolor natoque risus turpis volutpat, libero magna augue sem lorem ut blandit nec sagittis, dictumst leo eleifend lectus dui maecenas tempus."'
  }
]

const image = document.querySelector(".reviewerImg")
const author = document.getElementById("reviewerName")
const job = document.getElementById("job")
const description = document.getElementById("reviews")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

let currentReviewer = 0;

window.addEventListener("DOMContentLoaded", function(){
  showReviewer(currentReviewer)
})
  
  
function showReviewer(){
    const reviewer = reviews[currentReviewer] // 1st reviewer
    image.src = reviewer.img
    author.textContent = reviewer.reviewerName
    job.textContent = reviewer.job
    description.textContent = reviewer.description
}

nextBtn.addEventListener("click", function(){
  currentReviewer++
  if(currentReviewer > reviews.length - 1){
    currentReviewer = 0
  }
  showReviewer(currentReviewer)
})

prevBtn.addEventListener("click", function(){
  currentReviewer--
  if(currentReviewer < 0){
    currentReviewer = reviews.length - 1
  }
  showReviewer(currentReviewer)
})