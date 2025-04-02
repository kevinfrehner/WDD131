document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lastUpdated").textContent = new Date().toLocaleDateString();
    let slideIndex = 0;
    let slides = document.getElementsByClassName("slide");

    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = n;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    document.getElementById("prev").addEventListener("click", function () {
        showSlides(slideIndex - 1);
    });
    document.getElementById("next").addEventListener("click", function () {
        showSlides(slideIndex + 1);
    });

    showSlides(slideIndex);   
});
