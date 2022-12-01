const pruebas_lang = {
    "ES": "--- Pruebas Fallidas ---", 
    "IT": "--- Prove Fallite ---", 
    "EN": "---Failed Tests---"
}
const titulo_lang = {
    "ES": "Diagnostico", 
    "IT": "Diannostico", 
    "EN": "Diagnostic"
}
const tituloh1_lang = {
    "ES": "Diagnóstico", 
    "IT": "Diannostico", 
    "EN": "Diagnostic"
}
const textointro_lang = {
    "ES": "Últimamente, no te has sentido del todo bien. Algunos síntomas te preocupan <br> Te diriges al hospital mas cercano a buscar atención médica", 
    "IT": "Non ti stai sintendo bene. Hai dei sintomi preocupanti. <br> Vai in ospedale a fare un controllo con il medico", 
    "EN": "Recently, you are not feeling fine. You are a little bit worried <br> You went to a near hospital, to take some medical atention"
}
const win_text_lang = {
    "ES": ["¡Lo lograste!", "Demasiado tarde ='("],
    "IT": ["¡Bravo!", "Purtroppo è tarde ='("],
    "EN": ["¡Success!", "Too late...  ='("]

}
const sintoma_text_lang = {
    "ES": [" ¡Identificaste un sintoma! "," Tu estado empeora... "],
    "IT": ["¡Hai trattato un sintoma!", "Stai peggiorando... "],
    "EN": ["¡Symptom identified!", "It's getting worse...  ='("]
}




//alert(window.navigator.languages)
switch (window.navigator.language){
    case "es-ES":
       // alert ("español")
        break;
    case "it-IT":
        //alert(pruebas_lang["IT"])

        break;
    default:
       // alert ("no español")
}

let palabras = ["BOTULISMO", "ERISIPELA", "RABIA", "TETANOS","SALMONELLA"]
let mensaje_win = [
    "Has identificado a tiempo tus síntomas, y enseguida lo relacionaste con algo que comiste. El <span class=\"palabra_clave\">BOTULISMO</span> alimentario se da por la ingestion de productos contaminados. Afortunadamente el tratamiento temprano te ha curado", 
    "Afortunadaamente has identificado a tiempo todos tus síntomas. Con el tratamiento correcto la <span class=\"palabra_clave\">ERISIPELA</span> rara vez se complica. Tras unos días de reposo vuelves a casa.", 
    "Una deteccion temprana, y el tratamiento adecuado, te ha salvado de la <span class=\"palabra_clave\">RABIA</span>. Dos meses más tarde, y luego de 9 inyecciones has concluído el tratamiento.",
    "Te has librado afortunadamente del <span class=\"palabra_clave\">TÉTANOS</span>. Afortunadamente tenías la vacuna vigente, y solo necesitaste un refuerzo",
    "Estás atento a tu alimentación, y a la higiene de los productos que consumes. Al diagnosticar a tiempo la <span class=\"palabra_clave\">RABIA</span>, logras recuperarte luego de unos días en el hospital. ¡No más huevos de campo por un tiempo!"
]
let mensaje_lose = [
    "Lamentablemente no diagnosticaste a tiempo. Esa conserva que comiste hace unos dias estaba en mal estado, y contrajiste <span class=\"palabra_clave\">BOTULISMO</span>. Las toxinas han invadido tu cuerrpo por completo. Ahora tienes el diagnostico, pero es demasiado tarde", 
    "Lamentablemente no diagnosticaste a tiempo, y la <span class=\"palabra_clave\">ERISIPELA</span> se complicó más de lo esperado.", 
    "La <span class=\"palabra_clave\">RABIA</span> se contrae por contacto con animales infectados. El tratamiento tardío es mortal.",
    "Las heridas con metales oxidados, aunque pequeñas pueden ser peligrosas. Ésta vez, el <span class=\"palabra_clave\">TÉTANOS</span> te jugó una mala pasada. Tal vez con el refuerzo de la vacuna, o con atencion médica temprana, el desenlace habría sido mejor...",
    "La limpieza en la cocina es escencial, sobre todo cuanddo se trata de productos de campo, como los huevos. La <span class=\"palabra_clave\">SALMONELLA</span> no te permitió disfrutar lo suficiente tu último omelette."
]

let win_text = ["¡Lo lograste!", "Demasiado tarde ='("]
let sintoma_text =[" ¡Identificaste un sintoma! "," Tu estado empeora... "]