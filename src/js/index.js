//Menu Retratil Mobile
import * as menuRetratil from './menu-retratil.js';

menuRetratil.btnAbrirMenu.addEventListener("click", menuRetratil.abrirMenu);
menuRetratil.btnFecharMenu.addEventListener("click", menuRetratil.fecharMenu);

menuRetratil.linksMenuRetratil.forEach(link => {
    link.addEventListener("click", menuRetratil.fecharMenu);
});

// Calculadora de IMC
import * as calcIMC from './calc-imc.js';

calcIMC.btnCalcular.addEventListener("click", calcIMC.calcularIMC);
calcIMC.btnRecalcular.addEventListener("click", calcIMC.reiniciarFormulario);


// Animação de texto digitando (Via CDN)
new Typewriter('#h1-2', {
    strings: ['Eleve-se, Supere-se, Transforme-se!'],
    autoStart: true,
    loop: true,
    cursor: ""
});

new Typewriter('#h1-1', {
    strings: ['Eleve-se,', 'Supere-se,', 'Transforme-se!'],
    autoStart: true,
    loop: true,
    cursor: ""
});

// Animaçoes de Scrool (Via CDN)

const scroll = ScrollReveal({ reset: true });

scroll.reveal('.para-revelar-top', {
    duration: 2000,
    distance: '50px',
    origin: 'bottom'
})