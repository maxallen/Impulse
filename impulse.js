import quotes from './quotes.js'

window.onload = () => {
    let quote = getRandomQuote()
    setQuote(quote)
    console.log(quote)
}

function getRandomQuote() {
    let maxQuoteIndex = quotes.length
    let choice = Math.floor(Math.random() * maxQuoteIndex)
    return quotes[choice]
}

function setQuote(quote) {
    document.getElementById("title").innerHTML = quote.title
    let source = document.getElementById("source")
    source.removeChild(source.lastElementChild)
    let newSource = document.createElement("a")
    newSource.href = quote.source_link
    newSource.innerHTML = quote.source_name
    newSource.target = "_blank"
    source.appendChild(newSource)
    document.getElementById("quote").innerHTML = fmt(quote.content)
}

function fmt(text) {
    return text.replace(/\n/g, "<br>");
}