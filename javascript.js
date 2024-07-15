const azul = document.getElementById("azul")
const vermelho = document.getElementById("vermelho")
const verde = document.getElementById("verde")
const amarelo = document.getElementById("amarelo")
const roxo = document.getElementById("roxo")
let cor = "gray"
const cor_aleatoria = document.getElementById("luz_cor")

cor_aleatoria.oninput = function () {
    lampada.style.background = this.value
    cor_sombra = this.value
}
const lampada = document.getElementById("lampada")

let barra = document.getElementById("barra")

azul.onclick = function (){
    lampada.style.background = "blue"
    cor_sombra = "blue"
    barra.value = 0
}
vermelho.onclick = function (){
    lampada.style.background = "red"
    cor_sombra = "red"
    barra.value = 0
}
verde.onclick = function (){
    lampada.style.background = "green"
    cor_sombra = "green"
    barra.value = 0
}
amarelo.onclick = function (){
    lampada.style.background = "yellow"
    cor_sombra = "#FEE12B"
    barra.value = 0
}
roxo.onclick = function (){
    lampada.style.background = "#8F00FF"
    cor_sombra = "purple"
    barra.value = 0
}





document.getElementById('barra').oninput = function () {
    var intensidade = this.value
    document.getElementById('intensidade').innerText = intensidade
    updateBoxShadow()
}


function updateBoxShadow() {
    var lampada = document.getElementById('lampada');
    var intensidade = document.getElementById('barra').value;
    lampada.style.boxShadow = `0px 10px 180px ${intensidade}px ${cor_sombra}`;
}


