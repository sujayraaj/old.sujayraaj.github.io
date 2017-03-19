var time=0;
var sH = document.querySelector('.second-hand');
var mH = document.querySelector('.minute-hand');
var hH = document.querySelector('.hour-hand');
var secRot,minRot,hrRot;

function setupClock() {
    labelList=document.querySelectorAll('.num');
    rot=-6;
    incr=30;
    for(var i=0;i<labelList.length;i++){
        console.log(labelList[i])
        labelList[i].style.transform='rotate('+rot+'deg)';
        rot+=incr;
    }
}
function setCurrentTime() {
    var currentTime = new Date();
    secRot = Math.floor(( currentTime.getSeconds() / 60.0 ) * 360);
    minRot = Math.floor(( currentTime.getMinutes() / 60.0 ) * 360) + ((secRot/360.0)*6);
    var hr=currentTime.getHours();
    hrRot = Math.floor((  (hr > 12 ? hr-12:hr)  / 12.0 ) * 360) + ((minRot/360.0)*30);
    sH.style.transform='rotate('+secRot+'deg)';
    mH.style.transform='rotate('+minRot+'deg)';
    hH.style.transform='rotate('+hrRot+'deg)';
}
setupClock();
setCurrentTime();

window.setInterval(tick,1000);

function tick(){
    secRot+=6;
    secRot%=360;
    minRot+=0.1000000;
    hrRot+=0.0083333333333333;
    sH.style.transform='rotate('+secRot+'deg)';
    mH.style.transform='rotate('+minRot+'deg)';
    hH.style.transform='rotate('+hrRot+'deg)';   
}

labelList=document.querySelectorAll('.num');
console.log(labelList[1])