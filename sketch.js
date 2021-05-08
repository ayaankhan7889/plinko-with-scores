var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];
var gameState="play";
var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


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
  text("Score : "+score,20,30);

  textSize(35);
  text(" 500  ", 5, 500);
  text(" 500  ", 80, 500);
  text(" 500  ", 160, 500);
  text(" 500  ", 240, 500);
  text(" 100  ", 320, 500);
  text(" 100  ", 400, 500);
  text(" 100  ", 480, 500);
  text(" 200  ", 560, 500);
  text(" 200  ", 640, 500);
  text(" 200  ", 720, 500);

  Engine.update(engine);
 

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>550) {
      if(particle.body.position.x<300){
        score = score + 500;
        particle = null;
        if(count>=5){
          gameState = "end"
        }
      }

      else if(particle.body.position.x>300 && particle.body.position.x<600){
        score = score + 100;
        particle = null;
        if(count>=5){
          gameState = "end"
        }
      }

      else if(particle.body.position.x>600 && particle.body.position.x<800){
        score = score + 200;
        particle = null;
        if(count>=5){
          gameState = "end"
        }
      }
    } 
   }
   if(gameState==="end"){
     textSize(30);
     text("GAME OVER",300,350);
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}