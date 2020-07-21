class Ground
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,Ground) 
    }

    display()
        {
            var pos=this.body.positions
            rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height)
        }
    
}