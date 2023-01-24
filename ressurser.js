const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function renderResources(){
    let buttonsHTML = ""

    resources.map((article, makePage) => buttonsHTML += `<button onclick="showArticle(${makePage})" id="button-${makePage}">${article.category}</button>
    <article id="article-${makePage}" class="hidden">
    <h2>${article.category}</h2>
    <p>${article.text}</p>
    <ul>
        ${article.sources.map(links => 
        `<li><a href="${links.url}">${links.title}</a></li>`).join("")}
    </ul>
    </article>`)

    document.querySelector("main").innerHTML = buttonsHTML

    document.querySelector("button").classList.add("active")
    document.querySelector("article").classList.remove("hidden")

    
    /*
    Kilde: https://github.com/toremake/UIN_coursefiles_2023/tree/main/legodudes_webshop/workshop_losning_oppg4-8
    Tok inspirasjon fra løsningsforslaget og lagde dynamiske id'er slik at jeg kunne identifisere indexen som var relevant.
    
    */
   
}

function showArticle(makePage){
   
    const buttonElements = document.querySelectorAll("button")

    buttonElements.forEach((element) => {
        element.classList.remove("active")
    })

    const articleElements = document.querySelectorAll("article")

    articleElements.forEach((element) => {
        element.classList.add("hidden")
    })
    
    document.querySelector("#button-"+makePage).classList.add("active")
    document.querySelector("#article-"+makePage).classList.remove("hidden")
    /*
    Kilde: https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/
    Brukte kode fra denne siden for å kunne legge til å fjerne relevante klasser fra article elementet
    */

}

renderResources()