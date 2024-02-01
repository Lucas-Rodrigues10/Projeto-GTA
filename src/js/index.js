// Passo 1 - Pegar o botão de seleção de plataformas no JS para verificar quando o usuário clicar em cima dele 
const botao = document.querySelector('.btn-plataforma');

//Passo 2 - Pegar o elemento do conteudo que precisa ser mostrado 
const elementoPlatafomas = document.querySelector('.btn-plataforma .plataformas');

//Passo 3 - Pegar o clique do usuário no JS
botao.addEventListener("click", () => {
    const botaoEstaAberto = (elementoPlatafomas.classList.contains("ativo"))
    //Passo 4 - Verificar se o conetudo do botão já esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúddo novamente
    if(botaoEstaAberto){
        elementoPlatafomas.classList.remove("ativo");
    }
     //Passo 5 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça
    else{
        elementoPlatafomas.classList.add("ativo")
    }
})