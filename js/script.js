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
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Harold Abselson"
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    source: "John Woods"
  },
  {
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    source: "Paulo Coelho",
    citation: "The Alchemist"
  },
  {
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source: "Helen Keller"

  },
  {
    quote: "You can't be great if you don't feel great. Make exceptional health your number one priority",
    source: "Robin Sharma"
  },
  {
    quote: "a house divided against itself cannot stand.",
    source: "Abraham Lincoln",
    year: "1858"
  },
  {
    quote: "Every accomplishment starts with the decision to try.",
    source: "John F. Kennedy"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  }
]

// console.log(quotes);
/***
 * `getRandomQuote` function
***/

/**
 * Returns a random quote object from the quotes array.
 *
 * @param {array} arr An array of quotes.
 * @return {object} the quote object is returned..
 */
  function getRandomQuote(arr) {
    let number = Math.floor(Math.random() * arr.length);
    return arr[number];
    
  }

// console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

/**
 * Returns a quote contained in a string, Then inserts to HTML
 * @return {string} containing a quote to inser into HTML
 */
  function printQuote() {
    let quoteObject = getRandomQuote(quotes);
    let html = `
    <p class="quote"> ${quoteObject.quote} </p>
    <p class="source"> ${quoteObject.source} 
    `;
    if ('citation' in quoteObject) {
      html += `<span class="citation">${quoteObject.citation}</span>`;
    } else if ('year' in quoteObject) {
      html += `<span class="year">${quoteObject.year}</span>`
    };
    html += `</p>`
    return document.getElementById('quote-box').innerHTML = html; 
  }

console.log(printQuote());
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//generates a random quote everytime button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);




//a function that gives a random color based on RGBA
function randomRGBA () {
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  

  let randomColor = `rgba(${red}, ${green}, ${blue})`;
  console.log(randomColor);
  return document.querySelector('body').style.backgroundColor = randomColor;
}

//changes the background color of the body element upon clicking the 'show another quote button'
document.getElementById('load-quote').addEventListener('click', randomRGBA);

//updates the page with a new quote and background color every 6 seconds
setInterval( () => {
  printQuote(); 
  randomRGBA();
}, 6000);

