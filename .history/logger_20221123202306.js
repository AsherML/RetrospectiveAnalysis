let video=document.getElementById("video");

function printTime(videoObject){
    let currentTime=videoObject.currentTime;
    console.log(currentTime);
}

setInterval(printTime(video), 2000)