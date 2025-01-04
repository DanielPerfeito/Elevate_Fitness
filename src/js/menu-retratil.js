export const btnAbrirMenu = document.getElementById("btn-menu-retratil-abrir");
export const btnFecharMenu = document.getElementById("btn-menu-retratil-fechar");
export const linksMenuRetratil = document.querySelectorAll(".links-menu-retratil");
export const menuRetratilMobile = document.getElementById("menu-retratil-mobile");

// Funções principais
export function abrirMenu() {
    menuRetratilMobile.style.height = "60vh";
}

export function fecharMenu() {
    menuRetratilMobile.style.height = "0px";
}