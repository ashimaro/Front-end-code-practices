//Build a array for quote

const quotes = [
    { quote: "If you feel alone, just remember your entire bloodline is watching you!" },
    { quote: "I am not my thoughts; I have thoughts" },
    { quote: "Small steps everyday makes your closer to your goals" }
    { quote: "Explain the pain still hurt, just top talking. Share the problems won't solve" }
];

//Function to generate a random quote
function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length); 
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML=`"${quotes[randomIndex].quote}"`;
}

// line 11 : generate a random integer
//random number x length of quotes = get random number
//Math.floor()round down this random number to the nearest integer.
// randomIndex will be an integer to select a random quote from the array