let video=document.getElementById("video");
let input=document.getElementById("")

function printTime(videoObject){
    console.log(videoObject);
    console.log(videoObject.currentTime);
}

setInterval(printTime(video), 2000);