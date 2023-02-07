// URL to camperbot API endpoint that contains random quotes
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// Get div element containing quote text
const quoteTextArea = document.getElementById("quoteText");

// Get div element containing quote author
const quoteAuthor = document.getElementById("quoteAuthor");

// Function to get quotes
const getQuote = () => {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let numberOfQuotes = data.quotes.length; // Get number of quotes
        let randomIndex = Math.floor(Math.random() * (numberOfQuotes+1)); // Generate random number for quote
        let quoteText = data.quotes[randomIndex].quote;
        let quoteAuthor = data.quotes[randomIndex].author;
        setQuote(quoteText, quoteAuthor); // Set DOM content
        setBackgroundColor(); // Change background color
    })
    .catch((e) => {
        console.log(e);
    })
}

// Function to set quote
const setQuote = (quote, author) => {
    quoteTextArea.innerHTML = quote;
    quoteAuthor.innerHTML = `— ${author}`;
}

// Transition to different color
const setBackgroundColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

// Run on page load once
getQuote();