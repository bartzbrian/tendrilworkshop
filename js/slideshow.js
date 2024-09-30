let slideIndex = [];
let slideId = [];

// Automatically populate slideId array based on the slideshow containers
document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    // Get the class name of the first slide in the container
    let slideElement = container.querySelector('[class^="mySlides"]');

    // Ensure the slideElement exists before trying to access its class
    if (slideElement) {
        let className = slideElement.classList[0]; // Get the class name
        slideId.push(className);
        slideIndex.push(1); // Initialize slideIndex for each slideshow
        console.log(`Found slide class: ${className}`);
        showSlides(1, index); // Show the first slide in each slideshow
    } else {
        console.error(`No slide found in container ${index}`);
    }
});

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;

    // Get the elements by the class name in slideId array
    let x = document.getElementsByClassName(slideId[no]);



    // Check if there are any slides
    if (x.length === 0) {
        console.error(`No slides found for class: ${slideId[no]}`);
        return;
    }

    // Ensure slideIndex stays within bounds
    if (n > x.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = x.length; }

    // Hide all slides
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Show the current slide
    if (x[slideIndex[no] - 1]) {
        x[slideIndex[no] - 1].style.display = "block";
    } else {
        console.error(`Slide index out of bounds for class: ${slideId[no]}`);
    }
}
