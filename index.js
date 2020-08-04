let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(quote => {
    qutoesDiv.innerHTML += `<p> ${quote.quote} </p>`})