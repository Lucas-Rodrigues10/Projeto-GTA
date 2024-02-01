const botao = document.querySelector('.btn-plataforma');

const elementoPlatafomas = document.querySelector('.btn-plataforma .plataformas');

botao.addEventListener("click", () => {
        elementoPlatafomas.classList.toggle("ativo");
})