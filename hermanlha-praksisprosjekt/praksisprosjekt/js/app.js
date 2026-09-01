const practiceLogs = [
    {
        week: 1,
        title: "Oppstart",
        text: "Vi startet praksisperioden og gikk gjennom oppgaven, forventninger og hva vi skal jobbe med gjennom semesteret."
    },
    {
        week: 2,
        title: "Planlegging",
        text: "Vi begynte å planlegge nettsiden for Rosa Velvære AS og så på struktur, innhold og inspirasjon fra andre nettsider."
    },
    {
        week: 3,
        title: "Videre arbeid",
        text: "Denne teksten er en plassholder og kan byttes ut med det vi faktisk gjør denne uken."
    }
];

const logContainer = document.getElementById("practiceLog");

if (logContainer) {
    logContainer.innerHTML = practiceLogs.map(log => `
        <article class="log-entry">
            <div class="week">Uke ${log.week}</div>
            <div>
                <h2>${escapeHtml(log.title)}</h2>
                <p>${escapeHtml(log.text)}</p>
            </div>
        </article>
    `).join("");
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
