const file = new XMLHttpRequest();
file.open("GET", "imdbpolls.txt");
file.send();
file.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('imdbpolls').innerHTML = file.responseText
  }
}