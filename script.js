$(document).ready(function(){
    // https://krazydad.com/tutorials/makecolors.php
    function RGB2Color(r,g,b)
    {
      return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
    }

    var frequency = .4;
    var htmlElements = '';
    for (i = 0; i < 16; i++) {
        var red   = Math.sin(frequency*i + 2) * 55 + 200;
        var green = Math.sin(frequency*i + 4) * 55 + 200;
        var blue  = Math.sin(frequency*i + 0) * 127 + 200;
        
        htmlElements += '<div style="background-color:' + RGB2Color(red,green,blue) + '" id="dot-' + i + '" class="dot hidden" ></div>';
    };

    $('#game-container').html(htmlElements);

    var dotArray = [];
    for (i = 0; i < 16; i++) {
        dotArray[i] = $('#dot-' + i);
    };

    var points = 0;
    $('#points').text('points: ' + points);
    var lives = 3;
    $('#lives').text('lives: ' + lives);

    console.log(points);

    setInterval(function(){
        var randomDot = Math.floor(Math.random() * (dotArray.length));
        console.log(randomDot);
        dotArray[randomDot].removeClass('hidden');
    }, 2000);
    
    // when a colored dot is clicked, it turns white and you get a point
    // when a white dot is clicked, you lose a life (3 lives max)
    // when a colored dot is NOT clicked, you lose a life
    // display a points counter
    // the time given to click each dot should get progressively shorter
    

    /* From the whatsapp convo
    for (i = 0; i < 4; i++) {  
        var dot = $("<div></div>");
        dot.addClass("dot red");
        $('#test').appendChild(dot);
      }

      // old 
        for (i = 0; i < 4; i++) {  
            htmlElements += '<div id="dot-' + i + '" class="dot hidden" ></div>';
        };
        $('#game-container').html(htmlElements);

    // new
        for (i = 0; i < 4; i++) {  
            var dot = $("<div>");
            dot.setAttribute("id","dot-"+1);
            dot.addClass("dot hidden");
            $('#game-container').appendChild(dot);
        }

      // current
        setInterval(function(){
            var randomDot = Math.floor(Math.random() * (dotArray.length));
            console.log(randomDot);
            dotArray[randomDot].removeClass('hidden');
        }, 2000);

        // final
            var gc = $("game-container");
            var selected = Math.floor(Math.random() * (dotArray.length))
            gc.children(".dot").addClass("hidden");
            gc.children(".dot#dot-"+selected).removeClass("hidden")

        // what is this
            $("something").appendChild("<div>");
            $(something).data("index",x);

        // oh wait, I think the clickTimeout is not needed
        var clickTimeout = null;
        var clickActive = false;
        var points = 10;
        var loopPoints = 0;
        
        $("game-container").children(".dot").on("click",function(){
            if(clickActive == true){
              loopPoints = 1;
            }
        });
        
        setInterval(function(){
          // ... do the mole visibility stuff
          // now you are allowed to click!!
          clickActive = true;
          // we default to, you didnt click, you lose
          loopPoints = -1;
          clickTimeout = setTimeout(function(){
            // clicks are no longer valid, you lost!
            clickActive = false;
            // add whatever loop points
            points += loopPoints;
          },1000);  
        },2000);

        // add click handlers when i generate the dots, that way every dot gets a click handler?

        for (i = 0; i < 4; i++) {  
        ... make the dot html
        $('#game-container').appendChild(dot);
        dot.on("click",function(){
            if(clickActive == true){
            loopPoints = 1;
            }
        });
        }

        // so at the top of your game loop, you'll need something like 
        var gameLoop = setInterval(function(){

        if(userPoints === 0){
        clearInterval(gameLoop)
        }
    */
    
});