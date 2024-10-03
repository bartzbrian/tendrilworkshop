function toggleFilter() {
    const filter = document.getElementById('filter');
    const children = Array.from(filter.children).slice(1);

    if (filter.style.height === '40px') {
        console.log("toggled-filter");
        filter.style.height = '175px';
        filter.firstElementChild.firstElementChild.innerHTML = "Filter -";
        // filter.firstElementChild.firstElementChild.style.borderBottom = "3px solid #061405";
        children.forEach(child => {
            child.style.display = "block"
        });
    } else {
        filter.style.height = '40px';
        children.forEach(child => {
            child.style.display = "none"
        });
        filter.firstElementChild.firstElementChild.innerHTML = "Filter +";

    }

}

function showAll() {
    // Select all product elements and display them
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'block';
    });
    toggleFilter();
}

function filterCategory(category) {
    // Hide all products first
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'none';
    });

    // Show only products that match the selected category
    const filteredProducts = document.querySelectorAll(`.product[data-category='${category}']`);
    filteredProducts.forEach(product => {
        product.style.display = 'block';
    });
    toggleFilter();
}

// Call showAll() initially to display all products
showAll();