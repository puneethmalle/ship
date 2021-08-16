var ship, ship1;
var sea, ocean;

function preload() {
ship1 = loadAnimation("ship-1.png","ship-2.png");
sea = loadImage("sea.png")
}
function setup(){
    createCanvas(400,400);
    ocean = createSprite(200,100,400,20);
    ocean.addImage("ground",sea);
    ocean.x = ocean.width /8;
    ocean.velocityX = -4;
    

    ship = createSprite(50,160,20,50);
ship.addAnimation("running", ship1);

}
function draw(){
    background("white");
    ship.collide(ocean);
    if(ocean.x<0){
     ocean.x = ocean.width/8; 
    }
drawSprites();
}