const APIURL = 'https://api.github.com/users/'
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

getUser("florinpop17")
async function getUser(username){
  const resp = await fetch(APIURL + username)
  const respData = await resp.json()

  createUserCard(respData)
  getRepos(username)
}

async function getRepos(username){
  const resp = await fetch(APIURL + username + "/repos")
  const respData = await resp.json();

  addReposToCard(respData)
}

function createUserCard(user){
const cardHTML = `
<div class="card">
    <div class="card-flex">
      <div><img class="avatar" src="${user.avatar_url}" alt="${user.name}"/></div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <br>
        <p>${user.bio}</p>
      </div>
    </div>
    <div>
        <div>
          <div id="repos">
          </div>
          <div>
            <ul class="info">
              <li><i class="fa fa-heart-o" aria-hidden="true"></i> ${user.followers}</li>
              <li><i class="fa fa-heart" aria-hidden="true"></i> ${user.following}</li>
              <li><i class="fa fa-folder-o" aria-hidden="true"></i> ${user.public_repos}</li>
            </ul>
          </div>
        </div>
    </div>
`
main.innerHTML = cardHTML
}
function addReposToCard(repos){
  const reposEl = document.getElementById("repos")

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a")
      repoEl.classList.add("repo")
      repoEl.href = repo.html_url
      repoEl.target = "_blank"
      repoEl.innerText = repo.name

      reposEl.appendChild(repoEl)
    })
}
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const user = search.value
  if (user){
    getUser(user)
    search.value = ""
  }
})