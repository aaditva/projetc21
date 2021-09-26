class ground{
constructor(x, y, w , h){
    this.x=x
    this.y=y
    this.h=h
    this.w=w
    var options={
        isStatic:true
    
    }
    this.body=Bodies.rectangle(x, y, w, h, options)
    World.add(world,this.body)
}
display(){
    var groundpos=this.body.positions
    push()
    translate(groundpos.x, groundpos.y)
    rectMode(CENTER)
    fill("blue")
    rect(0, 0, this.w, this.h)
    pop()
        
    
}
}