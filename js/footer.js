document.addEventListener("DOMContentLoaded", function () {
    function adjustFooterPosition() {
        const bodyHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight * 0.8;  // 80% of the viewport height
        const footer = document.querySelector('footer');

        if (bodyHeight < viewportHeight) {
            footer.style.position = 'absolute';
            footer.style.bottom = '0';
            footer.style.width = '100%';  // Optional: Ensures the footer stretches across the full viewport width
        } else {
            footer.style.position = 'relative';  // Reset footer position when content exceeds 80% of the viewport height
        }
    }

    // Run the function on load and on window resize
    adjustFooterPosition();
    window.addEventListener('resize', adjustFooterPosition);
});
