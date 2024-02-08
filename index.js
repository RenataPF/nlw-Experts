const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
    pergunta: "Qual é o seletor CSS que seleciona todos os elementos?",
    respostas: [
      "*",
      "element",
      "all"
    ],
    correta: 0
  },
    {
    pergunta: "Qual propriedade CSS é usada para alterar a cor do texto?",
    respostas: [
      "background-color",
      "color",
      "font-color"
    ],
    correta: 1
  },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
    pergunta: "O que significa HTML?",
    respostas: [
      "Hypertext Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correta: 0
  },
     {
    pergunta: "Qual é a função do CSS?",
    respostas: [
      "Criar interações dinâmicas em uma página da web",
      "Estilizar a apresentação de uma página da web",
      "Manipular dados em uma página da web"
    ],
    correta: 1
  },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
     {
    pergunta: "O que significa CSS?",
    respostas: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correta: 0
  },
    {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variable myVar;",
      "myVar = variable;"
    ],
    correta: 0
  }
  ];

 
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  //Total de perguntas para depois substituir o que esta no rodapé do HTML
  const totalDePerguntas = perguntas.length // mostra o total a partir de 1
  //Substituir as corretas. A nova variável vai impactar na tag adicionada no seletor
  const mostrarTotal = document.querySelector('#acertos span')
  //ajustando a informação da variável
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))//index da pergunta
      dt.querySelector('input').value = item.respostas.indexOf(resposta) //index da resposta
      //onchange é usado ao clicar na opção, nesse caso há uma função para verificar se a resposta é a correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)//antes de validar no if, se encontrar o item será zerado
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //Após ser usada dentro da repetição, a informação de estrutura da resposta a, é excluida.
    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  