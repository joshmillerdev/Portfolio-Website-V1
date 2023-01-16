// document.body.innerHTML="HELLO"
// document.getElementById("myVideo").playbackRate = 1;

function increaseOpacity() {
    document.getElementById("myVideo").style.opacity = .4 + (window.scrollY/700);
}

// function scrollDoc () {
//     let scrollHeight = (window.visualViewport.height - 310);
//     let docHeight = (document.documentElement.scrollHeight - window.visualViewport.height);
//     let scrollPercent = (document.documentElement.scrollTop / docHeight);
//     let padTop = (scrollPercent * scrollHeight)*.8 +30;
//     document.getElementById("elevator").style.paddingTop = `${padTop}px`;
// }
function scrollDoc () {
    let scrollHeight = (window.visualViewport.height - 310);
    let docHeight = (document.documentElement.scrollHeight - window.visualViewport.height);
    let scrollPercent = (document.documentElement.scrollTop / docHeight);
    let padTop = (scrollPercent * scrollHeight)*.8 +50;
    document.getElementById("elevator").style.top = `${padTop}px`;
}

// function scrollNav () {
//     document.getElementById("navbar").style.top = "0px";
// }
document.onwheel = () => {
    increaseOpacity();
    scrollDoc();
    // scrollNav();
}
document.getElementById("myVideo").playbackRate =  2;

// while (window.scrollY < document.getElementByClassName("navbar").height) {
//     document.getElementById("navbar").style.top = window.scrollY;
// }
// document.getElementsByClassName("navbar").style.top = 