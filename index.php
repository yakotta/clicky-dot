<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="words">
        <p>clicky dot</p>
        <span id="points"></span>
        <span id="lives"></span>
        <span id="high-score"></span>
    </div>
    
    <div id="game-end" class="hidden-div">
        <span>you died, loser :(</span>
        <button id="try-again">try again?</button>
    </div>
    
    <div id="game-container" class="col-8"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>