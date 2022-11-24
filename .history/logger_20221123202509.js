let video=document.getElementById("video");
let input=document.getElementById("slider");


function printTime(videoObject){
    console.log(videoObject);
    console.log(videoObject.currentTime);
}

setInterval(printTime(video), 2000);