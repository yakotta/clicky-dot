<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="game-container" class="col-8"></div>
    
    <div id="UI" class="hidden-div">
        <h1>clicky dot</h1>
        <p><span id="points"></span></p>
        <p><span id="lives"></span></p>
        <p><span id="high-score"></span></p>

        <div id="game-end" class="hidden-div">
            <p>you died, loser :(</p>
            <button id="try-again">try again?</button>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>