$(document).ready(function(){
    // removes flash of unstyled content
    $('#UI').removeClass("hidden-div");

    // adds a point to player's score
    function winPoint(){
        UI.points += 1;
        $('#points').text('points: ' + UI.points);
    }

    // subtracts one of the player's lives
    function loseLife(){
        UI.lives -= 1;
        $('#lives').text('lives: ' + (UI.lives + 1));
    }

    // keeps track of the player's current high score
    function updateHighScore(score){
        if (score > UI.highScore) {
            UI.highScore = score;
            $('#high-score').text('high score: ' + UI.highScore);
        }
    }

    // resets lives and points to zero for a new roudn
    function resetScores(){
        UI.lives = 2;
        UI.points = 0;
        $('#lives').text('lives: ' + (UI.lives + 1));
        $('#points').text('points: ' + UI.points);
    }

    // generates random colors for the dots
    function randomColors(i){
        // https://krazydad.com/tutorials/makecolors.php
        var frequency = .4;
        var red   = Math.sin(frequency*i + 2) * 55 + 200;
        var green = Math.sin(frequency*i + 4) * 55 + 200;
        var blue  = Math.sin(frequency*i + 0) * 127 + 200;
        
        return 'rgb(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ')';
    };

    // defines game parameters 
    var numDots = 16;
    var gameCon = $('#game-container');
    var gameActive = false;
    var dotTimer = false;
    var UI = {
        lives: 2,
        points: 0,
        highScore: 0,
    }
    
    // displays initial lives, points, and high score at the start of the game
    resetScores();
    $('#high-score').text('high score: ' + UI.highScore);
    updateHighScore(UI.highScore);
  
    // creates dots with click handlers and adds them to the game container
    for (i = 0; i < numDots; i++) {
        var dot = $('<div>');
        dot.attr('style', 'background-color: ' + randomColors(i));
        dot.attr('id', "dot-" + i);
        dot.addClass("dot hidden");
        gameCon.prepend(dot);
    };
    
    // reveals a random dot and hides all others
    function selectDot() {
        $(".dot").addClass("hidden");
        var selectDot = Math.floor(Math.random() * numDots);
        $("#dot-" + selectDot).removeClass("hidden");
    };
    
    // sees if a  click is valid
    gameCon.on('click', function(event){
        // if the game is not active, do not process event
        if(gameActive == false){
            return false;
        }
        
        // what did the player click?
        var isDot = $(event.target).hasClass("dot");
        var isHidden = $(event.target).hasClass("hidden");
        
        // determines if a click is a win or a loss
        if(!isDot || isHidden){
            loseLife();
            gameLoop();
        } else if (isDot && !isHidden) {
            winPoint();
            gameLoop();
        }
    });

    // reveals "you died :(" meassage and ends the game
    function killPlayer() {
        $('#game-end').removeClass("hidden-div");
        $('.dot').removeClass("hidden");
        gameActive = false;
        updateHighScore(UI.points);
        clearTimeout(dotTimer);
    };
    
    // allows the player to reset the game and try again
    $('#try-again').on('click', function(){
        resetScores();
        $('#game-end').addClass("hidden-div");
        gameLoop();
    });

    // runs the game
    function gameLoop(){
        // determines if player is dead
        if(UI.lives < 0) {
           killPlayer();
           return false;
        }
        
        // resets the dot timer and selects a dot
        clearTimeout(dotTimer);
        gameActive = true;
        selectDot();
        
        // gives player a set time to click
        dotTimer = setTimeout(function(){
            loseLife();
            gameLoop();
        }, 1000);
    }
    
    gameLoop();
});