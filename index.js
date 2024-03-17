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