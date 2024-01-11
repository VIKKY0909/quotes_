const quotes = [
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela"
	},
	{
		quote: "The way to get started is to quit talking and begin doing.",
		author: "Walt Disney"
	},
	{
		quote: "Your time is limited, don't waste it living someone else's life.",
		author: "Steve Jobs"
	},
	{
		quote: "If life were predictable it would cease to be life, and be without flavor.",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
		author: "Oprah Winfrey"
	}
];

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

function getQuote() {
	const { quote, author } = getRandomQuote();
	document.getElementById('quote').textContent = quote;
	document.getElementById('author').textContent = `- ${author}`;
	document.getElementById('tweet-quote').setAttribute('href', `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`);
}
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const imageUrl = `https://picsum.photos/1920/1080?random=${randomIndex}`;
    document.querySelector('.quote-card').style.backgroundImage = `url('${imageUrl}')`;
}



document.addEventListener('DOMContentLoaded', () => {
	getQuote();
	getRandomImage();
});

document.getElementById('new-quote-btn').addEventListener('click', () => {
	getQuote();
	getRandomImage();
});
