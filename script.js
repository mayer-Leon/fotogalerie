function adjustContent() {
    let windowWidth = window.innerWidth;
    let horizontal = document.querySelectorAll(".horHor");
    let vertical = document.querySelectorAll(".verVer");
    let fullScreenButton = document.querySelectorAll(".fullScreen");

    
    if (windowWidth <= 480) {
        horizontal.forEach(element => {
            element.style.width = "95%";
            liege.style.width = "95%";
        });

        fullScreenButton.forEach(element => {
            element.style.display = "none";
        });

        vertical.forEach(element => {
            element.style.width = "95%";
        });
    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
            liege.style.width = "90%";
        });

        fullScreenButton.forEach(element => {
            element.style.display = "none";
        });

        vertical.forEach(element => {
            element.style.width = "90%";
        });
    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
            referenceElement.parentNode.insertBefore(elementToMove, referenceElement);
        });
    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
            liege.style.width = "calc(90% + 20px)";
            abstand2.style.display = "block";
            abstand1.style.display = "block";
            abstand3.style.display = "block";
            abstand4.style.display = "block";
        });

        vertical.forEach(element => {
            element.style.width = "calc(20% - 3px)";
        });
    }
    
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile3.innerHTML = 'Klick auf Fotos um ihre Kameraeinstellungen zu sehen.';
    }
}


function pic03587Function() {
    pic03587Hover.style.opacity = "1";
    pic03587Hover.style.transition = "0.2s";

}
function pic03587FunctionOut() {
    pic03587Hover.style.opacity = "0";
    pic03587Hover.style.transition = "0.2s";
}


function pic03434Function() {
    pic03434Hover.style.opacity = "1";
    pic03434Hover.style.transition = "0.2s";
}
function pic03434FunctionOut() {
    pic03434Hover.style.opacity = "0";
    pic03434Hover.style.transition = "0.2s";
}


function pic03281Function() {
    pic03281Hover.style.opacity = "1";
    pic03281Hover.style.transition = "0.2s";
}
function pic03281FunctionOut() {
    pic03281Hover.style.opacity = "0";
    pic03281Hover.style.transition = "0.2s";
}


function pic03493Function() {
    pic03493Hover.style.opacity = "1";
    pic03493Hover.style.transition = "0.2s";
}
function pic03493FunctionOut() {
    pic03493Hover.style.opacity = "0";
    pic03493Hover.style.transition = "0.2s";
}


function pic03279Function() {
    pic03279Hover.style.opacity = "1";
    pic03279Hover.style.transition = "0.2s";
}
function pic03279FunctionOut() {
    pic03279Hover.style.opacity = "0";
    pic03279Hover.style.transition = "0.2s";
}


function pic03828Function() {
    pic03828Hover.style.opacity = "1";
    pic03828Hover.style.transition = "0.2s";
}
function pic03828FunctionOut() {
    pic03828Hover.style.opacity = "0";
    pic03828Hover.style.transition = "0.2s";
}


function pic04332Function() {
    pic04332Hover.style.opacity = "1";
    pic04332Hover.style.transition = "0.2s";
}
function pic04332FunctionOut() {
    pic04332Hover.style.opacity = "0";
    pic04332Hover.style.transition = "0.2s";
}


function pic04061Function() {
    pic04061Hover.style.opacity = "1";
    pic04061Hover.style.transition = "0.2s";
}
function pic04061FunctionOut() {
    pic04061Hover.style.opacity = "0";
    pic04061Hover.style.transition = "0.2s";
}


function pic03804Function() {
    pic03804Hover.style.opacity = "1";
    pic03804Hover.style.transition = "0.2s";
}
function pic03804FunctionOut() {
    pic03804Hover.style.opacity = "0";
    pic03804Hover.style.transition = "0.2s";
}


function pic04149Function() {
    pic04149Hover.style.opacity = "1";
    pic04149Hover.style.transition = "0.2s";
}
function pic04149FunctionOut() {
    pic04149Hover.style.opacity = "0";
    pic04149Hover.style.transition = "0.2s";
}


function img08201Function() {
    img08201Hover.style.opacity = "1";
    img08201Hover.style.transition = "0.2s";
}
function img08201FunctionOut() {
    img08201Hover.style.opacity = "0";
    img08201Hover.style.transition = "0.2s";
}


function img08322Function() {
    img08322Hover.style.opacity = "1";
    img08322Hover.style.transition = "0.2s";
}
function img08322FunctionOut() {
    img08322Hover.style.opacity = "0";
    img08322Hover.style.transition = "0.2s";
}


function img08440Function() {
    img08440Hover.style.opacity = "1";
    img08440Hover.style.transition = "0.2s";
}
function img08440FunctionOut() {
    img08440Hover.style.opacity = "0";
    img08440Hover.style.transition = "0.2s";
}


function img08172Function() {
    img08172Hover.style.opacity = "1";
    img08172Hover.style.transition = "0.2s";
}
function img08172FunctionOut() {
    img08172Hover.style.opacity = "0";
    img08172Hover.style.transition = "0.2s";
}


function img08309Function() {
    img08309Hover.style.opacity = "1";
    img08309Hover.style.transition = "0.2s";
}
function img08309FunctionOut() {
    img08309Hover.style.opacity = "0";
    img08309Hover.style.transition = "0.2s";
}


function img089391Function() {
    img089391Hover.style.opacity = "1";
    img089391Hover.style.transition = "0.2s";
}
function img089391FunctionOut() {
    img089391Hover.style.opacity = "0";
    img089391Hover.style.transition = "0.2s";
}


function img07931Function() {
    img07931Hover.style.opacity = "1";
    img07931Hover.style.transition = "0.2s";
}
function img07931FunctionOut() {
    img07931Hover.style.opacity = "0";
    img07931Hover.style.transition = "0.2s";
}


function img08915Function() {
    img08915Hover.style.opacity = "1";
    img08915Hover.style.transition = "0.2s";
}
function img08915FunctionOut() {
    img08915Hover.style.opacity = "0";
    img08915Hover.style.transition = "0.2s";
}


function img08244Function() {
    img08244Hover.style.opacity = "1";
    img08244Hover.style.transition = "0.2s";
}
function img08244FunctionOut() {
    img08244Hover.style.opacity = "0";
    img08244Hover.style.transition = "0.2s";
}


function img08076Function() {
    img08076Hover.style.opacity = "1";
    img08076Hover.style.transition = "0.2s";
}
function img08076FunctionOut() {
    img08076Hover.style.opacity = "0";
    img08076Hover.style.transition = "0.2s";
}


function img08048Function() {
    img08048Hover.style.opacity = "1";
    img08048Hover.style.transition = "0.2s";
}
function img08048FunctionOut() {
    img08048Hover.style.opacity = "0";
    img08048Hover.style.transition = "0.2s";
}


function img04748Function() {
    img04748Hover.style.opacity = "1";
    img04748Hover.style.transition = "0.2s";
}
function img04748FunctionOut() {
    img04748Hover.style.opacity = "0";
    img04748Hover.style.transition = "0.2s";
}


function img04663Function() {
    img04663Hover.style.opacity = "1";
    img04663Hover.style.transition = "0.2s";
}
function img04663FunctionOut() {
    img04663Hover.style.opacity = "0";
    img04663Hover.style.transition = "0.2s";
}


function img04967Function() {
    img04967Hover.style.opacity = "1";
    img04967Hover.style.transition = "0.2s";
}
function img04967FunctionOut() {
    img04967Hover.style.opacity = "0";
    img04967Hover.style.transition = "0.2s";
}


function img04933Function() {
    img04933Hover.style.opacity = "1";
    img04933Hover.style.transition = "0.2s";
}
function img04933FunctionOut() {
    img04933Hover.style.opacity = "0";
    img04933Hover.style.transition = "0.2s";
}


function img04699Function() {
    img04699Hover.style.opacity = "1";
    img04699Hover.style.transition = "0.2s";
}
function img04699FunctionOut() {
    img04699Hover.style.opacity = "0";
    img04699Hover.style.transition = "0.2s";
}


function img04913Function() {
    img04913Hover.style.opacity = "1";
    img04913Hover.style.transition = "0.2s";
}
function img04913FunctionOut() {
    img04913Hover.style.opacity = "0";
    img04913Hover.style.transition = "0.2s";
}


function img04691Function() {
    img04691Hover.style.opacity = "1";
    img04691Hover.style.transition = "0.2s";
}
function img04691FunctionOut() {
    img04691Hover.style.opacity = "0";
    img04691Hover.style.transition = "0.2s";
}


function img04688Function() {
    img04688Hover.style.opacity = "1";
    img04688Hover.style.transition = "0.2s";
}
function img04688FunctionOut() {
    img04688Hover.style.opacity = "0";
    img04688Hover.style.transition = "0.2s";
}


function img04754Function() {
    img04754Hover.style.opacity = "1";
    img04754Hover.style.transition = "0.2s";
}
function img04754FunctionOut() {
    img04754Hover.style.opacity = "0";
    img04754Hover.style.transition = "0.2s";
}


function pic05543Function() {
    pic05543Hover.style.opacity = "1";
    pic05543Hover.style.transition = "0.2s";
}
function pic05543FunctionOut() {
    pic05543Hover.style.opacity = "0";
    pic05543Hover.style.transition = "0.2s";
}


function img00836Function() {
    img00836Hover.style.opacity = "1";
    img00836Hover.style.transition = "0.2s";
}
function img00836FunctionOut() {
    img00836Hover.style.opacity = "0";
    img00836Hover.style.transition = "0.2s";
}


function tac00262Function() {
    tac00262Hover.style.opacity = "1";
    tac00262Hover.style.transition = "0.2s";
}
function tac00262FunctionOut() {
    tac00262Hover.style.opacity = "0";
    tac00262Hover.style.transition = "0.2s";
}


function tac00332Function() {
    tac00332Hover.style.opacity = "1";
    tac00332Hover.style.transition = "0.2s";
}
function tac00332FunctionOut() {
    tac00332Hover.style.opacity = "0";
    tac00332Hover.style.transition = "0.2s";
}


function pic07159Function() {
    pic07159Hover.style.opacity = "1";
    pic07159Hover.style.transition = "0.2s";
}
function pic07159FunctionOut() {
    pic07159Hover.style.opacity = "0";
    pic07159Hover.style.transition = "0.2s";
}


function pic07143Function() {
    pic07143Hover.style.opacity = "1";
    pic07143Hover.style.transition = "0.2s";
}
function pic07143FunctionOut() {
    pic07143Hover.style.opacity = "0";
    pic07143Hover.style.transition = "0.2s";
}


function pic07378Function() {
    pic07378Hover.style.opacity = "1";
    pic07378Hover.style.transition = "0.2s";
}
function pic07378FunctionOut() {
    pic07378Hover.style.opacity = "0";
    pic07378Hover.style.transition = "0.2s";
}


function pic06702Function() {
    pic06702Hover.style.opacity = "1";
    pic06702Hover.style.transition = "0.2s";
}
function pic06702FunctionOut() {
    pic06702Hover.style.opacity = "0";
    pic06702Hover.style.transition = "0.2s";
}


function tac00328Function() {
    tac00328Hover.style.opacity = "1";
    tac00328Hover.style.transition = "0.2s";
}
function tac00328FunctionOut() {
    tac00328Hover.style.opacity = "0";
    tac00328Hover.style.transition = "0.2s";
}


function tac00059Function() {
    tac00059Hover.style.opacity = "1";
    tac00059Hover.style.transition = "0.2s";
}
function tac00059FunctionOut() {
    tac00059Hover.style.opacity = "0";
    tac00059Hover.style.transition = "0.2s";
}


function pic03197Function() {
    pic03197Hover.style.opacity = "1";
    pic03197Hover.style.transition = "0.2s";
}
function pic03197FunctionOut() {
    pic03197Hover.style.opacity = "0";
    pic03197Hover.style.transition = "0.2s";
}


function pic03237Function() {
    pic03237Hover.style.opacity = "1";
    pic03237Hover.style.transition = "0.2s";
}
function pic03237FunctionOut() {
    pic03237Hover.style.opacity = "0";
    pic03237Hover.style.transition = "0.2s";
}


function dsc02909Function() {
    dsc02909Hover.style.opacity = "1";
    dsc02909Hover.style.transition = "0.2s";
}
function dsc02909FunctionOut() {
    dsc02909Hover.style.opacity = "0";
    dsc02909Hover.style.transition = "0.2s";
}


function pic03690Function() {
    pic03690Hover.style.opacity = "1";
    pic03690Hover.style.transition = "0.2s";
}
function pic03690FunctionOut() {
    pic03690Hover.style.opacity = "0";
    pic03690Hover.style.transition = "0.2s";
}


function pic08875Function() {
    pic08875Hover.style.opacity = "1";
    pic08875Hover.style.transition = "0.2s";
}
function pic08875FunctionOut() {
    pic08875Hover.style.opacity = "0";
    pic08875Hover.style.transition = "0.2s";
}


function pic03769Function() {
    pic03769Hover.style.opacity = "1";
    pic03769Hover.style.transition = "0.2s";
}
function pic03769FunctionOut() {
    pic03769Hover.style.opacity = "0";
    pic03769Hover.style.transition = "0.2s";
}


function dsc02802Function() {
    dsc02802Hover.style.opacity = "1";
    dsc02802Hover.style.transition = "0.2s";
}
function dsc02802FunctionOut() {
    dsc02802Hover.style.opacity = "0";
    dsc02802Hover.style.transition = "0.2s";
}


function img00227Function() {
    img00227Hover.style.opacity = "1";
    img00227Hover.style.transition = "0.2s";
}
function img00227FunctionOut() {
    img00227Hover.style.opacity = "0";
    img00227Hover.style.transition = "0.2s";
}


function dsc02227Function() {
    dsc02227Hover.style.opacity = "1";
    dsc02227Hover.style.transition = "0.2s";
}
function dsc02227FunctionOut() {
    dsc02227Hover.style.opacity = "0";
    dsc02227Hover.style.transition = "0.2s";
}


function img06755Function() {
    img06755Hover.style.opacity = "1";
    img06755Hover.style.transition = "0.2s";
}
function img06755FunctionOut() {
    img06755Hover.style.opacity = "0";
    img06755Hover.style.transition = "0.2s";
}


function img06954Function() {
    img06954Hover.style.opacity = "1";
    img06954Hover.style.transition = "0.2s";
}
function img06954FunctionOut() {
    img06954Hover.style.opacity = "0";
    img06954Hover.style.transition = "0.2s";
}


function img01974Function() {
    img01974Hover.style.opacity = "1";
    img01974Hover.style.transition = "0.2s";
}
function img01974FunctionOut() {
    img01974Hover.style.opacity = "0";
    img01974Hover.style.transition = "0.2s";
}


function img00640Function() {
    img00640Hover.style.opacity = "1";
    img00640Hover.style.transition = "0.2s";
}
function img00640FunctionOut() {
    img00640Hover.style.opacity = "0";
    img00640Hover.style.transition = "0.2s";
}


function img06341Function() {
    img06341Hover.style.opacity = "1";
    img06341Hover.style.transition = "0.2s";
}
function img06341FunctionOut() {
    img06341Hover.style.opacity = "0";
    img06341Hover.style.transition = "0.2s";
}


function pic03031Function() {
    pic03031Hover.style.opacity = "1";
    pic03031Hover.style.transition = "0.2s";
}
function pic03031FunctionOut() {
    pic03031Hover.style.opacity = "0";
    pic03031Hover.style.transition = "0.2s";
}


function img20240033Function() {
    img20240033Hover.style.opacity = "1";
    img20240033Hover.style.transition = "0.2s";
}
function img20240033FunctionOut() {
    img20240033Hover.style.opacity = "0";
    img20240033Hover.style.transition = "0.2s";
}


function img20240048Function() {
    img20240048Hover.style.opacity = "1";
    img20240048Hover.style.transition = "0.2s";
}
function img20240048FunctionOut() {
    img20240048Hover.style.opacity = "0";
    img20240048Hover.style.transition = "0.2s";
}


function img20240030Function() {
    img20240030Hover.style.opacity = "1";
    img20240030Hover.style.transition = "0.2s";
}
function img20240030FunctionOut() {
    img20240030Hover.style.opacity = "0";
    img20240030Hover.style.transition = "0.2s";
}


function img20240049Function() {
    img20240049Hover.style.opacity = "1";
    img20240049Hover.style.transition = "0.2s";
}
function img20240049FunctionOut() {
    img20240049Hover.style.opacity = "0";
    img20240049Hover.style.transition = "0.2s";
}


function img20240050Function() {
    img20240050Hover.style.opacity = "1";
    img20240050Hover.style.transition = "0.2s";
}
function img20240050FunctionOut() {
    img20240050Hover.style.opacity = "0";
    img20240050Hover.style.transition = "0.2s";
}


function img04345Function() {
    img04345Hover.style.opacity = "1";
    img04345Hover.style.transition = "0.2s";
}
function img04345FunctionOut() {
    img04345Hover.style.opacity = "0";
    img04345Hover.style.transition = "0.2s";
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

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev.click();
    }
  });

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next.click();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
      event.preventDefault();
      prev.click();
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      if (window.fullscreenElement) {
        window.exitFullscreen();
        closeButton.click();
      }
    }
  });

document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
      event.preventDefault();
      next.click();
    }
  });