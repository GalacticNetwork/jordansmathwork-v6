// this file takes care of cloaking and theming
var title = localStorage.getItem("Title");
var faviconURL = localStorage.getItem("Favicon");
var favicon = document.querySelector("link[rel='icon']");

var stylesheetFile = localStorage.getItem("Stylesheet");
var stylesheet = document.querySelector("link[rel='stylesheet']");

if (title) {
  document.title = title;
}

if (faviconURL) {
  if (!faviconURL.includes("https://")) {
    faviconURL = "https://" + faviconURL
  }
  favicon.href = faviconURL;
}

if (stylesheetFile) {
  stylesheet.href = stylesheetFile;
}