const raio = document.getElementById("raio");
const base_retangulo = document.getElementById("base_retangulo");
const altura_retangulo = document.getElementById("altura_retangulo");
const base_triangulo = document.getElementById("base_triangulo");
const altura_triangulo = document.getElementById("altura_triangulo");
const lado = document.getElementById("lado");

function calcular_area_circulo(){
    var resultado = (raio.value*raio.value)*Math.PI;
    var saida = document.getElementById("resultado_circulo");
    saida.append(resultado);
}

function calcular_area_retangulo(){
    var resultado = base_retangulo.value*altura_retangulo.value;
    var saida = document.getElementById("resultado_retangulo");
    saida.append(resultado);
}

function calcular_area_triangulo(){
    var resultado = (base_triangulo.value*altura_triangulo.value)/2;
    var saida = document.getElementById("resultado_triangulo");
    saida.append(resultado);
}

function calcular_area_quadrado(){
    var resultado = lado.value*lado.value;
    var saida = document.getElementById("resultado_quadrado");
    saida.append(resultado);
}   