const btnBolinhas = document.getElementById("addBolinhas");
let total = 0;
let bolinhas = "";
let bola = '<div class="bolinhas"></div>';

btnBolinhas.addEventListener("click", () => {
    total = total + 1;
    bolinhas = "";
    for (let index = 0; index < total; index++) {
        bolinhas = bolinhas + bola;
    }
    document.getElementById("GroupBolinhas").innerHTML = bolinhas;
});