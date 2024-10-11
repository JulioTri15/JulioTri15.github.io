const quotes = [
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        quote: "Love should never be a secret. If you keep something as complicated as love stored up inside, it could make you sick",
        author: "Dr. Otto Octavius"
    },
    {
        quote: "It’s not whether you get knocked down, it’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
         quote: "With great power comes great responsibility",
        author: "Peter Parker"
    },
    {
         quote:"The hardest choices require the strongest wills." ,
         author: "Thanos"
    }
];

// Function to generate and display a random quote when the button is clicked
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
}
