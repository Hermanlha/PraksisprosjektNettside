const practiceLogs = [
    {
        week: 1,
        title: "Oppstart",
        text: "Vi startet praksisperioden og gikk gjennom oppgaven, forventninger og hva vi skal jobbe med gjennom semesteret."
    },
    {
        week: 2,
        title: "Planlegging av nettside",
        text: "Vi har begynt å planlegge nettsiden for Rosa Velvære AS, snakket med eier av bedriften og kartlagt hennes ønsker, forventninger og presentert noen av ideene våres."
    },
    {
        week: 3,
        title: "Videre arbeid",
        text: "Kommer senere."
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
