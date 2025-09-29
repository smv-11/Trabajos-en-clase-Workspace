function sumar() {
    let suma1 = document.getElementById("sumando1");
    let suma2 = document.getElementById("sumando2");

    let resultado = parseInt(suma1.value) + parseInt(suma2.value);

    let resultadohtml = document.getElementById("resultadoSuma");
    resultadohtml.innerHTML = resultado;
    alert("Resultado de tu operacion");
    alert(resultado);
}

function restar() {
    let minuendo = document.getElementById("restar1");
    let sustraendo = document.getElementById("restar2");

    let resultado = parseInt(minuendo.value) - parseInt(sustraendo.value);

    let resultadohtml = document.getElementById("resultadoResta");
    resultadohtml.innerHTML = resultado;
    alert("Resultado de tu operacion");
    alert(resultado);
}

function multi() {
    let factor1 = document.getElementById("multi1");
    let factor2 = document.getElementById("multi2");

    let resultado = parseInt(factor1.value) * parseInt(factor2.value);

    let resultadohtml = document.getElementById("resultadoMultiplicacion");
    resultadohtml.innerHTML = resultado;
    alert("Resultado de tu operacion");
    alert(resultado);
}

function Division() {
    let factor1 = document.getElementById("dividido");
    let factor2 = document.getElementById("dividendo");

    let resultado = parseFloat(dividido.value) / parseFloat(dividendo.value);

    let resultadohtml = document.getElementById("resultadoDivision");
    resultadohtml.innerHTML = resultado;
    alert("Resultado de tu operacion");
    alert(resultado);
}



