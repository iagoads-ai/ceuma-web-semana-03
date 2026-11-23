// Semana 03 — Introdução ao JavaScript (CEUMA · Desenvolvimento para Web)
// Executar: node web-semana-03/app.js

// =====================================================================
console.log("========== BLOCO 1 — FUNDAMENTOS E VARIÁVEIS ==========");
// =====================================================================

// let permite reatribuição
let pontos = 50;
pontos = pontos + 10;
console.log("Pontos após somar 10:", pontos);

// const não permite reatribuição
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // tentativa real de reatribuição
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} — ${erro.message}`);
  console.log("Causa: MAX_PONTOS foi declarada com const, então o identificador não pode receber outro valor.");
}
console.log("MAX_PONTOS continua valendo:", MAX_PONTOS);

// Tipos primitivos e typeof
const texto = "JavaScript";
const numero = 42;
const verdadeiro = true;
let semValor; // undefined
const nulo = null;

console.log("typeof texto      →", typeof texto);
console.log("typeof numero     →", typeof numero);
console.log("typeof verdadeiro →", typeof verdadeiro);
console.log("typeof semValor   →", typeof semValor);
console.log("typeof nulo       →", typeof nulo);
console.log(
  'Por que typeof null é "object"? É um erro histórico da primeira versão do JavaScript: ' +
  "null era representado internamente com a mesma marca de tipo dos objetos. " +
  "O comportamento foi mantido para não quebrar sites existentes."
);

// Template literal x concatenação
const aluno = "Iago";
const disciplina = "Desenvolvimento para Web";
const fraseTemplate = `${aluno} está estudando ${disciplina} e tem ${pontos} pontos.`;
const fraseConcatenada = aluno + " está estudando " + disciplina + " e tem " + pontos + " pontos.";
console.log("Template literal:", fraseTemplate);
console.log("Concatenação +  :", fraseConcatenada);
console.log("As duas frases são iguais?", fraseTemplate === fraseConcatenada);

// =====================================================================
console.log("\n========== BLOCO 2 — FUNÇÕES ==========");
// =====================================================================

// Hoisting: a função declarada pode ser chamada antes da declaração
console.log("ehMaiorDeIdade(20) chamada antes da declaração (hoisting):", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log("ehMaiorDeIdade(17):", ehMaiorDeIdade(17));
console.log("ehMaiorDeIdade(18):", ehMaiorDeIdade(18));

// Expressão de função com const: zona temporal morta (TDZ)
try {
  ehMaiorDeIdadeExpressao(20); // chamada antes da inicialização
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} — ${erro.message}`);
  console.log(
    "Explicação: const é içada, mas fica na zona temporal morta até a linha da inicialização. " +
    "Acessá-la antes disso gera ReferenceError."
  );
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log("ehMaiorDeIdadeExpressao(17) depois da inicialização:", ehMaiorDeIdadeExpressao(17));
console.log("ehMaiorDeIdadeExpressao(18) depois da inicialização:", ehMaiorDeIdadeExpressao(18));

// dobro em três formas
function dobroDeclarada(n) {
  return n * 2;
}
const dobroExpressao = function (n) {
  return n * 2;
};
const dobroArrow = (n) => n * 2;
const dobroPadrao = (n = 1) => n * 2;

console.log("dobroDeclarada(5):", dobroDeclarada(5));
console.log("dobroExpressao(5):", dobroExpressao(5));
console.log("dobroArrow(5):", dobroArrow(5));
console.log("dobroPadrao(7):", dobroPadrao(7));
console.log("dobroPadrao() sem argumento usa n = 1:", dobroPadrao());

// =====================================================================
console.log("\n========== BLOCO 3 — CONTROLE DE FLUXO ==========");
// =====================================================================

// if/else (baseado em index.js da aula)
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("classificarNota(5.9):", classificarNota(5.9));
console.log("classificarNota(6):", classificarNota(6));
console.log("classificarNota(10):", classificarNota(10));

// switch do semáforo (baseado em index1.js da aula; os cases usam minúsculas
// para combinar com toLowerCase())
function mostrarSemaforo(corSemaforo) {
  switch (corSemaforo.toLowerCase()) {
    case "vermelho":
      console.log(`${corSemaforo}: Pare`);
      break;
    case "amarelo":
      console.log(`${corSemaforo}: Atenção`);
      break;
    case "verde":
      console.log(`${corSemaforo}: Siga`);
      break;
    default:
      console.log(`${corSemaforo}: Cor inválida`);
  }
}
const corSemaforo = "Verde";
mostrarSemaforo(corSemaforo);
mostrarSemaforo("Amarelo");
mostrarSemaforo("vermelho");
mostrarSemaforo("Azul");

// Tabuada do 5 com for
console.log("Tabuada do 5 (for):");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Contagem regressiva com while
console.log("Contagem regressiva (while):");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// Par ou ímpar com for
console.log("Par ou ímpar de 1 a 20 (for):");
for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? "par" : "ímpar"}`);
}

// Par ou ímpar com while
console.log("Par ou ímpar de 1 a 20 (while):");
let m = 1;
while (m <= 20) {
  if (m % 2 === 0) {
    console.log(`${m} é par`);
  } else {
    console.log(`${m} é ímpar`);
  }
  m++;
}

// Dia da semana: domingo (1) a sábado (7)
function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Dia inválido";
  }
}
for (let d = 1; d <= 7; d++) {
  console.log(`diaDaSemana(${d}): ${diaDaSemana(d)}`);
}
console.log("diaDaSemana(8):", diaDaSemana(8));
console.log("diaDaSemana(0):", diaDaSemana(0));

console.log("\n========== FIM — os três blocos foram executados ==========");
