const distancia = 34000; // tipo number 

if (distancia >= 0 && distancia <= 1000) {
    console.log("Ir a pie");
} else if (distancia > 1000 && distancia <= 10000) {
    console.log("Usa bicicleta");
} else if (distancia > 10000 && distancia <= 30000) {
    console.log("Toma colectivo");
} else if (distancia > 30000 && distancia <= 100000) {
    console.log("Usa auto");
} else if (distancia > 100000) {
    console.log("Usa avion");

}
