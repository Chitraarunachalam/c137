video ="";
img ="";
objects= [];
status ="";

function preload (){
video = createCapture('video.mp4');
video.hide();
}
    
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="status : Detecting Objects";
}

function draw (){
    image(video, 0, 0, 480, 380);
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for (i= 0; i < objects.length ; i++) {
            
        }
    }
}

function start(){
    objectDector = ml5.objectDector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="status : Dectecting Object";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

