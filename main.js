function calcularPromedio() {
    let totalNotas = 5;
    let sumaNotas = 0;
    let contador = 0;

    while (contador < totalNotas) {
        let nota = parseFloat(prompt(`Pon tu nota de la materia ${contador + 1}:`));

        if (!isNaN(nota)) {
            sumaNotas += nota;
            contador++;
        } else {
            alert("Por favor, ingresa una nota válida.");
        }
    }

    let promedio = sumaNotas / totalNotas;
    alert(`El promedio de las ${totalNotas} materias es: ${promedio.toFixed(2)}`);
}

calcularPromedio();
