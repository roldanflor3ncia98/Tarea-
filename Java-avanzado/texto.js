const texto = document.getElementById(`Texto`);

const contar = document.getElementById(`Contar`);

//console.log(texto, contar)

texto.addEventListener(`keyup`, function () {
    contar.innerText = texto.value.length

}
)