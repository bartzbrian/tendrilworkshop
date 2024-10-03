// Function to check if an element contains a div
function checkForMinicartV2() {
    // Select all elements in the DOM
    const allElements = document.querySelectorAll('*');
    const desktopNavBar = document.getElementById("desktop-nav");

    // Loop through each element
    allElements.forEach(element => {
        // Check if the element's ID contains "MinicartV2"
        if (element.id && element.id.includes('MinicartV2')) {
            // Check if the element contains a <div> child
            if (element.querySelector('div')) {
                //there is a cart
                desktopNavBar.style.right = '12%';
            } else {
                desktopNavBar.style.right = '3%';
            }
        }
    });
}

// Run the function continuously after the document loads
window.addEventListener('DOMContentLoaded', () => {
    setInterval(checkForMinicartV2, 50); // Check every 1 second
});
