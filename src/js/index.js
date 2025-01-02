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