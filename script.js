function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile.innerHTML = 'Klick auf Fotos um ihre Kameraeinstellungen zu sehen!';
    }
}

function adjustContent() {
    let windowWidth = window.innerWidth;
    let horizontal = document.querySelectorAll(".horHor");

    if (windowWidth < 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
        });
    } else {
        horizontal.forEach(element => {
            element.style.width = "45%";
        });
    }
}


window.onload = adjustContent();
window.onresize = adjustContent();


function pic03587Function() {
    pic03587Hover.style.display = "flex";
}
function pic03587FunctionOut() {
    pic03587Hover.style.display = "none";
}


function pic03434Function() {
    pic03434Hover.style.display = "flex";
}
function pic03434FunctionOut() {
    pic03434Hover.style.display = "none";
}


function pic03281Function() {
    pic03281Hover.style.display = "flex";
}
function pic03281FunctionOut() {
    pic03281Hover.style.display = "none";
}


function pic03878Function() {
    pic03878Hover.style.display = "flex";
}
function pic03878FunctionOut() {
    pic03878Hover.style.display = "none";
}


function pic03279Function() {
    pic03279Hover.style.display = "flex";
}
function pic03279FunctionOut() {
    pic03279Hover.style.display = "none";
}


function pic03828Function() {
    pic03828Hover.style.display = "flex";
}
function pic03828FunctionOut() {
    pic03828Hover.style.display = "none";
}

function deactivateHover() {
    document.querySelectorAll(".metaData").forEach(element => {
        element.style.backgroundColor = "transparent";
        element.style.color = "transparent";
    });
    desktopMobile.style.display = "none";
    deactivateButton.style.display = "none";
    activateButton.style.display = "inline";
}

function activateHover() {
    location.reload();
}

changeContentForMobile();
