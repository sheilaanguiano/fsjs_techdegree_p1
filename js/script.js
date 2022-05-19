/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    source: "Heraclitus lived circa 500 BCE in Ephesus, modern-day Turkey",
  },
  {
    quote: "D'oh!",
    source: "Homer Simpson",
    citation: '"Punching Bag" episode',
    year: 1988
  },
  {
    quote: "Most powerful is he who has himself in his own power.",
    source: "Seneca, died 65 CE in Rome",
  },
  {
    quote: "The unexamined life is not worth living.",
    source: "Socrates lived in Athens circa 450 BCE",
  },
  {
    quote: "Happiness resides not in possessions, and not in gold, happiness dwells in the soul.",
    source: "Democritus lived circa 400 BCE in Greece",
  }
];



/***
 * `getRandomQuote` function
***/

/**
 * [returns a random index number from an array of objects] 
 * 
 *  @param {[array]} param1 - [array of objects with quotes] 
 * @returns {[object]} [returns an Object quote] 
 */ 

function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  //console.log(randomNumber);
  //return console.log(arr[randomNumber]); 
  return arr[randomNumber];
};

//getRandomQuote(quotes);

/***
 * `printQuote` function
***/

function printQuote() {
  const q = getRandomQuote(quotes);
  const htmlString = `
    <p class="quote">${q.quote}</p>
    <p class="source">${q.source} 
    ${q.hasOwnProperty('citation') 
        ? `<span class="citation"> ${q.citation}</span>` 
        : ""}
    ${q.hasOwnProperty('year') 
        ? `<span class="year">${q.year}</span>` 
        : ""}
    </p>
    `
  return document.getElementById('quote-box').innerHTML = htmlString;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
