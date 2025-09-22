document.querySelectorAll(".nav-btn")[0].addEventListener(
    "click", previousSlide
)


document.querySelectorAll(".nav-btn")[1].addEventListener(
    "click", nextSlide)

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

let labels = ["Skills", "Hobbies"]

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';

  document.querySelector(".previous-button").innerHTML = labels[currentIndex == 0? currentIndex+1: currentIndex - 1];
  document.querySelector(".next-button").innerHTML = labels[currentIndex == 0? currentIndex+1: currentIndex - 1];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);


console.log(document.querySelector(".next-button").innerHTML);





//Handles my portfolio section

const username = "Nganga02"; // <-- replace with your GitHub username
const projectList = document.getElementById("project-list");

// Option 1: Filter by topic
const filterTopic = "portfolio";  

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
  headers: {
    "Accept": "application/vnd.github.mercy-preview+json" // needed for topics
  }
})
  .then(response => response.json())
  .then(repos => {
    projectList.innerHTML = ""; // clear "loading..."
    repos
      .filter(repo => repo.topics && repo.topics.includes(filterTopic)) // only repos with topic
      .forEach(repo => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.textContent = repo.name;
        li.appendChild(link);

        if (repo.description) {
          const desc = document.createElement("p");
          desc.textContent = repo.description;
          li.appendChild(desc);
        }

        projectList.appendChild(li);
      });

    if (projectList.innerHTML === "") {
      projectList.innerHTML = `<li>No repos found with topic "${filterTopic}".</li>`;
    }
  })
  .catch(error => {
    projectList.innerHTML = "<li>Failed to load projects.</li>";
    console.error("Error fetching repos:", error);
  });