const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha agricultura importante para a economia?",
        alt:root{
            --cor-fundo: #511b69 ;
            --cor-principal: #5b306e ;
            --cor-secundaria: #48427c; 
            --cor-destaque: #a066e2;
            --cor-texto: #f0f6f7;
          
          }
          
          body {
            background-color: var(--cor-fundo);
            color: var(--cor-texto);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          
          .caixa-principal{
            background-color: var(--cor-principal);
            width: 90%;
            max-width: 600px;
            text-align: center;
            padding: 20px;
          }
          
          h1{
            color: var(--cor-destaque);
          }
          
          button {
            background-color: var(--cor-secundaria);
            color: var(--cor-texto);
            border: none;
            border-radius: 15px;
            padding: 15px;
            transition: background-color 0.3s;
          }
          
          button:hover{
            background-color: var(--cor-destaque);
            color: var(--cor-principal);
          }ernativas: [
            {
                texto: "sim",
                afirmacao: "a agricultura é importante para a economia por ser uma dos principais formas de sustentaçãodo país com sua exportação de soja e outros plantios."
            },
            {
                texto: "não",
                afirmacao: "com a mudança climatica sendo muito forte pode acontecer de se perder todo cultivo e com isso perder os inventimentos na lavoura."
            }
        ]
    },
    {
        enunciado: "A agricultura pode prejudicar a saúde?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "realmente, pelo cultivo ter muitos agrotoxicos que podem prejudicar a saúde e meio ambiente, futuramente desencadeando mais problemas."
            },
            {
                texto: "não",
                afirmacao:  "existem muitos agricultores familiares que não utilizam dos agrotoxicos ou usam pouco dele."
            }
        ]
    },
    {
        enunciado: "A agricultura prejudica o meio ambiente?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "com o desmatamento de arvores e gástoxicos que são liberado, com o gasto de petroleo para o combustivel de maquinas e tratores."
            },
            {
                texto: "não",
                afirmacao: "mesmo com o possivel desmatamento, a agricultura cuida do solo com minerais, sais e ureia, controlando o solo acido e o deixando fertil."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Então...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();