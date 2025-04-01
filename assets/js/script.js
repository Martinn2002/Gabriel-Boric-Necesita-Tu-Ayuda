function calcularRutVerificador() {
    let rut = document.getElementById("rut").value;

    rut = parseInt(rut);

    if (isNaN(rut) || rut > 99999999 || rut < 10000000) {
        alert('No ingresaste un número válido');
    } else {
        rut = rut.toString();  // despues de asegurarse que el dato introducido sea un numero, lo vuelve string para luego convertirlo en arreglo
        rut = rut.split('');
        let digitoverificador = 0;
        let x = 0;

        for (let i = 2; x < rut.length; i++) {
            digitoverificador += parseInt(rut[rut.length - 1 - x]) * i; // multiplica desde derecha a izquierda
            x++;
            if (i === 7) i = 1; // reinicia el multiplicador a 2 despues del 7 y el bucle acaba cuando x recorre al arrgelo por completo
        }

        digitoverificador = digitoverificador % 11
        digitoverificador = 11 - digitoverificador;

        if (digitoverificador == 11) {
            digitoverificador = 0;
        } else if (digitoverificador == 10) {
            digitoverificador = "K";
        }

        alert('Gracias por tu RUT 😈 Tu dígito verificador es ' + digitoverificador);
    }
}
