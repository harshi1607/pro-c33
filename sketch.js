  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisionHeight=300
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var score =0;
var count =0;
var gameState="start"
//var yellowLine;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // yellowLine= new Ground(width/2,600,width,20)
  //yellowLine=fill("yellow")



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
 text("Score : "+score,600,30);
 if(turn>=5){gameState="end"}
  fill("yellow")
  line(0,divisionHeight-20,width,divisionHeight-20)
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    
    //
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
    
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     if(k<4){
     text("500",k*80+30,divisionHeight+220)
   }
   else if(k>=4&&k<7){
    text("100",k*80+30,divisionHeight+220)
  }
  else if(k>=7){
    text("200",k*80+30,divisionHeight+220)
  }
  }
}
function mousePressed(){
  if(gameState!=="end"){
    turn++;
    //particle=new Particle(mouseX,10,10,10)
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
}
if(particle!=null) {
  particle.display();
   if (particle.body.position.y>760) {
      if (particle.body.position.x < 300) { 
        score=score+500; 
        particle=null; 
        if ( count>= 5) gameState ="end"; }
         else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
            score = score + 100;
             particle=null;
              if ( count>= 5) gameState ="end"; } 
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
                 score = score + 200;
                  particle=null;
                   if ( count>= 5) gameState ="end"; } } }
