var entrada, saida

const countElement = document.querySelector('.count');

function animateCount() {
    let count = 0;
    const interval = setInterval(() => {
        if (count > 100) {
            clearInterval(interval);
            animateCount(); // Reinicia a animação
        } else {
            countElement.textContent = count;
            count++;
        }
    }, 30);
}

animateCount();

entrada = document.querySelector("form")
saida = document.querySelector("h3 span")

entrada.addEventListener("click",  (e) => {
    if (e.target.tagName === "BUTTON") {

    let num1, num2, operacao, resultado

    num1 = parseFloat(entrada.num1.value)
    num2 = parseFloat(entrada.num2.value)
    operacao = e.target.name
    

    switch (operacao) {
        case "ad":
            resultado = num1 + num2;
            break;
        case "sub":
            resultado = num1 - num2;
            break;
        case "mult":
            resultado = num1 * num2;
            break;
        case "dv":
            resultado = num1 / num2;
            break;
    }

    saida.textContent = resultado

    }

})