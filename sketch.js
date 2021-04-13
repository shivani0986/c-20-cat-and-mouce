var cat;
var mouse;
var catImage;
var mouseImage;

function preload() {
    //load the images here
    catImage = loadImage("cat1.png");
    mouseImage = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,400,400,400);
    cat.addImage("cat",catImage);
    cat.debug = true;

    mouse = createSprite(600,600,200,200);
    mouse.addImage("mouse",mouseImage);
    mouse.debug =true;

}

function draw() {

    //background(255);
    

    drawSprites()
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
