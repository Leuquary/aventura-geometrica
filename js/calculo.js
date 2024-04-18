//circulo
const raio = document.getElementById("raio");

//retangulo
const base_retangulo = document.getElementById("base_retangulo");
const altura_retangulo = document.getElementById("altura_retangulo");

//triangulo
const base_triangulo = document.getElementById("base_triangulo");
const altura_triangulo = document.getElementById("altura_triangulo");

//quadrado
const lado = document.getElementById("lado");

//cubo
const lado_face = document.getElementById("lado_face");

//cuboide
const comprimento_cuboide = document.getElementById("comprimento_cuboide");
const largura_cuboide = document.getElementById("largura_cuboide");
const altura_cuboide = document.getElementById("altura_cuboide");

//pentagono
const apotema_penatgono = document.getElementById("apotema_pentagono");
const lado_pentagono = document.getElementById("lado_pentagono");

//hexagono
const apotema_hexagono = document.getElementById("apotema_hexagono");
const lado_hexagono = document.getElementById("lado_hexagono");

//heptagono
const apotema_heptagono = document.getElementById("apotema_heptagono");
const lado_heptagono = document.getElementById("lado_heptagono");

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

function calcular_area_cubo(){
    var resultado = (lado_face.value*lado_face.value)*6;
    var saida = document.getElementById("resultado_cubo");
    saida.append(resultado);
}

function calcular_area_cuboide(){
    var resultado = 2*(comprimento_cuboide.value*largura_cuboide.value)+2*(largura_cuboide.value*altura_cuboide.value)+2*(comprimento_cuboide.value*altura_cuboide.value);
    var saida = document.getElementById("resultado_cuboide");
    saida.append(resultado);
}

function calcular_area_pentagono(){
    var resultado = ((5 * lado_pentagono.value) * apotema_penatgono.value)/2;
    var saida = document.getElementById("resultado_pentagono");
    saida.append(resultado);
}

function calcular_area_hexagono(){
    var resultado = ((6 * lado_hexagono.value) * apotema_hexagono.value)/2;
    var saida = document.getElementById("resultado_hexagono");
    saida.append(resultado);
}

function calcular_area_heptagono(){
    var resultado = ((7 * lado_heptagono.value) * apotema_heptagono.value)/2;
    var saida = document.getElementById("resultado_heptagono");
    saida.append(resultado);
}