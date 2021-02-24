const validator = {
  isValid(codigo) {
    let suma = 0;
    let valor = codigo.split("");

    // Validar el valor del campo y devolver false si no se cumple la condicion
    if (valor == 0) {
      return false;
    }

    // Recorrer los valores y multiplicarlos por 2 cada dos posiciones
    for (let i = 0; i < valor.length; i += 2) {
      valor[i] = valor[i] * 2;
    }

    // Convertir todos los valores a string
    for (let i = 0; i < valor.length; i++) {
      valor[i] = valor[i].toString();
    }

    // Convierte valores de 2 dígitos en números y los suma
    for (let i = 0; i < valor.length; i++) {
      if (valor[i].length == 2) {
        valor[i] = parseInt(valor[i].charAt(0)) + parseInt(valor[i].charAt(1));
      }
    }

    // Cambia los valores de string a números, para poder sumarlos
    for (let i = 0; i < valor.length; i++) {
      valor[i] = parseInt(valor[i]);
    }

    // Suma de todos los valores en la variable "suma"
    for (let i = 0; i < valor.length; i++) {
      suma = suma + valor[i];
    }

    // Valida si el segundo dígito resultado de suma, termina en "0"
    if (suma.toString().charAt(1) == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(codigo) {
    if (codigo.length != 16) {
      return false;
    }
    let enmas = "**** ".repeat(3) + codigo.slice(12);
    return enmas; 
  }
}


export default validator;
