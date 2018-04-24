$(document).ready(function(){
    // removes flash of unstled content
    $('#UI').removeClass("hidden-div");

    // stores the life and point information
    var UI = {
        lives: 2,
        points: 0,
        highScore: 0,
        update: function(deltaLives, deltaPoints){
            UI.lives += deltaLives;
            UI.points += deltaPoints;
            $('#lives').text('lives: ' + (UI.lives + 1));
            $('#points').text('points: ' + UI.points);
        },
        updateHighScore: function(score){
            if (score > UI.highScore) {
                UI.highScore = score;
                $('#high-score').text('high score: ' + UI.highScore);
            }
        },
        reset: function(){
            UI.lives = 2;
            UI.points = 0;
            $('#lives').text('lives: ' + (UI.lives + 1));
            $('#points').text('points: ' + UI.points);
        }
    }
    
    // displays initial lives and points at the start of the game
    UI.update(0,0)
    $('#high-score').text('high score: ' + UI.highScore);
    UI.updateHighScore(UI.highScore);
    
    // defines generic game parameters for later use
    var numDots = 16;
    var gameCon = $('#game-container');
    var gameActive = false;
    var deathTimer = false;
    
    // generates random colors for the dots
    function randomColors(i){
        // https://krazydad.com/tutorials/makecolors.php
        var frequency = .4;
        var red   = Math.sin(frequency*i + 2) * 55 + 200;
        var green = Math.sin(frequency*i + 4) * 55 + 200;
        var blue  = Math.sin(frequency*i + 0) * 127 + 200;
        
        return 'rgb(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ')';
    };
  
    // creates dots with click handlers and adds them to the game container
    for (i = 0; i < numDots; i++) {
        var dot = $('<div>');
        dot.attr('style', 'background-color: ' + randomColors(i));
        dot.attr('id', "dot-" + i);
        dot.addClass("dot hidden");

        gameCon.prepend(dot);
    };
    
    // reveals a random dot
    function revealDot() {
        var selectDot = Math.floor(Math.random() * numDots);
        $("#dot-" + selectDot).removeClass("hidden");
    };
    
    // looks at clicks in the game container
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
            UI.update(-1,0);
            gameLoop();
        } else if (isDot && !isHidden) {
            UI.update(0,1);
            gameLoop();
        }
    });

    // reveals you died meassage and ends the game
    function killPlayer() {
        $('#game-end').removeClass("hidden-div");
        $('.dot').removeClass("hidden");
        gameActive = false;
        UI.updateHighScore(UI.points);
        clearTimeout(deathTimer);
    };
    
    // allows the player to reset the game and try again
    $('#try-again').on('click', function(){
        UI.reset();
        $('#game-end').addClass("hidden-div");
        gameLoop();
    });

    function gameLoop(){
        // determines if player is dead
        if(UI.lives < 0) {
           killPlayer();
           return false;
        }
        
        // resets the timer
        clearTimeout(deathTimer);
        gameActive = true;
        
        //re-hides all dots and then reveals one
        $(".dot").addClass("hidden");
        revealDot();
        
        // gives player a set time to click
        deathTimer = setTimeout(function(){
            UI.update(-1,0);
            gameLoop();
        },1500);
    }
    
    gameLoop();
});