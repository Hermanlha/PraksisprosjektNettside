# praksisprosjekt

Dette er vår nettside for vårt praksisprosjekt hos Rosa Velvære AS.


- `index.html` – forside med oppgavebeskrivelse
- `logg.html` – ukeslogg

## GitHub Pages

Legg innholdet i repoet `praksisprosjekt` og aktiver GitHub Pages fra hovedgrenen. Adressen blir da:

`https://hermanlha.github.io/praksisprosjekt/`

## Endre ukesloggen

Hver uke skal vi loggføre arbeidet vårt, da åpner vi `js/app.js` og redigerer listen `practiceLogs`. Husk å kopiere et eksisterende uke-objekt for å legge til flere uker.

## C# lokalt

Prosjektet inneholder også en liten ASP.NET Core-server. Den kan kjøres lokalt med:

```bash
dotnet run
```

Siden GitHub Pages ikke kjører C#, vil den publiserte siden bruke JavaScript-listen i `js/app.js` til ukesloggen.
