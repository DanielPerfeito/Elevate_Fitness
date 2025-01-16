/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calc-imc.js":
/*!****************************!*\
  !*** ./src/js/calc-imc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnCalcular: () => (/* binding */ btnCalcular),\n/* harmony export */   btnRecalcular: () => (/* binding */ btnRecalcular),\n/* harmony export */   calcularIMC: () => (/* binding */ calcularIMC),\n/* harmony export */   calcularValorIMC: () => (/* binding */ calcularValorIMC),\n/* harmony export */   divResultado: () => (/* binding */ divResultado),\n/* harmony export */   exibirMensagemErro: () => (/* binding */ exibirMensagemErro),\n/* harmony export */   exibirResultado: () => (/* binding */ exibirResultado),\n/* harmony export */   formCalc: () => (/* binding */ formCalc),\n/* harmony export */   reiniciarFormulario: () => (/* binding */ reiniciarFormulario),\n/* harmony export */   resultadoImc: () => (/* binding */ resultadoImc),\n/* harmony export */   verificarCategoriaIMC: () => (/* binding */ verificarCategoriaIMC)\n/* harmony export */ });\nvar btnCalcular = document.getElementById(\"btn-calcular\");\nvar btnRecalcular = document.getElementById(\"btn-recalcular\");\nvar formCalc = document.getElementById(\"imc-form\");\nvar divResultado = document.getElementById(\"resultado\");\nvar resultadoImc = document.getElementById(\"resultado-imc\");\n\n// Funções principais\nfunction calcularIMC() {\n  var peso = parseFloat(document.getElementById(\"peso\").value);\n  var altura = parseFloat(document.getElementById(\"altura\").value);\n  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {\n    exibirMensagemErro(\"Por favor, insira valores válidos para peso e altura.\");\n    return;\n  }\n  var imc = calcularValorIMC(peso, altura);\n  var _verificarCategoriaIM = verificarCategoriaIMC(imc),\n    categoria = _verificarCategoriaIM.categoria,\n    descricao = _verificarCategoriaIM.descricao;\n  resultadoImc.innerText = \"Seu IMC \\xE9 \".concat(imc.toFixed(2), \", o que indica que voc\\xEA est\\xE1 na categoria \\\"\").concat(categoria, \"\\\". \").concat(descricao);\n  exibirResultado();\n}\nfunction calcularValorIMC(peso, altura) {\n  return peso / (altura * altura);\n}\nfunction verificarCategoriaIMC(imc) {\n  if (imc < 18.5) {\n    return {\n      categoria: \"Abaixo do peso\",\n      descricao: \"Risco de desnutrição, deficiências nutricionais e diminuição da imunidade.\"\n    };\n  }\n  if (imc <= 24.9) {\n    return {\n      categoria: \"Peso Normal\",\n      descricao: \"Parabéns! Você está em um peso saudável e com baixo risco de doenças relacionadas ao peso.\"\n    };\n  }\n  if (imc <= 29.9) {\n    return {\n      categoria: \"Sobrepeso\",\n      descricao: \"Risco moderado de doenças relacionadas ao excesso de peso, como hipertensão e diabetes tipo 2.\"\n    };\n  }\n  if (imc <= 34.9) {\n    return {\n      categoria: \"Obesidade Grau 1\",\n      descricao: \"Risco aumentado de problemas de saúde, incluindo doenças cardiovasculares e metabólicas.\"\n    };\n  }\n  if (imc <= 39.9) {\n    return {\n      categoria: \"Obesidade Grau 2\",\n      descricao: \"Risco alto de complicações graves de saúde, incluindo problemas respiratórios e cardíacos.\"\n    };\n  }\n  return {\n    categoria: \"Obesidade Grau 3\",\n    descricao: \"Risco muito alto de complicações graves, como doenças cardíacas, diabetes e problemas de mobilidade.\"\n  };\n}\nfunction exibirResultado() {\n  formCalc.style.display = \"none\";\n  divResultado.style.display = \"flex\";\n  divResultado.focus();\n}\nfunction exibirMensagemErro(mensagem) {\n  alert(mensagem);\n}\nfunction reiniciarFormulario() {\n  formCalc.style.display = \"block\";\n  divResultado.style.display = \"none\";\n  document.getElementById(\"peso\").value = \"\";\n  document.getElementById(\"altura\").value = \"\";\n}\n\n//# sourceURL=webpack://elevate-fitness/./src/js/calc-imc.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-retratil.js */ \"./src/js/menu-retratil.js\");\n/* harmony import */ var _calc_imc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-imc.js */ \"./src/js/calc-imc.js\");\n//Menu Retratil Mobile\n\n_menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.btnAbrirMenu.addEventListener(\"click\", _menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.abrirMenu);\n_menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.btnFecharMenu.addEventListener(\"click\", _menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.fecharMenu);\n_menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.linksMenuRetratil.forEach(function (link) {\n  link.addEventListener(\"click\", _menu_retratil_js__WEBPACK_IMPORTED_MODULE_0__.fecharMenu);\n});\n\n// Calculadora de IMC\n\n_calc_imc_js__WEBPACK_IMPORTED_MODULE_1__.btnCalcular.addEventListener(\"click\", _calc_imc_js__WEBPACK_IMPORTED_MODULE_1__.calcularIMC);\n_calc_imc_js__WEBPACK_IMPORTED_MODULE_1__.btnRecalcular.addEventListener(\"click\", _calc_imc_js__WEBPACK_IMPORTED_MODULE_1__.reiniciarFormulario);\n\n// Animação de texto digitando (Via CDN)\nnew Typewriter('#h1-2', {\n  strings: ['Eleve-se, Supere-se, Transforme-se!'],\n  autoStart: true,\n  loop: true,\n  cursor: \"\"\n});\nnew Typewriter('#h1-1', {\n  strings: ['Eleve-se,', 'Supere-se,', 'Transforme-se!'],\n  autoStart: true,\n  loop: true,\n  cursor: \"\"\n});\n\n// Animaçoes de Scrool (Via CDN)\n\nvar scroll = ScrollReveal({\n  reset: true\n});\nscroll.reveal('.para-revelar-top', {\n  duration: 2000,\n  distance: '50px',\n  origin: 'bottom'\n});\n\n//# sourceURL=webpack://elevate-fitness/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu-retratil.js":
/*!*********************************!*\
  !*** ./src/js/menu-retratil.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   abrirMenu: () => (/* binding */ abrirMenu),\n/* harmony export */   btnAbrirMenu: () => (/* binding */ btnAbrirMenu),\n/* harmony export */   btnFecharMenu: () => (/* binding */ btnFecharMenu),\n/* harmony export */   fecharMenu: () => (/* binding */ fecharMenu),\n/* harmony export */   linksMenuRetratil: () => (/* binding */ linksMenuRetratil),\n/* harmony export */   menuRetratilMobile: () => (/* binding */ menuRetratilMobile)\n/* harmony export */ });\nvar btnAbrirMenu = document.getElementById(\"btn-menu-retratil-abrir\");\nvar btnFecharMenu = document.getElementById(\"btn-menu-retratil-fechar\");\nvar linksMenuRetratil = document.querySelectorAll(\".links-menu-retratil\");\nvar menuRetratilMobile = document.getElementById(\"menu-retratil-mobile\");\n\n// Funções principais\nfunction abrirMenu() {\n  menuRetratilMobile.style.height = \"60vh\";\n}\nfunction fecharMenu() {\n  menuRetratilMobile.style.height = \"0px\";\n}\n\n//# sourceURL=webpack://elevate-fitness/./src/js/menu-retratil.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;