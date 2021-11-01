var food,foodIMG ;
var background,backgroundImg;

function preload()
{
foodIMG = loadImage("food.png")
backgroungImg = loadImage("background.png")
}

function setup() {
	createCanvas(800, 700);

	food = createSprite (width/2,height/2,50,50);
food.addImage(foodIMG);
food.scale = 0.5;
  
}


function draw() {
background("beige");
  
  drawSprites();
 
}



