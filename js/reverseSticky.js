window.addEventListener('scroll', function () {
    const stickyElementOne = document.getElementById('gif-bar-left');
    const stickyElementTwo = document.getElementById('gif-bar-right');
    const footer = this.document.getElementById('footer');

    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    // Total offset from the bottom of the screen

    const offsetFromBottom = footer.offsetHeight + 80; // Total offset in pixels

    // Calculate the stop point (the position at which the bottom of the sticky element should stop)
    const stopPoint = height - offsetFromBottom;

    // Calculate the height of the sticky elements
    const stickyHeight = stickyElementOne.offsetHeight; // Assuming both elements have the same height

    // Calculate the bottom position of the sticky elements
    const stickyElementOneBottom = window.scrollY + stickyHeight + (.20 * window.innerHeight);

    // Check if the bottom of the sticky element has reached the stop point
    if (stickyElementOneBottom >= stopPoint) {
        // Set the element to fixed and position it above the offset
        stickyElementOne.style.position = 'absolute';
        stickyElementOne.style.top = (stopPoint - stickyHeight) + 'px'; // Fix it just above the bottom offset
        stickyElementTwo.style.position = 'absolute';
        stickyElementTwo.style.top = (stopPoint - stickyHeight) + 'px'; // Fix it just above the bottom offset
    } else {
        // While scrolling before the stop point, keep it in a fixed position at the top
        stickyElementOne.style.position = 'fixed';
        stickyElementOne.style.top = '20%'; // Fixed at 6% from the bottom of the viewport
        stickyElementTwo.style.position = 'fixed';
        stickyElementTwo.style.top = '20%'; // Fixed at 6% from the bottom of the viewport
    }
    console.log(height);
    console.log(offsetFromBottom);
    console.log('Scroll Y:', window.scrollY);
    console.log('Sticky Height:', stickyHeight);
    console.log('Bottom Position:', stickyElementOneBottom);
    console.log('Stop Point:', stopPoint);
});
