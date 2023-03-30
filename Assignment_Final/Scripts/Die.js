class Die
{
    constructor()
    {
        this.faces  =[1,2,3,4,5,6];
        this.roll   =null;
    };
};

Die.prototype.rollDie   =function()
{
    if(this.roll != null)
    {
        this.roll = null;
    }


    let NumberOfFaces;
    let randomRoll;
    
    NumberOfFaces   =this.faces.length;
    randomRoll      = Math.floor(Math.random() * (NumberOfFaces));
    this.roll       =this.faces[randomRoll];
};
