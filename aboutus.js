// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    var aboutUsButton = document.getElementById("aboutUsButton");
    var closeAboutPopupButton = document.getElementById("closePopup_about");
    var aboutPopup = document.getElementById("popup_about");
    var overlay = document.getElementById("overlay");

    // Function to display the about popup
    function displayAboutPopup() {
        aboutPopup.style.display = "block"; // Show the popup
        overlay.style.display = "block"; // Show the overlay
    }

    // Function to close the about popup
    function closeAboutPopup() {
        aboutPopup.style.display = "none"; 
        overlay.style.display = "none"; 
    }

    // Event listener for the 'About Us' button click
    aboutUsButton.addEventListener("click", function() {
        displayAboutPopup(); // Call the displayAboutPopup function
    });

    // Event listener for the 'Close' button click
    closeAboutPopupButton.addEventListener("click", function() {
        closeAboutPopup(); // Call the closeAboutPopup function
    });

    // Event listener for clicking outside the popup to close it
    overlay.addEventListener("click", function() {
        closeAboutPopup(); // Call the closeAboutPopup function
    });
});
