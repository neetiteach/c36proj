var dog,sadDog,happyDog;
var feed,abottle,fobj;
var dbase;
var ftime;
var lftime;
var today=new Date();
console.log(today);
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  dbase=firebase.database();
 
  fobj=new Food();

  var dbaseref=dbase.ref("fstock");
  dbaseref.on("value",readval);

  var feedtref=dbase.ref("ftime");
  feedtref.on("value",function(data){fobj.lftime=data.val()});

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  abottle=createButton("Add more food");
  abottle.position(800,95);
   abottle.mousePressed(addFood);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;





}

function draw() {
  background(46,139,87);
  textSize(20);
  fill("white");
  today=new Date();
  text("Last Feed Time :"+fobj.lftime,200,45);

  fobj.display();
  drawSprites();
}


function readval(data){
  fobj.fstk=data.val();
  

}




//function to read food Stock
function feedDog(){
  console.log("here");
  dog.addImage(happyDog);
  fobj.dedFood();
 
  fobj.lftime=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
  
 


  fobj.updateFood();
   
  
  
}

//function to update food stock and last fed time
function addFood(){
  fobj.getFood();
   fobj.updateFood();
}


