const textarexEl = document.getElementById("textarea")
const totalcounterEl = document.getElementById("total-counter")
const remainingcounterEl = document.getElementById("remaining-counter")

textarexEl.addEventListener("keyup",()=>{
 updateCounter()
});

updateCounter()

function updateCounter(){
    totalcounterEl.innerText = textarexEl.value.length;
    remainingcounterEl.innerText = textarexEl.getAttribute("maxLength") - textarexEl.value.length;
}