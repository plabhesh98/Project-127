function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(400, 500);
    canvas.position(550, 190);

    video = createCapture(VIDEO);
    video.hide
}

function draw(){
    image(video, 0, 0, 400, 500)
}