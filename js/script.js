/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*
The function 'getRandomQuote':
  - receives an array
  - calls the function 'getRandomNumber' to generate a random number i to use as an array index
  - retrieves the array object located at index i
  - returns array object to caller
*/

function getRandomQuote(array) {
  var i = getRandomNumber(array.length);
  var aQuote = array[i];
  return aQuote;
}

/*
The function 'getRandomNumber':
  - receives the highest possible number of generated random number
  - 1 is NOT added to generated random number because we want an array index, which starts with 0
  - returns generated random number to caller
*/

function getRandomNumber(high) {
  var randomNumber = Math.floor((Math.random() * high));
  return randomNumber;
}

/*
The function 'formatResult':
  - receives a quote object
  - determines what properties are contained by the object
  - properly formats the object to print in the browser
  - returns object formatted as a string to caller
*/

function formatResult(resultQuote) {
  var result = '<p class="quote">' + resultQuote.quote + '</p>';
  result += '<p class="source">' + resultQuote.source;
  if (resultQuote.hasOwnProperty('citation')) {
    result += '<span class="citation">' + resultQuote.citation + '</span>';
    }
  if (resultQuote.hasOwnProperty('year')) {
    result += '<span class="year">' + resultQuote.year +  '</span>';
    }
  result += '</p>';
  return result;
}

function getRandomColor() {
  var a = getRandomNumber(255);
  var b = getRandomNumber(255);
  var c = getRandomNumber(255);
  var randomColor = 'rgb(' + a + ',' + b + ',' + c + ')';
//  console.log(randomColor);
  return randomColor;
}

/*
  The 'printQuote' function: 
   - calls the 'getRandomQuote' function and assigns it to a variable, aQuote
   - calls the 'formatResult' function to format the sent object into an HTML string
   - sets the 'innerHTML' of the 'quote-box' div to the HTML string 
*/

function printQuote() {
  var aQuote = getRandomQuote(quotes);
  var stringOfQuoteProperties = formatResult(aQuote);
  var colorString = getRandomColor();
  //document.body.style.backgroundColor = "rgb(0, 191, 255)";
  document.body.style.backgroundColor = colorString;
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
  }

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

 document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 //Display a quote when the page is created:

 printQuote();





