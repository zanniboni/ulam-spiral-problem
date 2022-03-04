/* 
  ---- Descrição das variáveis ----
  x,y  = Posição no canvas
  step = Contador de passos percorridos
  stepSize = Tamanho percorrido no canvas
  numSteps = Contador de steps percorridas
  state = Indica a movimentação do canvas (cima,baixo,esquerda, direita)
  turnCounter = Indica se o espiral mudou de posição  
*/
let x, y;
let step = 1;
let stepSize = 50;
let numSteps = 1;
let state = 0;
let turnCounter = 0;

function setup() {
  createCanvas(1000, 1000);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  /* Desenho de quadrado */
  fill(255, 204, 0);
  stroke(50);
  rectMode(CENTER);
  rect(x, y, stepSize);

  /* Texto contendo as steps */
  textSize(stepSize / 2, stepSize / 2);
  textAlign(CENTER, CENTER);
  fill(255);
  text(step, x, y);

  /* Altera a direção do desenho do spiral */
  switch (state) {
    /* Movimento para a esquerda */
    case 0:
      x -= stepSize;
      break;
    /* Movimento para baixo */
    case 1:
      y += stepSize;
      break;
    /* Movimento para a direita */
    case 2:
      x += stepSize;
      break;
    /* Movimento para cima */
    case 3:
      y -= stepSize;
      break;
  }

  /* 
    Caso o módulo de steps seja 0 em relação ao numSteps
    então significa que é nescessário mudar a direção do state
  */
  if (step % numSteps == 0) {
    /* 
    Como só temos 4 states (cima,baixo,esquerda,direita),
    podemos resetar o contador toda vez que o state chegar o 4 com o módulo
    Exemplo:
      1 % 4 = 1 -> Inicio
      2 % 4 = 2
      3 % 4 = 3
      4 % 4 = 0 -> Reset
     */
    state = (state + 1) % 4;

    /* A turnCounter indicará se houve mudança de direção */
    turnCounter++;

    /* 
    Identifica se a mudança de canto foi efetuada, verificando
    se o turnCounter é um número par, caso seja, é necessário
    somar ao numSteps. 
    - numSteps: Quantidade de quadrados a serem desenhados na execução 
    de uma step */
    if (turnCounter % 2 == 0) {
      numSteps++;
      console.log("numSteps -> " + numSteps);
    }
  }

  /* Soma a step */
  step++;
  frameRate(2);
}
