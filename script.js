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
            liege.style.width = "100%";
            großerBildschirm.style.display = "block";
        });
    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
            liege.style.width = "90%";
            großerBildschirm.style.display = "block";
        });
    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
        });
    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
            liege.style.width = "calc(90% + 20px)";
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