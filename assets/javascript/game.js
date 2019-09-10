var startUp = function() {
    objectiveRandom();
    
    console.log("Red value:" + red);
    
    console.log("Blue value:" + blue);
    
    console.log("Yellow value:" + yellow);
    
    console.log("Green value:" + green);
    
}


var objectiveRandom = function() {
    var objective = parseInt(Math.floor(Math.random() * 101) + 19);
    console.log("objective:" + objective);
    document.querySelector("#objective").innerHTML = objective;
}

$("#redButton").on("click", function(){
    guessRed();
});



var red = parseInt((Math.floor(Math.random() * 11) + 1));



var blue = parseInt((Math.floor(Math.random() * 11) + 1));



var yellow = parseInt((Math.floor(Math.random() * 11) + 1));



var green = parseInt((Math.floor(Math.random() * 11) + 1));

var score = 0;

var guessRed = function() {
    console.log(score);
    let newScore = parseInt(parseInt(score) + parseInt(red));
    document.querySelector("#score").innerHTML = parseInt(newScore);
    console.log(newScore);
}

var guessBlue = function() {
    newScore = (score + blue);
    document.querySelector("#score").innerHTML = parseInt(newScore);
    let score = newScore;
}

var guessYellow = function() {
    newScore = (score + yellow);
    document.querySelector("#score").innerHTML = parseInt(newScore);
    let score = newScore;
}

var guessGreen = function() {
    newScore = (score + green);
    document.querySelector("#score").innerHTML = parseInt(newScore);
    let score = newScore;
}


if(score = objective){
    wins++
}

if(score > objective){
    losses++
}