let objeto = document.querySelector(".objeto")
let sol = document.getElementsByClassName("sol")
let lua = document.getElementsByClassName("noite")
let botoes = document.querySelectorAll(".botao");
let tela= document.querySelector(".tela")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        let valor = botao.value;
        objeto.classList.remove("sol", "lua");
        if(valor==="lua"){
            objeto.classList.add("lua")
            objeto.classList.add("lua")
        }else{
            objeto.classList.add("sol")
            .classList.add("sol")
        }
    });
});