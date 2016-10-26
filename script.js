let main = document.getElementById("main");
if (main) {
  main.style.width = "90%";
  main.style.minWidth = "1180px";
}
let articles = document.getElementsByClassName("l-doubleColumn-main");
if (articles.length > 0) {
  articles[0].style.width = "80%";
  articles[0].style.minWidth = "800px";
}