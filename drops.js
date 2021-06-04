class drops {
    constructor(x,y){
        options = {
           isStatic:true, 
        }
        
        this.rain = Bodies.circle(x,y,5,options);
    }
}