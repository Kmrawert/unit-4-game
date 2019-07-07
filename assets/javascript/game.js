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
// Must have an on-click event for the crystals to be interactive (Console.log)

// only one onclick - use val to differentiate 

// Create random number generator and print number to page
// Associate/Assign a value to each Crystal image. (add a val=1-12 in HTML?)
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
console.log("This is the comp. guess" + CompGuess);

// function ComputerGuessedNum() {
        
//     }
//     $("ComputerGuessedNum").text(CompGuess)
//     console.log(ComputerGuessedNum)


// document.onclick = function(event) {

// }






