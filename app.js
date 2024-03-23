// app.js

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the theme button
    const themeButton = document.getElementById("theme-button");

    // Check the initial theme and set the button icon accordingly
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
        themeButton.innerHTML = '<i class="ri-sun-fill"></i>';
    } else {
        themeButton.innerHTML = '<i class="ri-moon-fill"></i>';
    }

    // Add a click event listener to the theme button
    themeButton.addEventListener("click", function(event) {
        // Prevent default action
        event.preventDefault();
        event.stopPropagation();

        // Toggle between dark and light themes
        if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
            document.documentElement.setAttribute("data-bs-theme", "light");
            themeButton.innerHTML = '<i class="ri-moon-fill"></i>';
        } else {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            themeButton.innerHTML = '<i class="ri-sun-fill"></i>';
        }
    });
});
