//show and hide hamburger menu items
document.addEventListener("click", menuHandler);

function menuHandler(event) {
  if (event.target.matches("#hamburger"))
    showMenu();

  else if (event.target.matches("#close-button"))
    hideMenu();
  
}

function showMenu() {
  const sideMenu = document.getElementById("side-menu");
  const hamburger = document.getElementById("hamburger");
  const closeButton = document.getElementById("close-button");
  hamburger.style.display = "none";
  closeButton.style.display = "block";
  sideMenu.classList.add("show-menu");
}

function hideMenu() {
  const sideMenu = document.getElementById("side-menu");
  const hamburger = document.getElementById("hamburger");
  const closeButton = document.getElementById("close-button");
  hamburger.style.display = "block";
  closeButton.style.display = "none";
  sideMenu.classList.remove("show-menu");
}

//change slide images

document.addEventListener("click", changeImage);
let carouselImage = document.querySelector(".carousel-image");

let images = [
  "images/userflow1.png",
  "images/userflow2.png",
  "images/userflow3.png",
  "images/userflow4.png"
];

let slideIndex = 0;

function changeImage(event) {

  if (event.target.matches("#next")) {
    next();
  }
  else if (event.target.matches("#prev")) {
    prev();
  }
}
function next(){
  //if slideIndex is greater than or equal to 3,
  //set slideIndex to -1 and decrement by 1
  //this sets slideIndex back to 0 when you hit next on the last slide
	if(slideIndex >= images.length-1)
    slideIndex = -1;
	  slideIndex++;
  return setSlide();			 
}

function prev(){
  //if slideIndex is less than or equal to 0, 
  //set slideIndex to 4 (images.length) and decrement by 1
  //this sets slideIndex to 3 so it goes back to the last slide on prev
  if(slideIndex <= 0)
    slideIndex = images.length;	
    //decrement by 1
	  slideIndex--;
  return setSlide();			 
}

function setSlide(){
	return carouselImage.setAttribute('src', images[slideIndex]);
}
//expand reporting metrics

document.addEventListener("click", toggleReport);

function toggleReport() {
  let reportingMetrics = document.querySelector(".metrics");
  if (event.target.matches(".toggle-report")) {
    reportingMetrics.classList.toggle("show-metrics");
  }
}