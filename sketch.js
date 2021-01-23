
var backgroundImg;
var cat, cat_Still, cat_Still, cat_Running, cat_Running;
var mouse, mouse_Still, mouse_Still, mouse_Teasing, mouse_Teasing;

function preload() {
    //load the images here
    backgroundImg. loadImage ("garden.png");
    cat_Still.loadAnimation ("tomOne.png");
    cat_Running.loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png");
    mouse_Still.loadAnimation("jerryOne.png");
    mouse_Teasing.loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat=createSprite(400,200,50,50);
     cat.addAnimation("Still", cat_Still); 
     cat.addAnimation("Running", cat_Running);

     mouse=createSprite(200,200,50,50);
     mouse.addAnimation("Still", mouse_Still)
     mouse.addAnimation("Teasing", mouse_Teasing)


}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.changeAnimation("Still");
        mouse.chamgeAnimation("Still");
        cat.velocity.X = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === SPACE){
    mouse.changeAnimation("teasing")
}

if(keyCode === LEFT_ARROW){
    cat.velocity = -5;
    cat.changeANimation("Running");
}

}
