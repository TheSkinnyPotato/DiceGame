class Player
{
    constructor()
    {
        this.points     =0;
        this.firstRoll  =[];
        this.secondRoll =[];
        this.thirdRoll  =[];
    };
};

Player.prototype.addRoll  =function(rollOne, rollTwo)
{
    if(this.firstRoll.length == 0)
    {
        this.firstRoll.push(rollOne, rollTwo);
    }
    else if(this.secondRoll.length == 0)
    {
        this.secondRoll.push(rollOne, rollTwo);
    }
    else if(this.thirdRoll.length == 0)
    {
        this.thirdRoll.push(rollOne, rollTwo);
    }
    else
    {
        console.log("Error: Game should be over!")
    };
};

Player.prototype.scorePoints    =function(round)
{
    if(round == 1)
    {
        let currentPoints =0;

        if(this.firstRoll[0] != 1 && this.firstRoll[1] != 1)
        {
            if(this.firstRoll[0] == this.firstRoll[1])
            {
                currentPoints = (this.firstRoll[0] + this.firstRoll[1])*2
                this.points += currentPoints;
            }
            else
            {
                currentPoints = this.firstRoll[0] + this.firstRoll[1];
                this.points += currentPoints;  
            }
        }
        return currentPoints;

    }

    if(round == 2)
    {
        let currentPoints =0;

        if(this.secondRoll[0] != 1 && this.secondRoll[1] != 1)
        {
            if(this.secondRoll[0] == this.secondRoll[1])
            {
                currentPoints = (this.secondRoll[0] + this.secondRoll[1])*2
                this.points += currentPoints;
            }
            else
            {
                currentPoints = this.secondRoll[0] + this.secondRoll[1];
                this.points += currentPoints;  
            }
        }
        return currentPoints;
    }

    if(round == 3)
    {
        let currentPoints =0;

        if(this.thirdRoll[0] != 1 && this.thirdRoll[1] != 1)
        {
            if(this.thirdRoll[0] == this.thirdRoll[1])
            {
                currentPoints = (this.thirdRoll[0] + this.thirdRoll[1])*2
                this.points += currentPoints;
            }
            else
            {
                currentPoints = this.thirdRoll[0] + this.thirdRoll[1];
                this.points += currentPoints;  
            }
        }
        return currentPoints;
    }
    
}

Player.prototype.reset = function()
{
    this.firstRoll  =[];
    this.secondRoll =[];
    this.thirdRoll  =[];
    this.points     =0;     
}
