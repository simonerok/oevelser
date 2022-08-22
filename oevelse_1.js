const Cola = document.querySelector("#Cola");
const sodavand = document.querySelector("#sodavand");
const tuborg = document.querySelector("#tuborg");
const snaps = document.querySelector("#snaps");

Cola.addEventListener("click", funktionDerKaldesVedKlik);
sodavand.addEventListener("click", funktionDerKaldesVedKlik);
tuborg.addEventListener("click", funktionDerKaldesVedKlik);
snaps.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");
  if (this.alt == "snaps" || this.alt == "tuborg") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
