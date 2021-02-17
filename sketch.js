var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var score =0;
var particle;
var turn =0;
var gameState;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  gameState = "play";

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);

 stroke("white");
 fill("white");
 textSize(19);
 text("Score "+score,700,30);


 textSize(20);
 for(var i=25;i<270;i=i+80){

  text("500",i,520);
 }

 for(var i=345;i<510;i=i+80){

  text("100",i,520);
 }

 for(var i=585;i<850;i=i+80){

  text("200",i,520);
 }

  Engine.update(engine);
  ground.display();

  if(gameState ==="end"){
    textSize(100);
    text("GameOver",150,250);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null){
     var posX = particle.body.position.x;
     var posY = particle.body.position.y;
     particle.display();
     if(posY>750){
       if(posX<270){
         score = score + 500;
         particle = null;
         if(turn>=5){
           gameState ="end"
         }
       }
       else if(posX >270 && posX < 510){

          score = score + 100;
          particle = null;
          if(turn>=5){
            gameState ="end"
          }
       }
       else if(posX > 510 && posX < 850){
       
          score = score + 200;
          particle = null;
          if(turn>=5){
            gameState ="end"
          }

       }
     }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState ==="play"){
    particle = new Particle(mouseX,10,10,10);
   turn++;
  }

}