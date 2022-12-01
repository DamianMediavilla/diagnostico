# Diagnostico // Diagnosi // Diagnosis

## [Español]

#### __El juego__

___Diagnóstico___ es un juego simple, para navegador. Está basado en las mecanicas de el "ahorcado". Se elige una palabra oculta de una lista. El jugador, intentará adivinar la palabra, probando una letra por vez. Si la letra coincide con una letra de la palabra oculta, ésta y se revelará en pantalla, en todas las posiciones donde se encuentre. Por el contrario, si la letra no se encuentra en la palabra, la letra se descarta, se contabiliza un "fallo" y se actualiza el dibujo. 

El juego termina cuando se revelan todas las letras de la palabra oculta, o cuando se alcanza el límite de fallos permitidos (5 fallos).

#### __Desarrollo__

El juego está desarrollado para ser ejectutado en cualquier navegador. Utiliza código HTML5, CSS, y JavaScript. Soporta resoluciones desde __280px__ de ancho en adelante. 
Originalmente iba a usarse la entrada de teclado para elegir las letras a adivinar, pero posteriormente se cambio a un estilo de juego "point & click" ya que de esta manera, al incluir el diseño de un teclado, facilita el diseño responsivo y simplifica la interfaz.

Este juego, soporta tres idiomas (Español, Ingles, Italiano). La version del juego cargada por defecto, ocurre en el idioma por defecto del navegador, pero tambien puede ser seleccionado manualmente desde el icono superior izquierdo. 

#### __Assets - contenido externo__

Este juego utiliza un framework de CSS ligero, llamado [NES.CSS](https://github.com/nostalgic-css/NES.css/) que intenta emular la estética pixelada de viejas consolas de videojuegos. Sin embargo, algunos iconos no se incluyen en ésta, por los que serán desarrollados por separado. 

La imagen del frente hospital pertenece a [dai420](https://dai420.itch.io/hospital)

El personaje principal es un sprite de [seliel-the-shaper](https://seliel-the-shaper.itch.io/character-base) incluido en el pack "Mana Seed"

Todo lo demás es de creacion propia, creado con piskel. Puedes descargar las animaciones como parte de un pack [aquí](https://damianmediavilla.itch.io/diagnosis-pack)

#### __Proceso Creativo__

La idea original fue cobrando forma como parte de un desafío de un bootcamp de programacion. El desafío se planteó como un juego de ahorcado tradicional, que debía incluir algunas palabras, la opción de agregar una palabra (ésta opción luego se eliminó del desarrollo), la seleccion aleatoria de la palabra para adivinar, un método de entrada para las letras, un método de verificiar la letra ingresada, el dibujo de la imagen segun la cantidad de fallos, y demás funcionalidades. 

En primer lugar quise darle algo más de sentido y contexto al juego. Si la vida de una persona dependía de una palabra, debía haber un contexto coherente. Pensé brevemente en la simulación de un juicio, y una palabra como representación de evidencia para dictar un veredicto favorable o desfavorable, pero no veía clara la aplicación del contexto ni una clara representacion gráfica de la situacion. 
Por otro lado pense en un condenado, que buscaba una palabra para sobornar a su verdugo y así evitar el deceso. Si bien parecia más interesante, algunas cosas no terminaban de cerrar. Había pensado en diferentes formas de ejecución, y un hilo conductor para todas las posibles palabras _(horca, púlpito, guillotina, silla eléctrica, etc)_ de manera de darle una temática más definida. De todos modos no terminaba de convencerme y parecía dar más trabajo de diseño. 

Por último, teniendo bien en claro que las palabras debían tener un contexto definido, y un hilo conductor que las enmarcara en una temática bien clara es que elegí el nombre del juego y la estética hospitalaria. 

De esta manera el juego obtiene un contexto, una historia, un escenario bien definido, un objetivo bien claro, y un resultado directo de las acciones del jugador. 

El `jugador` toma el rol de un `paciente` que se dirige a un hospital. 
Cada intento de adivinar una `letra`, representa un `síntoma` que puede ser identificado y tratado a tiempo (letra correcta) o un síntoma mal diagnosticado (letra incorrecta), que empeora el estado del paciente, alejándolo de la recuperación. 
El empeoramiento del estado de salud del paciente, se representa de manera gráfica con el tipo de tratamiento médico _(internación, respirador, suero, oxígeno, cardiometro, etc)_.
Las `incógnitas` son siempre nombres de enfermedades o padecimientos que afectan al paciente (como la rabia o el botulismo).

El `descenlace` del juego ocurre con dos posibles situaciones:
+ __Diagnóstico correcto:__ El jugador adivinó la palabra, y se "cura su enfermedad"
+ __Sin diagnóstico a tiempo:__ El jugador agotó todos sus intentos permitidos y no adivino al palabra. Al agravarse la enfermedad, el paciente perece. 

Finalmente, se revela un mensaje final, haciéndo explícito el descenlace y dándo algun tipo de información sobre la enfermedad en padecida. 



## [English] 

___Diagnosis___ is a simply browser game, based on "hangman" mechanics. There is a hidden word from a list. The player, tries to guess the word by choosing letters once at time. If the letter is contained on the word, 