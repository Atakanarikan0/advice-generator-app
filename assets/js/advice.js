async function init() {
  quotesData = await fetch('https://dummyjson.com/quotes?limit=2000').then(response => response.json());
  newQuote()
}

const container = document.querySelector(".container");
const changeBtn = document.querySelector(".changeBtn");
changeBtn.addEventListener("click", newQuote);

function newQuote() {
  const randomQuotes = quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
  quoteId.innerText = `ADVICE #${randomQuotes.id}`;
  quoteText.innerText = `“${randomQuotes.quote}”`;
  quoteAuthor.innerText = `${randomQuotes.author}`;
}

init()