/*colorR=0;
colorG=0;
colorB=0;*/
nx=0;
ny=0;
diff=0;
function preload(){

}
function setup(){
canvas=createCanvas(450,300);
canvas.position(640,240);
video= createCapture(VIDEO);
video.size(450,300);
video.position(160,250);
posenet= ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){
background('#99ff99');
textSize(diff);
fill('yellow');
text("AG",nx,ny);
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
        nx=results[0].pose.nose.x;
        ny=results[0].pose.nose.y;
        lwx= results[0].pose.leftWrist.x;
        rwx= results[0].pose.rightWrist.x;
        diff= floor(lwx-rwx);
        /*colorR= floor(Math.random()*255);
        colorG=floor(Math.random()*255);
        colorB= floor(math.random()*255);*/
        

    }else{
        console.log("No object found");
    }
}