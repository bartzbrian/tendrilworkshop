document.addEventListener("DOMContentLoaded", function () {
    // Function to check viewport width and adjust padding accordingly
    function adjustCartWidgetPadding() {
        // Check if viewport width is less than 1024px
        if (window.innerWidth < 1024) {
            const counter = document.querySelector(".ec-minicart__counter");
            const widget = document.querySelector(".ec-cart-widget");

            // Ensure the elements exist on the page
            if (counter && widget) {
                // Get the computed display property of the counter element
                const counterDisplay = window.getComputedStyle(counter).display;

                // Set padding based on counter's display property
                if (counterDisplay === "none") {
                    widget.style.padding = "0px";
                } else {
                    widget.style.padding = "4px 8px 0px 0px";
                }
            }
        }
    }

    // Run the function once on page load
    setInterval(adjustCartWidgetPadding, 200); // Check every 500ms
    // Optional: Run on window resize to keep it responsive
    window.addEventListener("resize", adjustCartWidgetPadding);
});
