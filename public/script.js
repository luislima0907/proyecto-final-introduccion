// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUz2Ub8ylDCY1ljQVi5WG6sFDhqE60URk",
  authDomain: "proyecto-final-introducc-4c721.firebaseapp.com",
  projectId: "proyecto-final-introducc-4c721",
  storageBucket: "proyecto-final-introducc-4c721.appspot.com",
  messagingSenderId: "965250859508",
  appId: "1:965250859508:web:47c7031c9cb82c741579a1",
  measurementId: "G-GS4HZL0E8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

var btnEstiloUno = document.getElementById("btnEstiloUno");
var estiloUno = document.getElementById("estiloUno");
var estiloUno1 = document.getElementById("estiloUno1");
var estiloUno2 = document.getElementById("estiloUno2");
var estiloUno3 = document.getElementById("estiloUno3");
var contador = 0;

    function cambio() 

    {   if(contador==0) 
        {
            estiloUno.classList.add("parrafos");
            contador=1;
            estiloUno1.classList.add("parrafos");
            contador=1;
            estiloUno2.classList.add("parrafos");
            contador=1;
            estiloUno3.classList.add("parrafos");
            contador=1;
        }
        else {
            estiloUno.classList.remove("parrafos");
            contador=0;
            estiloUno1.classList.remove("parrafos");
            contador=0;
            estiloUno2.classList.remove("parrafos");
            contador=0;
            estiloUno3.classList.remove("parrafos");
            contador=0;}
    }
    
btnEstiloUno.addEventListener("click",cambio,true);

var btnEstiloDos = document.getElementById("btnEstiloDos");
var estiloDos = document.getElementById("estiloDos");
var estiloDos2 = document.getElementById("estiloDos2");
var estiloDos3 = document.getElementById("estiloDos3");
    contador = 0;

    function cambio2() 

    {   if(contador==0) 
        {
            estiloDos.classList.add("titulos");
            contador=1;
            estiloDos2.classList.add("titulos");
            contador=1;
            estiloDos3.classList.add("titulos");
            contador=1;
        }
        else {estiloDos.classList.remove("titulos");
            contador=0;
            estiloDos2.classList.remove("titulos");
            contador=0;
            estiloDos3.classList.remove("titulos");
            contador=0;}
}

btnEstiloDos.addEventListener("click",cambio2,true);

var btnEstiloTres = document.getElementById("btnEstiloTres");
var container = document.getElementById("container");
    contador = 0;

    function cambio3() 

    {   if(contador==0) 
        {
            container.classList.add("fondo");
            contador=1;
        }
        else {container.classList.remove("fondo");
            contador=0;}
}

btnEstiloTres.addEventListener("click",cambio3,true);