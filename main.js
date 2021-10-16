harrypotter="";
peterpan="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    harrypotter=loadSound("harrypotter.mp3");
    peterpan=loadSound("peterpan.mp3");
}
function setup(){
    canvas= createCanvas(400,400);
    canvas.position(477,240);

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("Left Wrist X: "+leftWristX+" Left Wrist Y: "+leftWristY);
        console.log("Right Wrist X: "+rightWristX+" Right Wrist Y: "+rightWristY);
    }
}
function draw(){
    image(video,0,0,400,400);
}