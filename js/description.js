function toggleDescription(productNumber) {
    // Select all elements with an id starting with "product"
    const allDescriptions = document.querySelectorAll('[id^="product"]');

    // Get the current description element
    const description = document.getElementById(`product${productNumber}`);

    // Check if the current description is already displayed
    const isAlreadyVisible = description.style.display === 'block';

    // Hide all descriptions
    allDescriptions.forEach(desc => {
        desc.style.display = 'none';
    });

    // Toggle the clicked description if it was not already visible
    if (!isAlreadyVisible) {
        description.style.display = 'block';
    }
}
