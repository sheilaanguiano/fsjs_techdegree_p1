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
    year: 1988,
    tags: "Funny"
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
 * [Returns a random object based on its index] 
 * 
 *  @param {[arr]} - [array of objects with quotes] 
 * @returns {[object]} [returns an Object quote] 
 */ 

function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

/***
 * `randomColor` function
***/
/**
 * [Function that returns a random bakcgroundcolor 
 * by brute force, not the mots elegant solution] 
 */ 


function randomColor() {
  let r = Math.floor(Math.random() * (150 - 50)) + 50;
  let g = Math.floor(Math.random() * (150 - 50)) + 50;
  let b = Math.floor(Math.random() * (150 - 50)) + 50;
  
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};



/***
 * `printQuote` function
***/
/**
 * [The function calls the getRandomQuote and with the
 * data from the random Objects builds a string using
 * string literal and ternary operator to build a quote with:
 * quote, source and if available citation, year and tag which get injected in a DOM node using the  .innerHTML property] 
 */ 

/*Setting the 3 second interval that gets cleared 
when someone pushes the "Show another quote" button
*/
const myInterval = setInterval(printQuote, 3000); 

function printQuote() {
  randomColor();
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
    ${q.hasOwnProperty('tags') 
        ? `<p class="source">${q.tags}</p>` 
        : ""}
    `
    document.getElementById('quote-box').innerHTML = htmlString;
    clearInterval(myInterval);
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
