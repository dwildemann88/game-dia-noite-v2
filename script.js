let objeto = document.querySelector(".objeto")
let sol = document.getElementsByClassName("sol")
let lua = document.getElementsByClassName("noite")
let botoes = document.querySelectorAll(".botao");
let tela= document.querySelector(".tela")
let grama = document.querySelector(".grama")
let nuvem = document.querySelector(".nuvem")
let nuvem2=document.querySelector(".nuvem2")
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        let valor = botao.value;
        classRemove()
        
        setTimeout(
            removeAnimation,1000
        )
        if(valor==="lua"){
            chamaNoite()
            
        }
        else if(valor === "nuvem-sol"){
            chamaDia()
            nuvem.classList.add("clima")
            nuvem2.classList.add("clima2")
            
        }
        else{
            chamaDia()
            
        }
        
        
    });
});

document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.botao').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
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
function chamaDia(){
    objeto.classList.add("sol","animacao")
    tela.classList.add("dia")
    grama.style.filter='brightness(1.2)'
    
}
function chamaNoite(){
    objeto.classList.add("lua","animacao")
    tela.classList.add("noite")
    grama.style.filter='brightness(0.7)'
}
function classRemove(){
    objeto.classList.remove("sol", "lua");
    tela.classList.remove("dia", "noite");
    nuvem.classList.remove("clima")
    nuvem2.classList.remove("clima2")
}