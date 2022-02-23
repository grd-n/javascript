const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote: "살아있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "인간은 자유로우며 인간이 어떠한 것이 될 것인가는 앞으로 그들이 자유로이 결정할 것이다.",
        author: "장 폴 사르트르",
    },
    {
        quote: "언어는 존재의 집이다.",
        author: "마르틴 하이데거",
    },
    {
        quote: "세상의 악함 대부분은 악한 의도 때문이라기보다 '생각하지 않는 것'에서 비롯된다.",
        author: "한나 아렌트",
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐주지 않는다.",
        author: "빌 게이츠",
    },
    {
        quote: "성공은 친구를 만들고, 역경은 친구를 시험한다.",
        author: "퍼블릴리어스 사이러스"
    },
    {
        quote: "서두르지 말되, 멈추지 말라",
        author: "괴테",
    },
    {
        quote: "생각하는대로 살지 않으면, 사는대로 생각하게 된다.",
        author: "폴 발레리",
    },
    {
        quote: "삶의 의미는 발견하는 것이 아니라 만들어가는 것이다.",
        author: "생텍쥐페리",
    },
    {
        quote: "우리는 생각하는대로 된다.",
        author: "마가렛 대처",
    },
];




function randomQuote () {
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;    
}
randomQuote();
setInterval(randomQuote, 5000);