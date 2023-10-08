Status = "";
function preload(){

}
function setup(){
canvas = createCanvas(600, 500);
canvas.center();
camera = createCapture(VIDEO);
camera.hide();
}
function draw(){
image(camera, 0, 0, 600, 500);
}
function start(){
modal = ml5.objectDetector('cocossd', loadmodal);
document.getElementById("status").innerHTML = "Status : Detecting Object";
text = document.getElementById("inputBox").value;
}
function loadmodal(){
    console.log("modal is loaded");
    Status = true;
}