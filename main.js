var song=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
song = loadSound('music.mp3');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoded)
  poseNet.on("pose", gotposes)
  }
  function modelLoded()
  {
console.log("ModelLoded IS LODED")
  }

  function draw()
{
image(video, 0, 0, 500, 500);
fill("#00ffea");
stroke("#00ffea");


if(scorerightWrist > 0.2)
{
circle(rightWristX, rightWristY, 20);
if(rightWristY > 0 && rightWrist <=100)
{
document.getElementById("speed").innerHTML = "speed=0.5";
song.rate(0.5);
}


else if(rightWristY > 100 && rightWrist <=200)
{
document.getElementById("speed").innerHTML = "speed=1";
song.rate(1);
}


else if(rightWristY > 200 && rightWrist <=300)
{
document.getElementById("speed").innerHTML = "speed=1.5";
song.rate(1.5);
}


else if(rightWristY > 300 && rightWrist <=400)
{
document.getElementById("speed").innerHTML = "speed=2";
song.rate(2);
}


else if(rightWristY > 400 && rightWrist <=500)
{
document.getElementById("speed").innerHTML = "speed=2.5";
song.rate(2.5);
}
}


circle(leftWristX, leftWristY, 20);
n = Number(leftWristY);
rd = floor(n);
L1000 = rd/1000;
volume = L1000 *2;
document.getElementById("vol").innerHTML = "volume ="+volume;
song.setVolume(volume);
}
function play()
{
song.play();
song.volume(1);
song.rate(1)
}

function gotposes(results)
{
if(results.length > 0)
{

console.log(results);
scoreleftWrist = results[0].pose.keypoints[9].score;
scorerightWrist = results[0].pose.keypoints[9].score;
leftWristX = results[0].pose.leftWrist.X;
leftWristY = results[0].pose.leftWrist.Y;

rightWristX = results[0].pose.rightWrist.X;
rightWristY = results[0].pose.rightWrist.Y;

console.log(leftWristX);
console.log(leftWristY);
console.log(rightWristX);
console.log(rightWristY);
}
}