let objeto = document.querySelector(".objeto")
let sol = document.getElementsByClassName("sol")
let lua = document.getElementsByClassName("noite")
let botoes = document.querySelectorAll(".botao");
let tela= document.querySelector(".tela")
let grama = document.querySelector(".grama")
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        let valor = botao.value;
        objeto.classList.remove("sol", "lua","animacao");
        objeto.style.
        tela.classList.remove("dia", "noite");

        if(valor==="lua"){
            objeto.classList.add("lua","animacao")
            tela.classList.add("noite")
            grama.style.filter='brightness(0.7)'
        }else{
            objeto.classList.add("sol","animacao")
            tela.classList.add("dia")
            grama.style.filter='brightness(1.2)'
        }
    });
});