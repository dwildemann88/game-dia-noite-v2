// Variável para rastrear se o botão de ligar está ativado
let isPowerOn = false;

// Seleção dos elementos
const power = document.querySelector(".botao-ligar");
const botoes = document.querySelectorAll(".teclas .botao");
const tela = document.querySelector(".tela");
const grama = document.querySelector(".grama");
const nuvem = document.querySelector(".nuvem");
const nuvem2 = document.querySelector(".nuvem2");
const objeto = document.querySelector(".objeto");
const icones = document.querySelectorAll(".icon")
// Função para ativar/desativar os botões de ação
function toggleActionButtons(enabled) {
    botoes.forEach(botao => {
        if (enabled) {
            botao.addEventListener("click", handleBotaoClick);
            
            
        } else {
            botao.removeEventListener("click", handleBotaoClick);
            
        }
    });
    icones.forEach(icon => {
        icon.style.color = enabled ? "white" : "gray";

    });
}

// Função chamada ao clicar em um botão de ação
function handleBotaoClick(event) {
    const botao = event.currentTarget;
    const valor = botao.getAttribute("value");
    classRemove();
    
    setTimeout(removeAnimation, 1000);

    if (valor === "lua") {
        chamaNoite();
    } else if (valor === "nuvem-sol") {
        chamaDia();
        nuvem.classList.add("clima");
        nuvem2.classList.add("clima2");
    } else {
        chamaDia();
    }
    // Atualiza a classe ativa do botão
    document.querySelectorAll('.botao').forEach(button => button.classList.remove('active'));
    botao.classList.add('active');

    // Atualiza a cor dos ícones
    icones.forEach(icon => {
        // Remove a cor aqua de todos os ícones
        icon.style.color = "white";

        // Aplica a cor aqua apenas ao ícone associado ao botão ativo
        if (botao.querySelector(`.icon`) === icon) {
            icon.style.color = "aqua";
        }
    });
}

// Função para ativar/desativar o botão de ligar
function togglePower() {
    isPowerOn = !isPowerOn;
    power.classList.toggle("active-power", isPowerOn);
    power.setAttribute("value", isPowerOn ? "active-power" : "");

    // Habilita ou desabilita os botões de ação
    toggleActionButtons(isPowerOn);
}


// Função que é chamada quando a página é carregada
function onloadSun() {
    objeto.classList.add("sol", "animacao");
    tela.classList.add("dia");
    grama.style.filter = 'brightness(1.2)';
    // Inicializa os botões de ação como desativados
    toggleActionButtons(false);
}

// Função para remover as classes das animações e resetar o estado
function removeAnimation() {
    objeto.classList.remove("animacao");
    alignObject();
}

// Função para aplicar a animação de alinhamento
function alignObject() {
    objeto.classList.add("alignObject");
}

// Função para configurar o ambiente do dia
function chamaDia() {
    objeto.classList.add("sol", "animacao");
    tela.classList.add("dia");
    grama.style.filter = 'brightness(1.2)';
}

// Função para configurar o ambiente da noite
function chamaNoite() {
    objeto.classList.add("lua", "animacao");
    tela.classList.add("noite");
    grama.style.filter = 'brightness(0.7)';
}

// Função para remover todas as classes específicas de estado
function classRemove() {
    objeto.classList.remove("sol", "lua");
    tela.classList.remove("dia", "noite");
    nuvem.classList.remove("clima");
    nuvem2.classList.remove("clima2");
}

// Adiciona o evento de clique no botão de ligar
power.addEventListener("click", togglePower);
