//identificacion del DOM
let campo_palabra=document.getElementById("palabra")

let campo_dibujo=document.getElementById("dibujo")
let campo_descartes=document.getElementById("fallos")
let campo_edicion=document.getElementById("edicion")
let  boton_comenzar=document.getElementById("comenzar_juego")
let  boton_listar=document.getElementById("listar_palabras")
let campo_teclado = document.getElementById("teclado")
let campo_mensaje_final = document.getElementById("fin_del_juego")
let campo_pruebas = document.getElementById("pruebas")

// Algunas variables
let id_palabra = Math.floor(Math.random() * palabras.length) 
let array_descartes = []
let letra = null
let incognita = []
let resultado



boton_listar.onclick=listar_palabras
boton_comenzar.onclick=nuevo_juego


function quitar_palabra(){
    alert("se quito la palabra " + event.target.id)
    palabras.splice(event.target.id, 1)
    listar_palabras()
    
}
function vaciar_div(div){
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

}
function crear_palabra(){
    let nueva_palabra = prompt("Ingresa una nueva palabra")
    while (true){
        if (nueva_palabra.length < 4){
            alert("Palabra demasiado corta!")
        }else if (nueva_palabra.length > 12){
            alert("Palabra demasiado larga!")
            // }else if ([" "] in nueva_palabra){
                //     alert("Sin espacios")
            }else {
                alert("Palabra cargada")
                palabras.push(nueva_palabra)
                break
            
        }
        nueva_palabra = prompt("Ingresa una nueva palabra")
    }
    listar_palabras()
    
    
}

function listar_palabras(){
    //alert("listando palabras")
    let indice=0;
    while (campo_edicion.hasChildNodes()) {
        campo_edicion.removeChild(campo_edicion.firstChild);
    }
    palabras.forEach(palabra => {
        fila = document.createElement("div")
        fila.setAttribute("class", "fila_lista")
        palabra_clave = document.createElement("p")
        palabra_clave.textContent = palabra
        fila.appendChild(palabra_clave)
        boton_quitar = document.createElement("button")
        boton_quitar.setAttribute("id", indice)
        boton_quitar.setAttribute("class", "nes-btn")
        boton_quitar.textContent="Quitar"
        boton_quitar.addEventListener("click", quitar_palabra)
        fila.appendChild(boton_quitar)
        campo_edicion.appendChild(fila)
        indice++


        
    });
    boton_crear =document.createElement("button")
    boton_crear.textContent = "Nueva Palabra"
    boton_crear.setAttribute("class", "nes-btn")
    boton_crear.onclick = crear_palabra
    campo_edicion.appendChild(boton_crear)

}

function nuevo_juego(){
    console.log("nuevo juego")
    id_palabra = Math.floor(Math.random() * palabras.length) 
    array_descartes = []
    incognita =[] 
    for (let i = 0; i < palabras[id_palabra].length; i++) {
        incognita.push("_");
        
    }
    dibujar_incognita();   
    vaciar_div(campo_teclado) 
    vaciar_div(campo_dibujo) 
    vaciar_div(campo_descartes) 
    vaciar_div(campo_edicion) 
    vaciar_div(campo_mensaje_final) 
    campo_dibujo.appendChild(document.createElement("img"))
    dibujar_pantalla()
    campo_mensaje_final.removeAttribute("class","mensaje-final")
    boton_listar.setAttribute("class","ocultar")
    cargar_teclado(campo_teclado);
    // boton_.setAttribute("class","ocultar")
    

}

function dibujar_pantalla(){
    campo_dibujo.firstChild.setAttribute("src", "img/diagnostico_" + (array_descartes.length+2) +".gif")
}

function obtener_letra(){
    var patron=/^[a-z]/;
    do{
        letra = prompt("ingrese letra")

    }while (!patron.test(letra))
    return letra
  

    
}
function revelar_letra_acertada(letra){
    //alert("acerto una letra")
    for (let i = 0; i < palabras[id_palabra].length; i++) {
        if (palabras[id_palabra][i] == letra){
            incognita[i] =letra
            // alert("letra " + letra)
            // alert("letra incognita "  + incognita[i])
            // alert("incog   " + incognita)
        }
        
    }

}

function dibujar_incognita(){

    while (campo_palabra.hasChildNodes()) {
        campo_palabra.removeChild(campo_palabra.firstChild);
    }
    incognita.forEach(element => {
        
    });
    incognita.forEach(caracter => {
        p_caracter=document.createElement("p")
        p_caracter.textContent = caracter
        campo_palabra.appendChild(p_caracter)

        
    });
}
function dibujar_descartes(){

    
    while (campo_descartes.hasChildNodes()) {
        campo_descartes.removeChild(campo_descartes.firstChild);
    }
    
    array_descartes.forEach(caracter => {
        p_caracter=document.createElement("p")
        p_caracter.textContent = caracter
        campo_descartes.appendChild(p_caracter)

        
    });


}



function cargar_teclado(elementoHTML){
    //Esta funcion carga el teclado qwerty en el elemento HTML
    
    teclado = [["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","ñ"], ["z","x","c","v","b","n","m"]]
    teclado.forEach(linea_de_teclas => {
        linea_teclado = document.createElement("div")
        linea_teclado.setAttribute("class","teclado-linea")
        linea_de_teclas.forEach(letra=>{
            tecla= document.createElement("button")
            tecla.textContent= letra.toUpperCase()
            tecla.setAttribute("class","nes-btn")
            // tecla.setAttribute("class", "tecla-teclado")
            tecla.addEventListener("click", click_tecla)

            linea_teclado.appendChild(tecla)
        })
        elementoHTML.appendChild(linea_teclado)
        
    });
}
function click_tecla(){
    tecla = event.target
    tecla.setAttribute("class","nes-btn is-disabled")
    tecla.removeEventListener("click", click_tecla)
    verificar_letra_ingresada(tecla.textContent)


}
function verificar_letra_ingresada(letra){
    if (palabras[id_palabra].includes(letra)){
        
        revelar_letra_acertada(letra);            
        dibujar_incognita();
    }else{
        array_descartes.push(letra)
        campo_pruebas.removeAttribute("class")
        dibujar_descartes();
        dibujar_pantalla();
    }
    terminar_juego()

    
}
function animacion_final(){
    // Cambia la animacion del paciente
    if(win){

        campo_dibujo.firstChild.setAttribute("src", "img/diagnostico_0.gif")
    }else{
        campo_dibujo.firstChild.setAttribute("src", "img/diagnostico_fin.gif")

    }
    // oscurece la pantalla (se da por defecto, usando un transition all en css)
}
function terminar_juego(){
    if (array_descartes.length == 5){ //Perdio el juego 
        //cagar mensaje de que perdio
        win=false;
        mensaje_final=mensaje_lose[id_palabra]
    }else if (!incognita.includes("_")){
        //cargar mensaje de que gano
        win=true
        mensaje_final=mensaje_win[id_palabra]
    }
    else{
        return
    }

    animacion_final()

    texto_ganador=win?win_text[0]:win_text[1];
    campo_mensaje_final.setAttribute("class", "mensaje_final")
    texto_mensaje = document.createElement("p")
    texto_mensaje.innerHTML=mensaje_final
    parrafo_ganador=document.createElement("p")
    parrafo_ganador.innerHTML=texto_ganador
    
    campo_mensaje_final.appendChild(parrafo_ganador)    
    campo_mensaje_final.appendChild(texto_mensaje)
    // campo_mensaje_final.appendChild(boton_comenzar)
    ancla_inicio=document.createElement("a")
    ancla_inicio.setAttribute("href", "index.html")
    boton_inicio=document.createElement("button")
    boton_inicio.setAttribute("class","nes-btn")
    boton_inicio.textContent="Volver al inicio"
    
    ancla_inicio.appendChild(boton_inicio)
    campo_mensaje_final.appendChild(ancla_inicio)
    
    document.body.appendChild(campo_mensaje_final)

    //Cargar botones "nuevo juego" "volver al menu"
    //Resetear los valores
}
