export function menuHamburguer() {
  const btn = document.querySelector(".btn-hamburguer");
  btn.addEventListener("click", ativarMenuHamburguer);
  
  function ativarMenuHamburguer() {
    const menuHamburguer = document.querySelector(".menu-nav");
    const fundoPreto = document.querySelector(".fundo-preto");
    
    menuHamburguer.classList.toggle("ativo");
    fundoPreto.classList.toggle("ativo");
  }
}
