function encriptar(){
  let texto=document.querySelector(".cuadrotexto").value;

  let textoencriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length!=0){
      document.querySelector(".cajaimg").value=textoencriptado;
      document.querySelector(".titulo").textContent="Su texto fue encriptado con exito";
      document.querySelector(".sub-titulo").textContent="";
      document.querySelector(".muneco").style.display='none';
    } else {
      document.querySelector(".cajaimg").value="";
      document.querySelector(".titulo").textContent="Ningún mensaje fue encontrado";
      document.querySelector(".sub-titulo").textContent="Ingresa el texto que desees encriptar o esencriptar";
      document.querySelector(".muneco").style.display='block';
      alert("Debes ingresar un texto")
    }
}

function desencriptar(){
  let texto=document.querySelector(".cuadrotexto").value;

  let textoencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length!=0){
      document.querySelector(".cajaimg").value=textoencriptado;
      document.querySelector(".titulo").textContent="Su texto fue desencriptado con exito";
      document.querySelector(".sub-titulo").textContent="";
      document.querySelector(".muneco").style.display='none';
    } else {
      document.querySelector(".cajaimg").value="";
      document.querySelector(".titulo").textContent="Ningún mensaje fue encontrado";
      document.querySelector(".sub-titulo").textContent="Ingresa el texto que desees encriptar o esencriptar";
      document.querySelector(".muneco").style.display='block';
      alert("Debes ingresar un texto")
    }
}
function copiar(){
    let txtcopiado = document.querySelector(".cajaimg").value;
    navigator.clipboard.writeText(txtcopiado);
}
