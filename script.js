let objeto = document.querySelector(".objeto")
let sol = document.getElementsByClassName("sol")
let lua = document.getElementsByClassName("noite")
let botoes = document.querySelectorAll(".botao");
let tela= document.querySelector(".tela")
let grama = document.querySelector(".grama")
function onloadSun (){
    objeto.classList.add("sol","animacao")
    tela.classList.add("dia")
    grama.style.filter='brightness(1.2)'
}
function alignObject(){
    objeto.classList.add("alignObject")
}
function removeAnimation (){
    objeto.classList.remove("animacao")
    alignObject()
    
}
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        let valor = botao.value;
        objeto.classList.remove("sol", "lua");
        tela.classList.remove("dia", "noite");
        setTimeout(
            removeAnimation,1000
        )
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

document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.botao').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

