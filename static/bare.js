const dropdown = document.getElementById("bareSwitcher");

const DEFAULT_BARE = "https://frog.vpn.net.br/bare/";
const ALTERNATE_BARE = "https://frog.tracbras.com.br/bare/";
const ALTERNATE_BARE_2 = "https://introducing.wine-software.com/bare/";
const ALTERNATE_BARE_3 = "https://historicalfiction.vpn.net.br/bare/";

if (!localStorage.getItem("bareServer")) {
  localStorage.setItem("bareServer", DEFAULT_BARE);
}
updateBareServer(localStorage.getItem("bareServer"));

dropdown.value = localStorage.getItem("bareServer");

dropdown.addEventListener("change", (event) => {
  const selectedBare = event.target.value;
  updateBareServer(selectedBare);
  localStorage.setItem("bareServer", selectedBare);
});

function updateBareServer(bareUrl) {
  if (self.__uv$config) {
    self.__uv$config.bare = bareUrl;
    console.log(`Bare server updated to: ${bareUrl}`);
  }
}
