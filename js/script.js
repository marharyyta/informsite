const hobbyFacts = [
    "Коли хочеться спокою, я обираю книгу та повільну музику.",
    "Найкраща мотивація для гри на гітарі - улюблена пісня, яку хочеться зіграти самостійно.",
    "Ігри для мене цінні тоді, коли в них є сильний сюжет і атмосфера.",
    "Німецька мова допомагає мені відкривати нові джерела інформації та культури.",
    "Фільми й серіали надихають мене звертати увагу на деталі й настрій історії."
];

const factText = document.querySelector("[data-fact-text]");
const factButton = document.querySelector("[data-fact-button]");
const feedbackForm = document.querySelector("[data-feedback-form]");
const formStatus = document.querySelector("[data-form-status]");
const clockBlocks = document.querySelectorAll("[data-clock]");

if (factText && factButton) {
    let factIndex = 0;
    factButton.addEventListener("click", () => {
        factIndex = (factIndex + 1) % hobbyFacts.length;
        factText.textContent = hobbyFacts[factIndex];
    });
}

if (feedbackForm && formStatus) {
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nameField = feedbackForm.querySelector('input[name="name"]');
        const visitorName = nameField && nameField.value.trim() ? nameField.value.trim() : "Дякую";
        formStatus.textContent = `${visitorName}, ваш відгук прийнято. Дякую за увагу до сайту!`;
        feedbackForm.reset();
    });
}

if (clockBlocks.length > 0) {
    const updateClock = () => {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("uk-UA", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Europe/Kyiv"
        }).format(now);

        clockBlocks.forEach((block) => {
            block.textContent = `Київський час: ${formatted}`;
        });
    };

    updateClock();
    window.setInterval(updateClock, 1000);
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
