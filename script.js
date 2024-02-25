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

    
    if (windowWidth <= 480) {
        horizontal.forEach(element => {
            element.style.width = "100%";
        });
    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
        });
    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
        });
    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
        });
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

function deactivateHover() {
    document.querySelectorAll(".metaData").forEach(element => {
        element.style.backgroundColor = "transparent";
        element.style.color = "transparent";
    });
    desktopMobile.style.display = "none";
    deactivateButton.style.display = "none";
    activateButton.style.display = "inline";
    desktopMovbileClick.style.marginTop = "16px";
}

function activateHover() {
    location.reload();
}

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;