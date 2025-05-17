document.addEventListener("DOMContentLoaded", function () {
    function adjustFooterPosition() {
        const footer = document.querySelector('footer');
        const bodyHeight = document.body.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (bodyHeight < viewportHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.width = '100%';
        } else {
            footer.style.position = 'relative';
        }
    }

    adjustFooterPosition();
    window.addEventListener('resize', adjustFooterPosition);
});
