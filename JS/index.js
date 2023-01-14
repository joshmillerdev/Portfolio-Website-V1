// document.body.innerHTML="HELLO"
// document.getElementById("myVideo").playbackRate = 1;

function increaseOpacity() {
    document.getElementById("myVideo").style.opacity = .2 + (window.scrollY/1200);
}

// function scrollDoc () {
//     let scrollHeight= (window.innerHeight - (Number(document.getElementById("elevator").style.height)));
//     // console.log(`THIS IS THE SCROLLHEIGHT: ${scrollHeight}  PX`);
//     let docHeight = (document.documentElement.scrollHeight - window.innerHeight);
//     // console.log(`THIS IS THE DOCHEIGHT: ${docHeight}  PX`)
//     let scrollPercent = (window.scrollY / docHeight);
//     // console.log(`THIS IS THE SCROLLPERCENT: ${scrollPercent}  PX`)
//     let padTop = (scrollPercent * scrollHeight);
//     // console.log(`THIS IS THE PADTOP: ${padTop}  PX`)
//     document.getElementById("elevator").style.paddingTop = `${padTop}px`;
// }

// function scrollDoc () {
//     let scrollHeight= (window.visualViewport.height - (Number(document.getElementById("elevator").style.height)));
//     console.log(`SCROLLHEIGHT: ${scrollHeight}  PX`);
//     let docHeight = (document.documentElement.scrollHeight - window.visualViewport.height);
//     console.log(`docHeight: ${docHeight}  PX`);
//     let scrollPercent = (window.scrollY / docHeight);
//     console.log(`scrollPercent: ${scrollPercent}  PX`)
//     let padTop = (scrollPercent * scrollHeight);
//     console.log(`padTop: ${padTop}  PX`);
//     document.getElementById("elevator").style.paddingTop = `${padTop}px`;
// }

function scrollDoc () {
    let scrollHeight = (window.visualViewport.height - 310);
    // let scrollHeight = document.documentElement.scrollTop;
    // console.log(`SCROLLHEIGHT: ${scrollHeight}  PX`);
    let docHeight = (document.documentElement.scrollHeight - window.visualViewport.height);
    // let docHeight = document.documentElement.scrollTop;
    // console.log(`docHeight: ${docHeight}  PX`);
    let scrollPercent = (document.documentElement.scrollTop / docHeight);
    // console.log(`scrollPercent: ${scrollPercent}  PX`)
    let padTop = (scrollPercent * scrollHeight)*.8 +30;
    // console.log(`padTop: ${padTop}  PX`);
    document.getElementById("elevator").style.paddingTop = `${padTop}px`;
}



document.onwheel = () => {
    increaseOpacity();
    scrollDoc();
}
document.getElementById("myVideo").playbackRate =  2;