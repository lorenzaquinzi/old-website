// Pega os elementos body e a classe do hover
var elm = document.querySelector('.boreal');
var body = document.querySelector('body')

// Quando o mouse entrar ou sair, chama a função troca classe
elm.addEventListener('mouseover', trocaClasse)
elm.addEventListener('mouseout', trocaClasse)

// Troca a classe
function trocaClasse (evt) {
  evt.stopPropagation(); // <-- evita que afete outros elementos
  
  // troca a classe mesmo
  body.classList.toggle('boreal-active')
}



// Pega os elementos body e a classe do hover
var elm = document.querySelector('.topRight');
var body = document.querySelector('body')

// Quando o mouse entrar ou sair, chama a função troca classe
elm.addEventListener('mouseover', trocaClasse2)
elm.addEventListener('mouseout', trocaClasse2)

// Troca a classe
function trocaClasse2 (evt) {
  evt.stopPropagation(); // <-- evita que afete outros elementos
  
  // troca a classe mesmo
  body.classList.toggle('about-active')
}