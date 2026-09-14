const practiceLogs = [
    {
        week: 1, 
        title: "24.08.26 Oppstart",
        text: "Vi startet praksisperioden og gikk gjennom oppgaven, forventninger og hva vi skal jobbe med gjennom semesteret."
    },
    {
        week: 2,
        title: "31.08.26 Planlegging av nettside",
        text: "Vi har begynt å planlegge nettsiden for Rosa Velvære AS, snakket med eier av bedriften og kartlagt hennes ønsker, forventninger og presentert noen av ideene våres."
    },
    {
        week: 3,
        title: "07.09.26 Figma",
        text: "Begynte med sketches og teste ut themes for nettsiden."
    },
    {
        week: 4, 
        title: "14.09.26 Status 1",
        text: "Lagde egen side for status på praksisnettsiden, jobbet videre med sketches og temaer for nettsiden. Har møte med bedriften for å få tilbakemelding på sketches og nettside utseende. Filme video for status 1."
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
