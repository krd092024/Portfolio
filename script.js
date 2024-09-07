const images = [
    "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg", 
    "https://bestfriendspetcare.com/wp-content/uploads/2020/06/puppy-play-group-beagle.jpg", 
    "https://www.bowmanvet.com/blog/wp-content/uploads/2023/03/iStock-639961896-2000x1333.jpg"
];
let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById("slideshow-image");
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds