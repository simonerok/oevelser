document.addEventListener("DOMContentLoaded", funktionDerKaldesVedKlik);
const minKnap = document.querySelector("#knapElement");
minKnap.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");
  if ((this.alt = "snaps")) {
    console.log("indeholder alkohol");
  } else if ((this.alt = "tuborg")) console.log("indeholder alkohol");
  else this.alt = "Cola";
  console.log("alkoholfri");
}
