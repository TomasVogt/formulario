function sistema() {
    let marca = parseInt(document.getElementById("marca").value);
    let modelo = parseInt(document.getElementById("modelo").value);
    let resultado = document.getElementById("resultado");

    // Validar si los valores son válidos
    if (isNaN(marca) || isNaN(modelo)) {
        resultado.textContent = "Por favor, seleccione una marca y un modelo válidos.";
        resultado.classList.remove("animate"); // Reinicia la animación
        void resultado.offsetWidth; // Forzar el reflujo para reiniciar la animación
        resultado.classList.add("animate");
        return;
    }

    // Lógica para determinar el precio
    if (marca == 1 && modelo == 1) {
        resultado.textContent = "EL PRECIO ES 25000";
    } else if (marca == 1 && modelo == 2) {
        resultado.textContent = "EL PRECIO ES 30000";
    } else if (marca == 1 && modelo == 3) {
        resultado.textContent = "EL PRECIO ES 34000";
    } else if (marca == 1 && modelo == 4) {
        resultado.textContent = "EL PRECIO ES 30000";
    } else if (marca == 2 && modelo == 1) {
        resultado.textContent = "EL PRECIO ES 28000";
    } else if (marca == 2 && modelo == 2) {
        resultado.textContent = "EL PRECIO ES 29000";
    } else if (marca == 2 && modelo == 3) {
        resultado.textContent = "EL PRECIO ES 40000";
    } else if (marca == 2 && modelo == 4) {
        resultado.textContent = "EL PRECIO ES 35000";
    } else if (marca == 3 && modelo == 1) {
        resultado.textContent = "EL PRECIO ES 25000";
    } else if (marca == 3 && modelo == 2) {
        resultado.textContent = "EL PRECIO ES 28000";
    } else if (marca == 3 && modelo == 3) {
        resultado.textContent = "EL PRECIO ES 30000";
    } else if (marca == 3 && modelo == 4) {
        resultado.textContent = "EL PRECIO ES 32000";
    } else if (marca == 4 && modelo == 1) {
        resultado.textContent = "EL PRECIO ES 55000";
    } else if (marca == 4 && modelo == 2) {
        resultado.textContent = "EL PRECIO ES 72000";
    } else if (marca == 4 && modelo == 3) {
        resultado.textContent = "EL PRECIO ES 58000";
    } else if (marca == 4 && modelo == 4) {
        resultado.textContent = "EL PRECIO ES 60000";
    } else {
        resultado.textContent = "No se encontró un precio para esta combinación.";
    }

    // Aplicar la animación al resultado
    resultado.classList.remove("animate"); // Reinicia la animación
    void resultado.offsetWidth; // Forzar el reflujo para reiniciar la animación
    resultado.classList.add("animate");
}