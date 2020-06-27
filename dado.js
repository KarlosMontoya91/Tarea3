var azar

function setup() {
  background(255); 
}

function draw() {
    createCanvas(400, 400);
   
  fill(255);
    rect (100,100,200,200);
  if (mouseIsPressed){
    azar = int(random(1,7));
  }
  
  console.log(azar) 
  
   if(azar == 6){
   
    fill(0);
    circle (150,150,40); 
    fill(0);
    circle (150,200,40);
    fill(0);
    circle (150,250,40);
    fill(0);
    circle (250,150,40);
    fill(0);
    circle (250,200,40);
    fill(0);
    circle (250,250,40);
     } 
     
    if(azar == 5){
     fill(0);
     circle (150,150,40); 
     fill(0);
     circle (200,200,40);
     fill(0);
     circle (150,250,40);
     fill(0);
     circle (250,150,40);
     fill(0); 
     circle (250,250,40);
     
   }
  
  if(azar == 4){  
    fill(0);
    circle (150,150,40); 
     fill(0);
     circle (150,250,40);
      fill(0);
     circle (250,150,40);
      fill(0);
      fill(0);
     circle (250,250,40);
  }
  
   if(azar == 3){
    fill(0);
    circle (150,150,40); 
    fill(0);
    circle(200,200,40);
    fill(0);
    circle (250,250,40);
   }
  
   if(azar == 2){  
    fill(0);
    circle (150,150,40); 
      fill(0);
     circle (250,250,40);  
   }
  
   if(azar == 1){
      fill(0);
     circle (200,200,40);    
   }  
}
