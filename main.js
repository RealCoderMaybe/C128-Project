song_1 = music.mp3;
song_2 = music2.mp3;

leftwrist.x = 0;
rightwrist.x = 0;
leftwrist.y = 0;
rightwrist.y = 0;

function preload(){
    song_1 = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        leftwrist.x = results[0].pose.leftwrist.x;
        leftwrist.y = results[0].pose.leftwrist.y;
        console.log("leftwrist.x = " + leftwrist.x + "leftwrist.y" + leftwrist.y);
    }
}