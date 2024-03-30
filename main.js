noseX=0
noseY=0

function preload() {
    mustache = loadImage('https://i.postimg.cc/SsVH89bN/pngimg-com-moustache-PNG35-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(400,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0, 0, 400, 300)
    //fill(255,0,0)
    //stroke(255,0,0)
    //circle(noseX, noseY, 20)
    image(mustache, noseX-25, noseY+10, 50, 20)
}

function take_snapshot(){
    save('myFilterImage.png')
}