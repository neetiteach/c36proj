class Food{
  constructor(){
      this.fstock=0;
      this.lftime;
      this.image=loadImage("Images/Milk.png");
  }

  getFood(){
   this.fstock++;
  }

  updateFoodnTime(){
     if(this.fstock<0){
       this.fstock=0;
     }
   

     dbase.ref("/").update({fstock:this.fstock,ftime:this.lftime});
   
     console.log(this.fstock+","+this.lftime);
  }
  
  dedFood(){
    this.fstock--;
  }

  display(){
      var x=80,y=100;
     imageMode(CENTER);
     image(this.image,720,220,70,70);
      
     if(this.fstock!==0){
       for(var i=0;i<this.fstock;i++){
            if(i%10==0){
                x=80;
                y+=50;
            }
        image(this.image,x,y,50,50);
        x+=30;
       }

     }
     

  }
}