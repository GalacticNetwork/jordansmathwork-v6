function filterGames() {
  var input, filter, box, games, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  box = document.getElementsByClassName('box')[0];
  games = box.getElementsByClassName('link');

  for (i = 0; i < games.length; i++) {
    txtValue = games[i].innerText || games[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      games[i].style.display = "";
    } else {
      games[i].style.display = "none";
    }
  }
}

document.getElementById('searchInput').addEventListener('input', filterGames);


// Clipped Was Here (;