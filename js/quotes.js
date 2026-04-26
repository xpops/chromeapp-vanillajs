const quotes = [
    {
        quote: "I'm undisputed.",
        author: "Sett",
    },
    {
        quote: "All the world on one arrow.",
        author: "Ashe",
    },
    {
        quote: "Shurima, your emperor has returned!",
        author: "Azir",
    },
    {
        quote: "Precision is the difference between a butcher and a surgeon.",
        author: "Camille"
    },
    {
        quote: "It's not how much time you have, it's how you use it.",
        author: "Ekko",
    },
    {
        quote: "In carnage, I bloom, like a flower in the dawn.",
        author: "Jhin",
    },
    {
        quote: "What is broken can be reforged.",
        author: "Riven",
    },
    {
        quote: "One to cut, one to seal.",
        author: "Yone",
    },
    {
        quote: "The dawn has arrived!",
        author: "Leona",
    },
    {
        quote: "Will you prove worthy? / Probably not.",
        author: "Kayn / Rhaast",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

randIndex = Math.floor(Math.random() * 10);
quote.innerText = quotes[randIndex].quote;
author.innerText = `- ${quotes[randIndex].author}`;