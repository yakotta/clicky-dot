$(document).ready(function(){
    // stores the life and point information
    var UI = {
        lives: 2,
        points: 0,
        update: function(deltaLives, deltaPoints){
            UI.lives += deltaLives;
            UI.points += deltaPoints;
            $('#lives').text('lives: ' + (UI.lives + 1));
            $('#points').text('points: ' + UI.points);
        }
    }
    
    // displays initial lives and points at the start of the game
    UI.update(0,0)
    
    // defines generic game parameters for later use
    var deltaLives = 0;
    var deltaPoints = 0;
    var numDots = 16;
    var gameCon = $('#game-container');
    
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
        dot.on('click', clickDot);

        gameCon.append(dot);
    };
    
    // reveals a random dot
    function revealDot() {
        var selectDot = Math.floor(Math.random() * numDots);
        $("#dot-" + selectDot).removeClass("hidden");
    };
    
    // when revealed dot is a clicked, player keeps a life and gets a point
    function clickDot(){
        if ($(this).hasClass("hidden") == false) {
            deltaLives = 0;
            deltaPoints = 1;
        }
    };
    
    // reveals death div and ends game
    function killPlayer() {
        clearInterval(gameInterval);
        $('#dead').removeClass("hidden");
    };

    // sets up the game timing
    var gameInterval = setInterval(function(){
        // hides all dots to start with
        $(".dot").addClass("hidden");
        
        // determines if player is dead
        if(UI.lives < 1) {
           killPlayer();
           return false;
        }
        
        //reveals a dot after 500ms and prepares for player failure
        setTimeout(function(){
            revealDot();
            deltaLives = -1;
            deltaPoints = 0;
            
            // updates lives and points
            setTimeout(function(){UI.update(deltaLives, deltaPoints)}, 2000);
        }, 500);
    }, 2500);
    
    // when a colored dot is clicked, it gets hidden and you get a point
    // when anything but a colored dot is cliked, you lose a life (3 lives max)
    // when a colored dot is NOT clicked, you lose a life
    // display a points counter
    // the time given to click each dot should get progressively shorter
    
});