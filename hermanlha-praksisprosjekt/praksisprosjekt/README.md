# praksisprosjekt

En enkel praksisside for Herman Haraldsen og Hussein Razzaqi sin praksis hos Rosa Velvære AS.

Nettsiden har kun to sider:

- `index.html` – forside med oppgavebeskrivelse
- `logg.html` – ukeslogg

## GitHub Pages

Legg innholdet i repoet `praksisprosjekt` og aktiver GitHub Pages fra hovedgrenen. Adressen blir da:

`https://hermanlha.github.io/praksisprosjekt/`

## Endre ukesloggen

Åpne `js/app.js` og rediger listen `practiceLogs`. Kopier et eksisterende uke-objekt for å legge til flere uker.

## C# lokalt

Prosjektet inneholder også en liten ASP.NET Core-server. Den kan kjøres lokalt med:

```bash
dotnet run
```

GitHub Pages kjører ikke C#, så den publiserte siden bruker JavaScript-listen i `js/app.js` til ukesloggen.
