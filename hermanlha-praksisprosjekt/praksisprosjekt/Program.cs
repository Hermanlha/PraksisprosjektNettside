using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var root = builder.Environment.ContentRootPath;
var files = new PhysicalFileProvider(root);

app.UseDefaultFiles(new DefaultFilesOptions
{
    FileProvider = files
});

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = files
});

app.MapGet("/api/logs", () => new[]
{
    new { week = 1, title = "Oppstart", text = "Vi startet praksisperioden og gikk gjennom oppgaven og forventningene til semesteret." },
    new { week = 2, title = "Planlegging", text = "Vi begynte å planlegge nettsiden for Rosa Velvære AS." }
});

app.Run();
