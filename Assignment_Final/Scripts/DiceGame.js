class DiceGame
{
    constructor()
    {
        this.player1    =new Player();
        this.player2    =new Player();
        this.gameDieOne =new Die();
        this.gameDieTwo =new Die();
    };
};

DiceGame.prototype.playRound    =function()
{
    this.gameDieOne.rollDie();
    this.gameDieTwo.rollDie();
    this.player1.addRoll(this.gameDieOne.roll, this.gameDieTwo.roll);

    this.gameDieOne.rollDie();
    this.gameDieTwo.rollDie();
    this.player2.addRoll(this.gameDieOne.roll, this.gameDieTwo.roll);
};

DiceGame.prototype.getWinner    =function()
{   
    if(this.player1.points > this.player2.points)
    {
        return "Player1 Wins!";
    }
    else if(this.player2.points > this.player1.points)
    {
        return "Player2 wins!";
    }
    else
    {
        return "Its a tie!"
    }
}

DiceGame.prototype.reset    =function()
{
    this.player1.reset();
    this.player2.reset();
}
