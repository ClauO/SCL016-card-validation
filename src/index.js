import validator from './validator.js';

const regex = /[^0-9]/; 

const botonImagen = () => {
    let valor = document.querySelector(".cuadro").value;
    if (validator.isValid(valor)) {
        document.querySelector('.segundaPagina').style.display = "block";
        document.querySelector('.primeraPagina').style.display = "none";
        document.querySelector('.textoError').style.display = "none";
        //document.querySelector('.mostrarTarjeta').innerText = "**** ".repeat(3) + valor.slice(12);
        document.querySelector('.mostrarTarjeta').innerText = validator.maskify(valor);
    } else {
        document.querySelector(".tarInvalida").style.display = "block";
    }
}

const segundoBoton = () => {
    document.querySelector('.final').style.display = "block";
    document.querySelector('.segundaPagina').style.display = "none";
}

const inicio = () => {
    document.querySelector('.primeraPagina').style.display = "block";
    document.querySelector('.segundaPagina').style.display = "none";
    document.querySelector(".tarInvalida").style.display = "none";
    resetearValores();
}

const volver = () => {
    document.querySelector('.primeraPagina').style.display = "block";
    document.querySelector('.final').style.display = "none";
    document.querySelector(".tarInvalida").style.display = "none";
    resetearValores();
}

const formatearNumero = () => {
    const valor = document.querySelector('.cuadro').value;
    document.querySelector('.cuadro').value = valor.replace(regex, '');
}

const resetearValores = () => {
    document.querySelector('.cuadro').value = "";
    document.querySelector('.cuadro2').value = "";
}

//Asignando evento onclick

document.querySelector(".contenedor-imagen").addEventListener("click", botonImagen);
//Al hacer click a la primera imagen, que ejecute la funcion segun corresponda, si la tarjeta es válida, pasar a segunda página
document.querySelector(".imagen2").addEventListener("click", segundoBoton);
// Al hacer click a la segunda imagen, para confirmar el uso de la tarjeta, que nos envíe a la última página
document.querySelector(".botonVolver").addEventListener("click", inicio);
// Al presionar el botón volver, que me lleve a la página principal y que se reseteen los valores ingresados anteriormente
document.querySelector(".finalizar").addEventListener("click", volver);
// 
document.querySelector(".cuadro").addEventListener("keyup", formatearNumero);