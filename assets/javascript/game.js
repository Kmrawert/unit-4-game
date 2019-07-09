$(document).ready(function(){
})

var wins = 0;
var losses = 0;
var CompGuess = (Math.floor(Math.random() * ((120 - 19) + 1)) + 19);
console.log("This is the comp. guess " + CompGuess);
$(ComputerNum).text(CompGuess);
var yourGuesses = 0;
var crystal1Val
var crystal2Val
var crystal3Val
var crystal4Val

randomCrysNum();

function randomCrysNum () {
    crystal1Val = (Math.floor(Math.random() * ((12 - 9) + 1)) + 9);
    crystal2Val = (Math.floor(Math.random() * ((8 - 6) + 1)) + 6);
    crystal3Val = (Math.floor(Math.random() * ((5 - 3) + 1)) + 3);
    crystal4Val = (Math.floor(Math.random() * ((2 - 1) + 1)) + 1);
}

function resetGame() {
    CompGuess = (Math.floor(Math.random() * ((120 - 19) + 1)) + 19);
    $(ComputerNum).text(CompGuess);
    yourGuesses = 0;
    $('#TotalGuesses').empty();
    randomCrysNum ();
};

function playGame() {
    if (yourGuesses < CompGuess)  return;
    if (CompGuess === yourGuesses){
        wins++;
        $('#wins').text(wins); 
    } else if (yourGuesses > CompGuess) {
       losses++;
       $('#losses').text(losses);
    }
    resetGame();
};

$("#crystal-1").click(function() {
    handleClick (crystal1Val);
});

$("#crystal-2").click(function() {
    handleClick (crystal2Val);
});

$("#crystal-3").click(function() {
    handleClick (crystal3Val);
});

$("#crystal-4").click(function() { 
    handleClick (crystal4Val); 
});

function handleClick (val) {
    yourGuesses = yourGuesses + val
    $(TotalGuesses).text(yourGuesses);
    playGame();
}

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

// Set up addition fuctionality (guesses + var)
    //add guesses totalto page (.text)
    //done
// Set up if statement 
    // if total is greater than random number, then you lose
        // alert you lose! losses++ (console log)
        // reset game
        //done
    // if total is less than random number, allow more guesses/nothing
        //not sure this needs to be completed?
    // if total matches random number, then you win
        // aleart you win! wins++ (console log)
        // reset game
        //done
// Set up reset function (similar to the letter guess game)
    //done

// Potential variables = Wins, Losses, ComputerGuessedNum, Total, YourGuesses, Reset






