document.addEventListener("DOMContentLoaded", function() {
    // Scroll event for changing header background color
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#00bcd4";
        } else {
            header.style.backgroundColor = "#333";
        }
    });

    // Hover event for changing menu item font color
    const navLinks = document.querySelectorAll("#main-nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            link.style.color = "#00bcd4";
        });

        link.addEventListener("mouseout", function() {
            link.style.color = "#fff";
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
