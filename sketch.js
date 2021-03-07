const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World

var myworld,myengine
var ball,ground
function setup() {
createCanvas(400,400);
 myengine=Engine.create()
 myworld=myengine.world
var bp={restitution:1}
ball=Bodies.circle(200,100,20,bp)
World.add(myworld,ball)
//console.log(ball.position.y)
var gp={isStatic:true}
ground=Bodies.rectangle(200,390,200,20,gp)
World.add(myworld,ground)
}

function draw() {
background("black");  
Engine.update(myengine)
ellipseMode(RADIUS)
rectMode(CENTER)
ellipse(ball.position.x,ball.position.y,20)
rect(ground.position.x,ground.position.y,200,20)

}