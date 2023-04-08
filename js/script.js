const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let loop
/**
 * Adiciona a class jump ao mario
 * e aguarda 500ms e remove a class jump
 */
const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

/**
 * Remove a animação do cano
 * Muda o left para a posição em que o cano parou
 */
const modifyAnimationsPipe = (pipePosition) => {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;
};
/**
 * Remove a animação do Mario
 * Muda a posição do bootom para a posição em que o Mario estava na hora do impacto
 * Muda a imagem do mário
 * Muda a largura dessa nova imagem do Mario
 * Muda a marginLeft da nova imagem
 */
const modifyAnimationsMario = (marioPosition) => {
  mario.style.animation = "none";
  mario.style.bottom = `${marioPosition}px`;

  mario.src = "./images/mario-over.png";
  mario.style.width = "80px";
  mario.style.marginLeft = "50px";
};

/**
 * Faz uma verficação da posição em que o cano está
 * Faz uma verficação da altura do Mario 
 * Verifica se o Mario não está no enquanto o cano está passando por de baixo do mario
 * Caso ele não esteja ele chama duas funções e limpa o Interval
 */
const gameLoop = () => {
    console.log("passou")
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );
  if (pipePosition <= 118 && pipePosition > 0 && marioPosition < 80) {
    modifyAnimationsPipe(pipePosition );
    modifyAnimationsMario(marioPosition);
    clearInterval(loop);
  }
};
/**
 * Inicia o jogo chamando um Interval
 * E uma EventLister para ouvir se uma tecla for acionada, caso for ele chama uma função
 */
const startGame = () => {
  loop = setInterval(gameLoop, 10);
  document.addEventListener("keydown", jump);
};
startGame();
