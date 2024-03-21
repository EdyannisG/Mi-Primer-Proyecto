let permitido_copiar = true;


// Mantenemos las selecciones originales y añadimos las nuevas necesarias.
let encrypButton = document.querySelector(".btn-encriptar");
let decripButton = document.querySelector(".btn-desencriptar");
let iconFigure = document.querySelector(".contenedormunieco");
let textContainer = document.querySelector(".contenedor-parrafo");
let result = document.querySelector(".texto-resultado");
let textMensagem = document.querySelector(".cajatexto");  // Asumiendo que esta es la clase correcta para la entrada de texto.
const alerta = document.querySelector(".conteudo-esquerda-regras p");
const textoDereita = document.querySelector(".texto-criptografado");
const imagensDireita = document.querySelector(".conteudo-direita-itens");
const bottonCopiar = document.querySelector(".btn-copiar");  // Asumiendo que esta es la clase correcta para el botón de copiar.


// Evento de entrada para validar el texto y proporcionar feedback.
cajatexto.addEventListener("input", function () {
   const texto = cajatexto.value;
   if (/[^a-z, ]/.test(texto)) {
       aviso.style.color = "#ec2828";
       permitido_copiar = false;
   } else {
       aviso.style.color = "#495057";
       permitido_copiar = true;
   }
});


// Funcionalidad para los botones de encriptar y desencriptar
encrypButton.onclick = function() {
   ocultarAdelante();
   let texto = cajatexto.value;
   result.textContent = encriptarTexto(texto);
};


decripButton.onclick = function() {
   ocultarAdelante();
   let texto = cajatexto.value;
   result.textContent = desencriptarTexto(texto);
};


function ocultarAdelante() {
   iconFigure.classList.add("ocultar");
   textContainer.classList.add("ocultar");
}


// Optimizamos las funciones de encriptar y desencriptar utilizando replace.
function encriptarTexto(mensaje) {
   return mensaje.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
}


function desencriptarTexto(mensaje) {
   return mensaje.replace(/enter/g, "e")
                 .replace(/imes/g, "i")
                 .replace(/ai/g, "a")
                 .replace(/ober/g, "o")
                 .replace(/ufat/g, "u");
}


// Funcionalidad para copiar al portapapeles
bottonCopiar.onclick = function () {
   if(permitido_copiar) {
       navigator.clipboard.writeText(result.textContent);
       bottonCopiar.textContent = "Copiado!";
       setTimeout(function () {
         bottonCopiar.textContent = "Copiar";
       }, 2500);
   }
};


