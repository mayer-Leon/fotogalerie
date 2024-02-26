function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile.innerHTML = 'Klick auf Fotos um ihre Kameraeinstellungen zu sehen.';
      großerBildschirm.style.display = "block";
    }
}

function adjustContent() {
    let windowWidth = window.innerWidth;
    let horizontal = document.querySelectorAll(".horHor");
    let vertical = document.querySelectorAll(".verVer");

    
    if (windowWidth <= 480) {
        horizontal.forEach(element => {
            element.style.width = "95%";
            liege.style.width = "95%";
        });

        vertical.forEach(element => {
            element.style.width = "95%";
        });
    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
            liege.style.width = "90%";
        });

        vertical.forEach(element => {
            element.style.width = "90%";
        });
    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
        });
    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
            liege.style.width = "calc(90% + 20px)";
            abstand2.style.display = "block";
            abstand1.style.display = "block";
        });

        vertical.forEach(element => {
            element.style.width = "calc(20% - 3px)";
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