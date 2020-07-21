class Paper
{
    constructor(x,y,radius)
    {
        var options= 
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,Paper)
    }

    display()
    {
        var pos=this.body.position
        rectMode(CENTER)  
        ellipse(pos.x,pos.y,this.radius.x,this.radius.y)  
    }
}