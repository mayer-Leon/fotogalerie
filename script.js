function adjustContent() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let horizontal = document.querySelectorAll(".horHor");
    let vertical = document.querySelectorAll(".verVer");
    let fullScreenButton = document.querySelectorAll(".fullScreen");
    let topic = document.querySelectorAll(".topic");
    let welcome = document.querySelectorAll(".welcome");
    let images = document.querySelectorAll('img');
    


changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;

    if (windowWidth <= 480) {
        horizontal.forEach(element => {
            element.style.width = "95%";
            liege.style.width = "95%";
        });

        vertical.forEach(element => {
            element.style.width = "95%";
        });

        topic.forEach(element => {
            element.style.fontSize = "1.4rem";
        });

        fullScreenButton.forEach(element => {
            element.style.display = "none";
        });

        images.forEach(element => {
            element.style.borderRadius = "6px";
        });

    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
            liege.style.width = "90%";
        });

        vertical.forEach(element => {
            element.style.width = "90%";
        });

        topic.forEach(element => {
            element.style.fontSize = "1.4rem";
        });

        fullScreenButton.forEach(element => {
            element.style.display = "none";
        });

        images.forEach(element => {
            element.style.borderRadius = "6px";
        });

        topic.style.marginTop = "0px";

    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
            referenceElementOne.parentElement.insertBefore(elementToMoveOne, referenceElementOne);
            referenceElementTwo.parentElement.insertBefore(elementToMoveTwo, referenceElementTwo);
        });

        welcome.forEach(element => {
            element.style.fontSize = "1.5rem";
        });

        unnötigerText.style.display = "inline-block";
    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
            liege.style.width = "calc(90% + 20px)";
            abstand2.style.display = "block";
            abstand1.style.display = "block";
            abstand3.style.display = "block";
            abstand4.style.display = "block";
            abstand6.style.display = "block";
            abstand5.style.display = "block";
        });

        vertical.forEach(element => {
            element.style.width = "calc(20% - 3px)";
        });

        welcome.forEach(element => {
            element.style.fontSize = "1.5rem";
        });

        unnötigerText.style.display = "inline-block";
    }
    
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile.style.color = "#ffffff";
    }
}

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;


function playAudio(url) {
    new Audio(url).play();
}


function deactivateHover() {
    document.querySelectorAll(".metaData").forEach(element => {
        element.style.backgroundColor = "transparent";
        element.style.color = "transparent";
    });

    document.querySelectorAll(".fullScreen").forEach(element => {
        element.style.backgroundColor = "#b5b5b5ea";
    });

    desktopMobile.style.display = "none";
    deactivateButton.style.display = "none";
    activateButton.style.display = "inline";
    desktopMovbileClick.style.marginTop = "16px";
}

function activateHover() {
    location.reload();
}

document.querySelectorAll('#toC a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior of anchor tag
      const targetId = this.getAttribute('href').substring(1); // Get the id of the target section
      const targetElement = document.getElementById(targetId); // Find the target element
      if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('#toC1 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior of anchor tag
      const targetId = this.getAttribute('href').substring(1); // Get the id of the target section
      const targetElement = document.getElementById(targetId); // Find the target element
      if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  let scrollButton = document.getElementById("scrollToTopButton");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        scrollButton.style.opacity = "1";
        scrollButton.style.transition = "0.5s";
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.transition = "0.5s";
    }
  };
  
function fullScreen() {
    alert("Diese Funktion ist bald verfügbar!");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  fullScreenGalerie.style.display = "inline";
  fullScreenGalerie.requestFullscreen();
  document.title = "Einzelansicht";
  scrollTop =
  window.pageYOffset ||
  document.documentElement.scrollTop;
scrollLeft =
  window.pageXOffset ||
  document.documentElement.scrollLeft,

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

var closeButton = document.getElementById("close");

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

function closeGalerie() {
    fullScreenGalerie.style.display = "none";
    window.reload;
    document.title = "Fotogalerie Leon Mayer";
    window.onscroll = function () {};
    document.exitFullscreen();
}

document.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.key === "ArrowLeft" || event.key === "a") {
      prev.click();
    }
    else if (event.key === "ArrowRight" || event.key === "d") {
      next.click();
    }
    else if (event.key === "Escape") {
      if (window.fullscreenElement) {
        closeButton.click();
        window.exitFullscreen();
      }
    }
});