
let checkMouse = true;
let mouseX;
let mouseY;
let timeoutId

let currentFrame

const tileSize = 100;
const lastFrame = 658.5;
const frameDiff = 0.2797531990407674;

document.onmousemove = function(e) {
    if (checkMouse) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        checkMouse = false;
        setTimeout(calculateFrame, 0)
        setTimeout(() => {
            checkMouse = true;
            // console.log(mouseX);
        }, 200)
    }
}

let maxValue = (Math.floor(window.innerHeight/tileSize)*(window.innerWidth/tileSize)) + Math.floor(window.innerWidth/tileSize)

function calculateFrame() {
    let initialValue = (Math.floor(mouseY/tileSize)*(window.innerWidth/tileSize)) + Math.floor(mouseX/tileSize)
    currentFrame = parseFloat(map(initialValue, 0, maxValue, 0 ,lastFrame).toFixed(1))
    console.log(currentFrame);
}

let vid = document.querySelector("video");
vid.addEventListener('timeupdate', timeupdate, false);
// vid.addEventListener('progress', progressUpdate);

function timeupdate() {
    // console.log(vid.currentTime);
    // return

    // let loopEnd = parseFloat(currentFrame+frameDiff);
    let loopEnd = parseFloat(currentFrame+0.001);

    if (vid.currentTime < currentFrame || vid.currentTime >= loopEnd ) {
        vid.currentTime = currentFrame;
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(timeupdate, 3000) 
}

// function diff(ary) {
//     var newA = [];
//     for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
//     return newA;
// }

// function avg(arr) {
//     let sum = 0;
//     for( let i = 0; i < arr.length; i++ ){
//         sum += parseFloat( arr[i], 10 ); //don't forget to add the base
//     }
//     return sum/arr.length;
// }

let map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;


// vid.play();