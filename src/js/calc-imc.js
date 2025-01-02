export const btnCalcular = document.getElementById("btn-calcular");
export const btnRecalcular = document.getElementById("btn-recalcular");
export const formCalc = document.getElementById("imc-form");
export const divResultado = document.getElementById("resultado");
export const resultadoImc = document.getElementById("resultado-imc");

// Funções principais
export function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        exibirMensagemErro("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularValorIMC(peso, altura);
    const { categoria, descricao } = verificarCategoriaIMC(imc);

    resultadoImc.innerText = `Seu IMC é ${imc.toFixed(2)}, o que indica que você está na categoria "${categoria}". ${descricao}`;
    exibirResultado();
}

export function calcularValorIMC(peso, altura) {
    return peso / (altura * altura);
}

export function verificarCategoriaIMC(imc) {
    if (imc < 18.5) {
        return {
            categoria: "Abaixo do peso",
            descricao: "Risco de desnutrição, deficiências nutricionais e diminuição da imunidade."
        };
    }
    if (imc <= 24.9) {
        return {
            categoria: "Peso Normal",
            descricao: "Parabéns! Você está em um peso saudável e com baixo risco de doenças relacionadas ao peso."
        };
    }
    if (imc <= 29.9) {
        return {
            categoria: "Sobrepeso",
            descricao: "Risco moderado de doenças relacionadas ao excesso de peso, como hipertensão e diabetes tipo 2."
        };
    }
    if (imc <= 34.9) {
        return {
            categoria: "Obesidade Grau 1",
            descricao: "Risco aumentado de problemas de saúde, incluindo doenças cardiovasculares e metabólicas."
        };
    }
    if (imc <= 39.9) {
        return {
            categoria: "Obesidade Grau 2",
            descricao: "Risco alto de complicações graves de saúde, incluindo problemas respiratórios e cardíacos."
        };
    }
    return {
        categoria: "Obesidade Grau 3",
        descricao: "Risco muito alto de complicações graves, como doenças cardíacas, diabetes e problemas de mobilidade."
    };
}

export function exibirResultado() {
    formCalc.style.display = "none";
    divResultado.style.display = "flex";
    divResultado.focus();
}

export function exibirMensagemErro(mensagem) {
    alert(mensagem);
}

export function reiniciarFormulario() {
    formCalc.style.display = "block";
    divResultado.style.display = "none";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}