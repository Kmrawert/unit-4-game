$(document).ready(function(){
})

//Crystal Game - Pseudo Code
// Create/clone Git Repository
// Set up folder structure - Assets (CSS, JS, and Images), CSS - Reset/style; Git Push
    //done
// Use Bootstrap to create a HTML page with necessary info and layout
    //done
// Add 4 crystals to the images folder, and html page
    //done
// Must have a random number for computer guess and add to page
    //done 
// Must have an on-click event for the crystals to be interactive (Console.log)
    //done
// Must assign each crystal a random number value 
    // Create random number generator per crystal (console.log)
    // Assign each value to each crystal 
        //($(this).attr("crystal1Val");) and $(this).attr("crystal1Val");
        //done

// Set up addition fuctionality (var + var?)
// new total variable
// Set up total fuctionality or score counter? 
// Set up if statement 
// everytime you guess - on click event 
    // if total is greater than random number, then you lose
        // alert you lose! losses++ (console log)
        // reset game
    // if total is less than random number, allow more guesses/nothing
    // if total matches random number, then you win
        // aleart you win! wins++ (console log)
        // reset game
// Set up reset function (similar to the letter guess game)



// Potential variables = Wins, Losses, ComputerGuessedNum, Total, YourGuesses, Reset
var wins = 0;
var losses = 0;
var CompGuess = (Math.floor(Math.random() * ((120 - 19) + 1)) + 19);
console.log("This is the comp. guess " + CompGuess);
$(ComputerNum).text(CompGuess);
var yourGuesses = 0;


// random Crystal Values variables
var crystal1Val = (Math.floor(Math.random() * ((12 - 9) + 1)) + 9);
console.log("This is the crystal1val " + crystal1Val);

var crystal2Val = (Math.floor(Math.random() * ((8 - 6) + 1)) + 6);
console.log("This is the crystal2val " + crystal2Val);

var crystal3Val = (Math.floor(Math.random() * ((5 - 3) + 1)) + 3);
console.log("This is the crystal3val " + crystal3Val);

var crystal4Val = (Math.floor(Math.random() * ((2 - 1) + 1)) + 1);
console.log("This is the crystal4val " + crystal4Val);
// random Crystal Values variables end

function resetGame() {
    CompGuess = (Math.floor(Math.random() * ((120 - 19) + 1)) + 19);
    $(ComputerNum).text(CompGuess);
    yourGuesses = 0;
    // $("yourGuesses").empty();
    $('#TotalGuesses').empty();
    crystal1Val = (Math.floor(Math.random() * ((12 - 9) + 1)) + 9);
    crystal2Val = (Math.floor(Math.random() * ((8 - 6) + 1)) + 6);
    crystal3Val = (Math.floor(Math.random() * ((5 - 3) + 1)) + 3);
    crystal4Val = (Math.floor(Math.random() * ((2 - 1) + 1)) + 1);
}

function playGame() {
    if (CompGuess === yourGuesses){
        wins++;
        $('#wins').text(wins); 
        resetGame();
    
    } else if (yourGuesses > CompGuess) {
       losses++;
       $('#losses').text(losses);
       resetGame();

    } 
};


$("#crystal-1").click(function() {
    $(this).attr("crystal1Val");
    console.log("you clicked gem1 " + crystal1Val);
    
    yourGuesses = yourGuesses + crystal1Val
    $(TotalGuesses).text(yourGuesses);

    playGame();

});

$("#crystal-2").click(function() {
    $(this).attr("crystal2Val");
    console.log("you clicked gem2 " + crystal2Val);
    
    yourGuesses = yourGuesses + crystal2Val
    $(TotalGuesses).text(yourGuesses);

    playGame();

});

$("#crystal-3").click(function() {
    $(this).attr("crystal3Val");
    console.log("you clicked gem3 " + crystal3Val);

    yourGuesses = yourGuesses + crystal3Val
    $(TotalGuesses).text(yourGuesses);

    playGame();

});

$("#crystal-4").click(function() {
    $(this).attr("crystal4Val");
    console.log("you clicked gem4 " + crystal4Val);

    yourGuesses = yourGuesses + crystal4Val
    $(TotalGuesses).text(yourGuesses);

    playGame();

});