if (localStorage.getItem("theme") != null) {
  document.body.setAttribute("theme", localStorage.getItem("theme"))
}
document.addEventListener("keydown", async (e) => {
  if (e.key == "!") window.parent.window.location.replace(localStorage.getItem("panicurl") || 'https://classroom.google.com/h')
})
function panicFunction() {
    location.replace('https://classroom.google.com/h');
}
