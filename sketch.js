const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var ground,stand1,box1;
var bob1;

function preload(){
  backgroundImg = loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1450,700);
  engine = Engine.create();
  world = engine.world;
Engine.run(engine)
  ground = new Ground(600,height,3000,20)
}

function draw() {
  background(backgroundImg);  
  ground.display();
  bob1.display();
    drawSprites();
}