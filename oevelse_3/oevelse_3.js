/* Definere input felt */
knap.addEventListener("click", brugknap);
var gæt = document.querySelector("#tal").value;
var tal = math.floor(Math.random() * 10);
var knap = document.querySelector("button");

function rigtigt() {
  if (tal == gæt) {
    alert("Du har vundet!");
  }
}
function forkert() {
  if (tal !== gæt) {
    alert("Du har tabt!");
  }
}
function brugknap() {
  console.log("Klik på knap");
}
