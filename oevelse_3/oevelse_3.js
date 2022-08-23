/* Definere input felt */
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);
console.log(ranNum);
document.querySelector("button").addEventListener("click",tjekTal);


function tjekTal(){
forsoeg++;
const brugertal = document.querySelector("#tal").value;
console.log(brugertal);
if(ranNum > brugertal){
    alert("Øv! "+ brugertal + " var for lavt. Prøv igen :)")
    console.log(ranNum, brugertal);
} else if (ranNum < brugertal) {
    alert("Øv! "+ brugertal + " var for højt. Prøv igen :)")
console.log(ranNum, brugertal);
} else {
    alert(brugertal + " er rigtigt!" + " Du brugte "+ forsoeg + " forsøg. Prøv igen :)")
console.log("Du gættede rigtigt!");
location.reload();
}
}


