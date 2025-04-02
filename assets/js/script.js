function calcularRutVerificador() {
    let rut = document.getElementById("rut").value;

    rut = parseInt(rut);

    if (isNaN(rut) || rut > 99999999 || rut < 10000000) {
        alert('No ingresaste un número válido');
    } else {
        rut = rut.toString();  // despues de asegurarse que el dato introducido sea un numero, lo vuelve string para luego convertirlo en arreglo
        rut = rut.split('');
        let digitoverificador = 0;
        let x = 2 ;
     
        for (let i = 7; i > -1 ; i--){
          //  alert('Empezamos a calcular = ' + rut[i] + ' * ' + x);
            digitoverificador += parseInt(rut[i]) * x;
         //   alert(digitoverificador);
            x++;
            if(x == 8){
                x = 2;
            }
        }

        


        digitoverificador = digitoverificador % 11;
        digitoverificador = 11 - digitoverificador;

        if (digitoverificador == 11) {
            digitoverificador = 0;
        } else if (digitoverificador == 10) {
            digitoverificador = "K";
        }

        alert('Gracias por tu RUT 😈 Tu dígito verificador es ' + digitoverificador);
    }
}
