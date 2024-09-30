function toggleDescription(productNumber) {
    const description = document.getElementById(`product${productNumber}`);
    console.log(`product'${productNumber}'`);
    if (description.style.display == 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}