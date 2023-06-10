
function preload(){

}
function setup(){
canvas=createCanvas(450,300);
canvas.position(640,230);
video= createCapture(VIDEO);
video.size(450,300);
video.position(160,240);
posenet= ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){

}
function music(){
    var x = document.getElementById("lol");
    x.play();
}
function modelloaded(){
 console.log("Model is loaded")
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }else{
        console.log("No object found");
    }
}