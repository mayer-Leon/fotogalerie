function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile.innerHTML = 'Klick auf die Fotos um ihre Kameraeinstellungen zu sehen!';
    }
}

function pic03434Function() {
    pic03434Hover.style.display = "flex";
}
function pic03434FunctionOut() {
    pic03434Hover.style.display = "none";
}


function pic03587Function() {
    pic03587Hover.style.display = "flex";
}
function pic03587FunctionOut() {
    pic03587Hover.style.display = "none";
}


function pic03281Function() {
    pic03281Hover.style.display = "flex";
}
function pic03281FunctionOut() {
    pic03281Hover.style.display = "none";
}


function pic03279Function() {
    pic03279Hover.style.display = "flex";
}
function pic03279FunctionOut() {
    pic03279Hover.style.display = "none";
}

changeContentForMobile();