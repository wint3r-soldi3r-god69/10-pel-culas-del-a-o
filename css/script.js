const buscador = document.getElementById("buscador");
const peliculas = document.querySelectorAll("table tr");
const mensaje = document.getElementById("mensaje");

buscador.addEventListener("input", function () {
    let texto = buscador.value.toLowerCase();
    let encontradas = 0;

    peliculas.forEach(function (pelicula) {
        let nombre = pelicula.querySelector("h2").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            pelicula.style.display = "";
            encontradas++;
        } else {
            pelicula.style.display = "none";
        }
    });

    if (encontradas === 0) {
        mensaje.textContent = "No se encontraron películas.";
    } else {
        mensaje.textContent = "";
    }
});