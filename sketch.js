const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(600, 625, 50, 50);
	boy.addImage(boyIMG);
	boy.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);
	stone = new Stone(550, 625, 25);
	tree = new Tree(200, 500, 300, 10);
	mango1 = new Mango(230, 400, 50, 50);
	mango2 = new Mango(200, 400, 50, 50);
	mango3 = new Mango(170, 440, 50, 50);

	throw1 = new Throw(stone.body, { x: 550, y: 575 });

	Engine.run(engine);

}




function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	stone.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();


	throw1.display();

	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);

	drawSprites();

}




function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 550, y: 625 });
		throw1.attach(stone.body);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
	return false;
}

function mouseReleased() {
	throw1.fly();
	stone.pop();
	return false;
}

function detectcollision(stone, mango) {
	stoneBodyPosition = stone.body.position
	mangoBodyPosition = mango.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= mango.r + stone.r) {
		Matter.Body.setStatic(mango.body, false);
	}

}



