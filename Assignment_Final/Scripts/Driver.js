const   game                =new DiceGame();
const   $playerOneDie           =$("#PlayerOneDie");
const   $playerTwoDie           =$("#PlayerTwoDie");
const   $player1Roll1           =$("#player1Roll1");
const   $player1Roll2           =$("#player1Roll2");
const   $player1Roll3           =$("#player1Roll3");
const   $player2Roll1           =$("#player2Roll1");
const   $player2Roll2           =$("#player2Roll2");
const   $player2Roll3           =$("#player2Roll3");
const   $playRoundButton        =$("#playRound")
const   $resetGameButton        =$("#resetGame")
const   $winner                 =$("#Winner")
const   $player1Points          =$("#Player1Score")
const   $player2Points          =$("#Player2Score")
const   $popUp                  =$("#popup")
const   $xButton                =$("#x")
const   $player1CurrentPoints   =$("#player1Points")
const   $player2CurrentPoints   =$("#player2Points")
let     roll                    =true;
let     gameRound               =0;

let     playerOneImgNumber;
let     playerOneImgNumber2;
let     playerTwoImgNumber;
let     playerTwoImgNumber2;
let     animationFrame;


function animateDie()
{
    playerOneImgNumber  =Math.floor(Math.random() * (6)) +1;
    playerTwoImgNumber  =Math.floor(Math.random() * (6)) +1;
    playerOneImgNumber2 =Math.floor(Math.random() * (6)) +1;
    playerTwoImgNumber2 =Math.floor(Math.random() * (6)) +1;


    $playerOneDie.html(`<img src='Images/die-face-${playerOneImgNumber}.jpg' alt="Die Face ${playerOneImgNumber}" width="100"> <img src='Images/die-face-${playerOneImgNumber2}.jpg' alt="Die Face ${playerOneImgNumber2}" width="100">`)

    $playerTwoDie.html(`<img src='Images/die-face-${playerTwoImgNumber}.jpg' alt="Die Face ${playerTwoImgNumber}" width="100"> <img src='Images/die-face-${playerTwoImgNumber2}.jpg' alt="Die Face ${playerTwoImgNumber2}" width="100">`)

    setTimeout(function()
    {
        if(roll == true)
        {
            animationFrame = requestAnimationFrame(animateDie);
        }
        else
        {
            cancelAnimationFrame(animationFrame)
        }
    },50);
}


$playRoundButton.on("click", function()
{
    gameRound++;

    if(gameRound == 1)
    {
        game.playRound();
        let player1RoundScore = game.player1.scorePoints(gameRound);
        let player2RoundScore = game.player2.scorePoints(gameRound);
        animationFrame = requestAnimationFrame(animateDie);

        setTimeout(function()
        {
            roll = false;

            $playerOneDie.html(`<img src='Images/die-face-${game.player1.firstRoll[0]}.jpg' alt="Die Face ${game.player1.firstRoll[0]}" width="100"> <img src='Images/die-face-${game.player1.firstRoll[1]}.jpg' alt="Die Face ${game.player1.firstRoll[1]}" width="100">`)

            $playerTwoDie.html(`<img src='Images/die-face-${game.player2.firstRoll[0]}.jpg' alt="Die Face ${game.player2.firstRoll[0]}" width="100"> <img src='Images/die-face-${game.player2.firstRoll[1]}.jpg' alt="Die Face ${game.player2.firstRoll[1]}" width="100">`)

            $player1Roll1.html(`Roll 1 <img src='Images/die-face-${game.player1.firstRoll[0]}.jpg' alt="Die Face ${game.player1.firstRoll[0]}" width="40"> <img src='Images/die-face-${game.player1.firstRoll[1]}.jpg' alt="Die Face ${game.player1.firstRoll[1]}" width="40"> ${player1RoundScore} Points`)
        
            $player2Roll1.html(`${player2RoundScore} Points <img src='Images/die-face-${game.player2.firstRoll[0]}.jpg' alt="Die Face ${game.player2.firstRoll[0]}}" width="40"> <img src='Images/die-face-${game.player2.firstRoll[1]}.jpg' alt="Die Face ${game.player2.firstRoll[1]}}" width="40"> Roll 1`)

            $player1CurrentPoints.html(`Current Points:${game.player1.points}`);
            $player2CurrentPoints.html(`Current Points:${game.player2.points}`);
        },1000)
    }
    else if(gameRound == 2)
    {
        roll = true;
        game.playRound();
        let player1RoundScore = game.player1.scorePoints(gameRound)
        let player2RoundScore = game.player2.scorePoints(gameRound)
        animationFrame = requestAnimationFrame(animateDie);

        setTimeout(function()
        {
            roll = false;

            $playerOneDie.html(`<img src='Images/die-face-${game.player1.secondRoll[0]}.jpg' alt="Die Face ${game.player1.secondRoll[0]}" width="100"> <img src='Images/die-face-${game.player1.secondRoll[1]}.jpg' alt="Die Face ${game.player1.secondRoll[1]}" width="100">`)

            $playerTwoDie.html(`<img src='Images/die-face-${game.player2.secondRoll[0]}.jpg' alt="Die Face ${game.player2.secondRoll[0]}" width="100"> <img src='Images/die-face-${game.player2.secondRoll[1]}.jpg' alt="Die Face ${game.player2.secondRoll[1]}" width="100">`)

            $player1Roll2.html(`Roll 2 <img src='Images/die-face-${game.player1.secondRoll[0]}.jpg' alt="Die Face ${game.player1.secondRoll[0]}" width="40"> <img src='Images/die-face-${game.player1.secondRoll[1]}.jpg' alt="Die Face ${game.player1.secondRoll[1]}" width="40"> ${player1RoundScore} Points`)
        
            $player2Roll2.html(`${player2RoundScore} Points <img src='Images/die-face-${game.player2.secondRoll[0]}.jpg' alt="Die Face ${game.player2.secondRoll[0]}}" width="40"> <img src='Images/die-face-${game.player2.secondRoll[1]}.jpg' alt="Die Face ${game.player2.secondRoll[1]}}" width="40"> Roll 2`)

            $player1CurrentPoints.html(`Current Points:${game.player1.points}`);
            $player2CurrentPoints.html(`Current Points:${game.player2.points}`);
        },1000)
    }
    else if(gameRound == 3)
    {
        roll = true;
        game.playRound();
        let player1RoundScore = game.player1.scorePoints(gameRound)
        let player2RoundScore = game.player2.scorePoints(gameRound)
        animationFrame = requestAnimationFrame(animateDie);

        setTimeout(function()
        {
            roll = false;

            $playerOneDie.html(`<img src='Images/die-face-${game.player1.thirdRoll[0]}.jpg' alt="Die Face ${game.player1.thirdRoll[0]}" width="100"> <img src='Images/die-face-${game.player1.thirdRoll[1]}.jpg' alt="Die Face ${game.player1.thirdRoll[1]}" width="100">`)

            $playerTwoDie.html(`<img src='Images/die-face-${game.player2.thirdRoll[0]}.jpg' alt="Die Face ${game.player2.thirdRoll[0]}" width="100"> <img src='Images/die-face-${game.player2.thirdRoll[1]}.jpg' alt="Die Face ${game.player2.thirdRoll[1]}" width="100">`)

            $player1Roll3.html(`Roll 3 <img src='Images/die-face-${game.player1.thirdRoll[0]}.jpg' alt="Die Face ${game.player1.thirdRoll[0]}" width="40"> <img src='Images/die-face-${game.player1.thirdRoll[1]}.jpg' alt="Die Face ${game.player1.thirdRoll[1]}" width="40"> ${player1RoundScore} Points`)

            $player2Roll3.html(`${player2RoundScore} Points <img src='Images/die-face-${game.player2.thirdRoll[0]}.jpg' alt="Die Face ${game.player2.thirdRoll[0]}}" width="40"> <img src='Images/die-face-${game.player2.thirdRoll[1]}.jpg' alt="Die Face ${game.player2.thirdRoll[1]}}" width="40"> Roll 3`)
            
            $player1CurrentPoints.html(`Current Points:${game.player1.points}`);
            $player2CurrentPoints.html(`Current Points:${game.player2.points}`);

            displayWinner();
        },1000)
    }
    else
    {
           
    };
});

$resetGameButton.on("click", function()
{
    $playerOneDie.html(`<img src='Images/die-face-6.jpg' alt="Die Face 6}" width="100"> <img src='Images/die-face-6.jpg' alt="Die Face 6}" width="100">`);
    $playerTwoDie.html(`<img src='Images/die-face-6.jpg' alt="Die Face 6}" width="100"> <img src='Images/die-face-6.jpg' alt="Die Face 6}" width="100">`);
    
    $player1Roll1.html(``);
    $player1Roll2.html(``);
    $player1Roll3.html(``);

    $player2Roll1.html(``);
    $player2Roll2.html(``);
    $player2Roll3.html(``);

    $player1CurrentPoints.html(``);
    $player2CurrentPoints.html(``);

    game.reset();
    gameRound = 0;
});

let displayWinner = function()
{
    let winner = game.getWinner()

    $popUp.css({"display": "block"});
    $popUp.fadeTo("2000", "1");

    $winner.html(`${winner}`);
    $player1Points.html(`Player1: ${game.player1.points } Points`);
    $player2Points.html(`Player2: ${game.player2.points} Points`);
}

$xButton.on("click", function()
{
    $popUp.fadeTo("1000", "0");
    
    setTimeout(function(){
        $popUp.css({"display" : "none"});
    }, 1000)
});
