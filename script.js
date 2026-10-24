/* =======================================================
   ESCAPE / DESTAQUE DE CÓDIGO
======================================================= */
function t(texto){
  if(texto===undefined||texto===null) return '';
  return String(texto).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}

function destacarPython(codigoEscapado){
  const partes = codigoEscapado.split(/("(?:[^"]*)"|'(?:[^']*)')/g);
  const palavrasChave = /\b(import|input|int|float|str|len|range|print|if|elif|else|for|while|def|return|and|or|not|in|True|False|None)\b/g;
  return partes.map((parte,i)=>{
    if(i % 2 === 1){ return '<span class="tok-str">'+parte+'</span>'; }
    return parte.replace(palavrasChave,'<span class="tok-kw">$1</span>');
  }).join('');
}

/* =======================================================
   DADOS DOS MÓDULOS
======================================================= */
const MODULES = [
  {
    id:'intro', numero:1, titulo:'O que é um algoritmo?',
    resumo:'A ideia mais simples e mais importante de toda a programação.',
    conteudo:[
      {tipo:'texto', texto:'Antes de escrever qualquer código, existe uma ideia simples que sustenta tudo: um algoritmo é uma sequência finita de passos, bem definidos e em ordem, que resolve um problema ou realiza uma tarefa. Só isso — e você já usa algoritmos o tempo todo, sem perceber.'},
      {tipo:'texto', texto:'Pense na receita de um bolo, no tutorial de como trocar o pneu de uma bicicleta, ou até no jeito que você amarra o cadarço do tênis. Todos são algoritmos: uma lista de passos que, seguidos na ordem certa, levam a um resultado esperado.'},
      {tipo:'texto', texto:'Para ser considerado um bom algoritmo, essa sequência de passos precisa de três coisas: um início e um fim claros (ele não pode continuar para sempre), passos sem ambiguidade — qualquer pessoa que os siga deve chegar ao mesmo resultado — e uma ordem definida, já que trocar a ordem dos passos pode mudar (ou estragar) o resultado.'},
      {tipo:'dica', texto:'Repare que nada disso, até agora, envolveu um computador. Algoritmo é uma ideia — programar é o processo de traduzir essa ideia para uma linguagem que o computador entenda, como o Python, que vamos usar no resto da trilha.'}
    ],
    exercicios:[
      {id:'intro-1', tipo:'mcq', pergunta:'Qual das opções abaixo é, de fato, um algoritmo?',
       opcoes:['Eu gosto muito de macarrão.','Ferver água, adicionar sal, colocar o macarrão, esperar 10 minutos e escorrer.','Macarrão é um prato de origem italiana.','Hoje o almoço estava bom.'],
       correta:1, explicacao:'Um algoritmo precisa ser uma sequência de passos para realizar uma tarefa. As outras frases são só opiniões ou informações soltas, sem uma sequência de ações.'},
      {id:'intro-2', tipo:'mcq', pergunta:'Qual característica é importante para um bom algoritmo?',
       opcoes:['Ter passos confusos e fora de ordem','Ter início, fim e passos claros, sem ambiguidade','Ser o mais longo possível','Não precisar ser seguido em uma ordem específica'],
       correta:1, explicacao:'Um bom algoritmo tem começo e fim definidos, e cada passo é claro o suficiente para que qualquer pessoa (ou computador) chegue ao mesmo resultado seguindo-o.'}
    ]
  },
  {
    id:'fluxo', numero:2, titulo:'Pensamento computacional e fluxogramas',
    resumo:'Como quebrar um problema grande em passos pequenos — e desenhá-los.',
    conteudo:[
      {tipo:'texto', texto:'Problemas grandes assustam. A saída é quebrá-los em partes menores e mais simples de resolver — isso se chama decomposição, e é o primeiro passo do pensamento computacional: a forma como programadores organizam a cabeça antes de escrever qualquer linha de código.'},
      {tipo:'texto', texto:'Uma das ferramentas mais úteis para planejar um algoritmo antes de programar é o fluxograma: um desenho que representa cada passo com uma forma geométrica diferente. Óvalos marcam o início e o fim, retângulos marcam uma ação, losangos marcam uma decisão (uma pergunta com resposta sim ou não), e paralelogramos marcam entrada ou saída de dados.'},
      {tipo:'fluxograma'},
      {tipo:'texto', texto:'O fluxograma acima resolve um problema simples: descobrir se um número é par ou ímpar. Ele lê um número, faz uma pergunta de decisão (o resto da divisão desse número por 2 é igual a zero?) e segue por um caminho ou outro dependendo da resposta. Mais pra frente você vai ver essa mesma lógica virar poucas linhas de código Python.'}
    ],
    exercicios:[
      {id:'fluxo-1', tipo:'mcq', pergunta:'Em um fluxograma, qual símbolo é usado para representar uma decisão (uma pergunta do tipo sim ou não)?',
       opcoes:['Oval','Retângulo','Losango (diamante)','Círculo pontilhado'],
       correta:2, explicacao:'O losango é o símbolo padrão de decisão em um fluxograma — dele saem sempre dois caminhos possíveis, um para cada resposta.'},
      {id:'fluxo-2', tipo:'mcq', pergunta:'De acordo com o fluxograma do módulo, se o número lido for 7, qual vai ser o resultado?',
       opcoes:['É par','É ímpar','Erro','Nenhum dos dois'],
       correta:1, explicacao:'7 dividido por 2 tem resto 1 (não é 0), então a resposta da decisão é "não" — e o caminho leva até a caixa "É ímpar".'}
    ]
  },
  {
    id:'var', numero:3, titulo:'Variáveis e tipos de dados',
    resumo:'As caixinhas que guardam os valores que seu programa usa.',
    conteudo:[
      {tipo:'texto', texto:'Uma variável é como uma caixinha com um nome, que guarda um valor — e esse valor pode mudar ao longo do programa (por isso o nome "variável"). Em Python, criar uma variável é simples: você escreve o nome dela, um sinal de igual, e o valor.'},
      {tipo:'codigo', codigo:'idade = 15\nnome = "Ester"\naltura = 1.65\ngosta_de_matematica = True'},
      {tipo:'texto', texto:'Repare que cada variável acima guarda um tipo diferente de valor: idade é um número inteiro (int), altura é um número decimal (float), nome é um texto — chamado de string, entre aspas — e gosta_de_matematica é um booleano, que só pode valer True (verdadeiro) ou False (falso). Diferente de outras linguagens, o Python descobre o tipo sozinho: você não precisa avisar.'},
      {tipo:'dica', texto:'Nomes de variáveis em Python não podem começar com número nem ter espaços — use underline (_) no lugar do espaço, como idade_do_aluno. Maiúsculas e minúsculas fazem diferença: Nome e nome são duas variáveis diferentes.'}
    ],
    exercicios:[
      {id:'var-1', tipo:'mcq', pergunta:'Qual é o tipo de dado do valor 3.14 em Python?',
       opcoes:['Número inteiro (int)','Número decimal (float)','Texto (string)','Booleano'],
       correta:1, explicacao:'Qualquer número com casas decimais, como 3.14, é do tipo float em Python.'},
      {id:'var-2', tipo:'mcq', pergunta:'Depois desse código rodar, qual é o valor final de x?', codigo:'x = 5\nx = x + 3',
       opcoes:['5','3','8','x+3'],
       correta:2, explicacao:'Na segunda linha, o Python calcula x + 3 usando o valor atual de x (5), chegando a 8, e guarda esse novo valor em x — substituindo o 5 anterior.'}
    ]
  },
  {
    id:'io', numero:4, titulo:'Entrada e saída',
    resumo:'Como um programa conversa com quem está usando ele.',
    conteudo:[
      {tipo:'texto', texto:'Um programa raramente funciona sozinho — ele costuma receber informações de quem está usando (entrada) e devolver algum resultado (saída). Em Python, a saída mais comum é a função print(), que mostra algo na tela.'},
      {tipo:'codigo', codigo:'print("Olá, mundo!")\nnome = "Ester"\nprint("Olá,", nome)'},
      {tipo:'texto', texto:'Quando você separa os itens dentro do print() por vírgula, o Python junta tudo numa linha só, colocando um espaço entre cada parte automaticamente.'},
      {tipo:'texto', texto:'Para receber uma informação de quem está usando o programa, existe a função input(). Ela mostra uma pergunta na tela e espera a pessoa digitar uma resposta.'},
      {tipo:'codigo', codigo:'nome = input("Qual é o seu nome? ")\nprint("Que bom te conhecer,", nome)'},
      {tipo:'dica', texto:'Atenção: o input() sempre devolve o que foi digitado como texto (string) — mesmo que a pessoa digite um número! Se você precisar usar esse valor numa conta, converta com int() (número inteiro) ou float() (número decimal), assim: idade = int(input("Sua idade: ")).'}
    ],
    exercicios:[
      {id:'io-1', tipo:'mcq', pergunta:'O que essa segunda parte do código imprime na tela?', codigo:'nome = "Ester"\nprint("Olá,", nome)',
       opcoes:['Olá, Ester','Olá,Ester','Olá Ester,','Erro'],
       correta:0, explicacao:'O print() junta os dois argumentos com um espaço entre eles automaticamente, então "Olá," + espaço + "Ester" vira "Olá, Ester".'}
    ]
  },
  {
    id:'op', numero:5, titulo:'Operadores',
    resumo:'Os símbolos que fazem contas e comparações dentro do código.',
    conteudo:[
      {tipo:'texto', texto:'Operadores são os símbolos que permitem fazer cálculos e comparações dentro de um programa. Os operadores aritméticos fazem contas: + soma, - subtrai, * multiplica, / divide, ** eleva a potência. Existem dois operadores de divisão um pouco menos óbvios: // devolve só a parte inteira da divisão, e % (módulo) devolve o resto da divisão.'},
      {tipo:'codigo', codigo:'print(17 // 5)\nprint(17 % 5)\nprint(2 ** 3)', legenda:'17 // 5 vale 3 (a parte inteira de 3.4) · 17 % 5 vale 2 (o resto) · 2 ** 3 vale 8'},
      {tipo:'texto', texto:'Os operadores de comparação respondem perguntas do tipo verdadeiro ou falso: == pergunta se dois valores são iguais (repare, são dois sinais de igual — um sinal só é usado para atribuir valor a uma variável), != pergunta se são diferentes, e > < >= <= comparam qual é maior ou menor.'},
      {tipo:'texto', texto:'Já os operadores lógicos combinam mais de uma comparação: and (e) só é verdadeiro se as duas partes forem verdadeiras; or (ou) é verdadeiro se pelo menos uma parte for verdadeira; not (não) inverte o resultado.'},
      {tipo:'codigo', codigo:'idade = 15\nprint(idade >= 12 and idade <= 17)'}
    ],
    exercicios:[
      {id:'op-1', tipo:'mcq', pergunta:'Qual é o resultado de 17 // 5 em Python?',
       opcoes:['2','3','3.4','5'],
       correta:1, explicacao:'17 dividido por 5 dá 3.4 — e // fica só com a parte inteira dessa divisão, descartando as casas decimais: 3.'}
    ]
  },
  {
    id:'cond', numero:6, titulo:'Estruturas condicionais',
    resumo:'Como fazer o programa escolher um caminho diferente.',
    conteudo:[
      {tipo:'texto', texto:'Até agora, seus programas seguiam sempre o mesmo caminho, de cima para baixo. As estruturas condicionais permitem que o programa escolha um caminho diferente dependendo de uma condição — exatamente como o losango de decisão do fluxograma que você viu antes.'},
      {tipo:'codigo', codigo:'idade = 16\nif idade >= 18:\n    print("Maior de idade")\nelif idade >= 16:\n    print("Pode votar, mas não dirigir")\nelse:\n    print("Nenhum dos dois ainda")'},
      {tipo:'texto', texto:'O Python testa as condições na ordem: primeiro o if, depois cada elif, até achar uma que seja verdadeira — e executa só o bloco correspondente. Se nenhuma condição for verdadeira, ele executa o else (que é opcional). Repare em dois detalhes de sintaxe: toda linha de if, elif e else termina com dois-pontos (:), e a linha seguinte precisa estar indentada — é assim que o Python sabe o que pertence a cada bloco.'},
      {tipo:'dica', texto:'Um erro comum de iniciante é confundir = (atribuir um valor) com == (comparar dois valores). if idade = 18: dá erro — o certo é if idade == 18:.'}
    ],
    exercicios:[
      {id:'cond-1', tipo:'mcq', pergunta:'Esse código roda com idade = 16. Qual mensagem aparece na tela?', codigo:'idade = 16\nif idade >= 18:\n    print("Maior de idade")\nelif idade >= 16:\n    print("Pode votar, mas não dirigir")\nelse:\n    print("Nenhum dos dois ainda")',
       opcoes:['Maior de idade','Pode votar, mas não dirigir','Nenhum dos dois ainda','Erro de execução'],
       correta:1, explicacao:'16 >= 18 é falso, então o if não roda. O elif seguinte, 16 >= 16, é verdadeiro — então essa é a única mensagem impressa.'}
    ]
  },
  {
    id:'loop', numero:7, titulo:'Estruturas de repetição',
    resumo:'Como repetir uma tarefa sem copiar e colar a mesma linha.',
    conteudo:[
      {tipo:'texto', texto:'Repetir uma tarefa várias vezes é um dos motivos pelos quais usamos computadores. As estruturas de repetição (ou loops) executam um bloco de código repetidas vezes, sem que você precise copiar e colar a mesma linha.'},
      {tipo:'texto', texto:'O for repete um número definido de vezes, geralmente percorrendo uma sequência criada com range().'},
      {tipo:'codigo', codigo:'for i in range(1, 5):\n    print(i)', legenda:'imprime 1, 2, 3 e 4 — o número final do range nunca entra na sequência'},
      {tipo:'texto', texto:'Já o while repete enquanto uma condição continuar verdadeira — é ideal quando você não sabe, de antemão, quantas vezes vai repetir.'},
      {tipo:'codigo', codigo:'contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador = contador + 1'},
      {tipo:'dica', texto:'Cuidado: se a condição do while nunca deixar de ser verdadeira, o programa entra num loop infinito e trava. É por isso que, dentro do while acima, a linha contador = contador + 1 é essencial — sem ela, contador nunca mudaria.'}
    ],
    exercicios:[
      {id:'loop-1', tipo:'mcq', pergunta:'Quantos números esse código imprime?', codigo:'for i in range(1, 5):\n    print(i)',
       opcoes:['3','4','5','1'],
       correta:1, explicacao:'range(1, 5) gera 1, 2, 3 e 4 — quatro números no total. O 5 nunca é incluído, porque o número final do range() é sempre excluído.'}
    ]
  },
  {
    id:'lista', numero:8, titulo:'Listas',
    resumo:'Como guardar vários valores organizados numa única variável.',
    conteudo:[
      {tipo:'texto', texto:'Até agora, cada variável guardava um único valor. Uma lista guarda vários valores organizados numa única variável, na ordem em que você quiser.'},
      {tipo:'codigo', codigo:'frutas = ["maçã", "banana", "uva", "manga"]\nprint(frutas[0])\nprint(frutas[2])'},
      {tipo:'texto', texto:'Cada posição da lista tem um índice — e em Python, como na maioria das linguagens, a contagem começa em 0. Então frutas[0] é "maçã", o primeiro item, e frutas[2] é "uva", o terceiro.'},
      {tipo:'texto', texto:'Duas ferramentas úteis: len(lista) devolve quantos itens a lista tem, e lista.append(valor) adiciona um item novo no final. Para fazer algo com cada item da lista, um for resolve:'},
      {tipo:'codigo', codigo:'for fruta in frutas:\n    print("Eu gosto de", fruta)'}
    ],
    exercicios:[
      {id:'lista-1', tipo:'mcq', pergunta:'O que essa segunda linha imprime?', codigo:'frutas = ["maçã", "banana", "uva", "manga"]\nprint(frutas[2])',
       opcoes:['maçã','banana','uva','manga'],
       correta:2, explicacao:'A contagem começa em 0: frutas[0] é "maçã", frutas[1] é "banana", frutas[2] é "uva" — o terceiro item da lista.'}
    ]
  },
  {
    id:'func', numero:9, titulo:'Funções',
    resumo:'Como encapsular blocos de código para reutilizar quando quiser.',
    conteudo:[
      {tipo:'texto', texto:'Uma função é um bloco de código reutilizável que realiza uma tarefa específica. Em vez de repetir o mesmo código várias vezes, você o define uma vez dentro de uma função e o chama sempre que precisar.'},
      {tipo:'codigo', codigo:'def saudar(nome):\n    print("Olá,", nome)\n\nsaudar("Ester")'},
      {tipo:'dica', texto:'Funções podem receber dados chamados parâmetros (como nome no exemplo acima) e devolver resultados usando return.'}
    ],
    exercicios:[
      {id:'func-1', tipo:'mcq', pergunta:'Qual palavra-chave é usada para definir uma função em Python?',
       opcoes:['function','def','func','define'],
       correta:1, explicacao:'Em Python, funções são criadas usando a palavra-chave def.'}
    ]
  }
];

/* =======================================================
   ESTADO E RENDERIZAÇÃO DA APLICAÇÃO
======================================================= */
let estadoApp = {
  moduloAtualId: null,
  progresso: JSON.parse(localStorage.getItem('trilha_progresso') || '{}')
};

function salvarProgresso(){
  localStorage.setItem('trilha_progresso', JSON.stringify(estadoApp.progresso));
}

function calcularProgressoTotal(){
  let concluidos = 0;
  MODULES.forEach(mod => {
    if (estadoApp.progresso[mod.id] && estadoApp.progresso[mod.id].concluido) {
      concluidos++;
    }
  });
  return Math.round((concluidos / MODULES.length) * 100);
}

function renderizarTrilhaLateral(){
  const lateral = document.getElementById('trilha-lateral');
  const progressoTotal = calcularProgressoTotal();

  let html = `
    <button class="trilha-titulo" onclick="irParaInicio()">Trilha de Algoritmos</button>
    <p class="trilha-subtitulo">Fundamentos de programação</p>
    <ul class="trilha-lista">
  `;

  MODULES.forEach((mod, index) => {
    const isConcluido = estadoApp.progresso[mod.id]?.concluido;
    const isAtual = estadoApp.moduloAtualId === mod.id;
    let classeItem = '';
    if (isConcluido) classeItem = 'concluido';
    if (isAtual) classeItem += ' atual';

    html += `
      <li class="trilha-item ${classeItem}">
        <span class="trilha-estacao">${isConcluido ? '✓' : mod.numero}</span>
        <button class="trilha-link" onclick="selecionarModulo('${mod.id}')">${t(mod.titulo)}</button>
      </li>
    `;
  });

  html += `
    </ul>
    <div class="progresso-caixa">
      <div class="progresso-texto">Progresso geral: ${progressoTotal}%</div>
      <div class="progresso-barra-fundo">
        <div class="progresso-barra-preenchimento" style="width: ${progressoTotal}%"></div>
      </div>
      <div class="rodape-lateral">
        <button class="botao-reiniciar" onclick="toggleConfirmarReset()">Reiniciar progresso</button>
        <div id="painel-reset" class="confirmar-reset" style="display:none;">
          <p>Deseja apagar todo o progresso?</p>
          <div class="linha-botoes">
            <button class="sim" onclick="resetarProgresso()">Sim, zerar</button>
            <button onclick="toggleConfirmarReset()">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  lateral.innerHTML = html;
  
  const progressoMobile = document.getElementById('topo-mobile-progresso');
  if(progressoMobile) progressoMobile.textContent = `${progressoTotal}%`;
}

function renderizarConteudoPrincipal(){
  const principal = document.getElementById('conteudo-principal');

  if (!estadoApp.moduloAtualId) {
    const progressoTotal = calcularProgressoTotal();
    principal.innerHTML = `
      <div class="tela-boas-vindas">
        <span class="rotulo-modulo">BEM-VINDA À TRILHA</span>
        <h1 style="font-size:2.2rem; margin-bottom:14px;">Olá, Ester! Pronto para dominar algoritmos?</h1>
        <p class="resumo-licao">Esta trilha foi desenhada para ensinar os conceitos fundamentais de programação e lógica de forma visual, interativa e prática.</p>
        ${progressoTotal > 10 ? `<div class="selo-completo"><p class="feedback-titulo">Progresso em andamento</p><p>Você já concluiu ${progressoTotal}% da trilha. Continue de onde parou!</p></div>` : ''}
        <button class="botao principal" style="margin-top:20px;" onclick="selecionarModulo('${MODULES[0].id}')">Começar trilha ➔</button>
      </div>
    `;
    return;
  }

  const mod = MODULES.find(m => m.id === estadoApp.moduloAtualId);
  if (!mod) return;

  let html = `
    <span class="rotulo-modulo">MÓDULO ${mod.numero} DE ${MODULES.length}</span>
    <div class="cabecalho-licao">
      <h1>${t(mod.titulo)}</h1>
      <p class="resumo-licao">${t(mod.resumo)}</p>
    </div>
    <hr style="border:0; border-top:1px solid var(--line); margin:28px 0;">
    <div class="texto-licao">
  `;

  mod.conteudo.forEach(bloco => {
    if (bloco.tipo === 'texto') {
      html += `<p>${t(bloco.texto)}</p>`;
    } else if (bloco.tipo === 'dica') {
      html += `
        <div class="dica">
          <p class="dica-rotulo">💡 Dica importante</p>
          <p>${t(bloco.texto)}</p>
        </div>
      `;
    } else if (bloco.tipo === 'codigo') {
      const codigoDestacado = destacarPython(t(bloco.codigo));
      html += `
        <div class="painel-codigo">
          ${bloco.legenda ? `<div class="legenda">${t(bloco.legenda)}</div>` : ''}
          <pre><code>${codigoDestacado}</code></pre>
        </div>
      `;
    } else if (bloco.tipo === 'fluxograma') {
      html += `
        <div class="fluxograma">
          <div class="fc-caixa fc-oval">Início</div>
          <div class="fc-seta"></div>
          <div class="fc-caixa fc-entrada">Ler número</div>
          <div class="fc-seta"></div>
          <div class="fc-losango"><span>número % 2 == 0 ?</span></div>
          <div class="fc-ramos">
            <div class="fc-ramo">
              <span class="fc-rotulo-ramo">Sim</span>
              <div class="fc-seta"></div>
              <div class="fc-caixa fc-processo">É par</div>
            </div>
            <div class="fc-ramo">
              <span class="fc-rotulo-ramo">Não</span>
              <div class="fc-seta"></div>
              <div class="fc-caixa fc-processo">É ímpar</div>
            </div>
          </div>
        </div>
      `;
    }
  });

  html += `</div>`;

  if (mod.exercicios && mod.exercicios.length > 0) {
    html += `
      <h2 class="titulo-secao-exercicios">Exercícios práticos</h2>
      <p class="subtitulo-secao-exercicios">Teste seus conhecimentos sobre o módulo.</p>
    `;

    mod.exercicios.forEach((ex, exIndex) => {
      const respSalva = estadoApp.progresso[mod.id]?.respostas?.[ex.id];
      const isRespondido = respSalva !== undefined;
      const acertou = respSalva === ex.correta;

      html += `
        <div class="exercicio ${acertou ? 'resolvido' : ''}" id="ex-${ex.id}">
          <p class="exercicio-rotulo">EXERCÍCIO ${exIndex + 1}</p>
          <p class="exercicio-pergunta">${t(ex.pergunta)}</p>
          ${ex.codigo ? `<div class="painel-codigo"><pre><code>${destacarPython(t(ex.codigo))}</code></pre></div>` : ''}
          <div class="exercicio-opcoes">
      `;

      ex.opcoes.forEach((opcao, opIndex) => {
        let classeOpcao = 'opcao';
        if (isRespondido) {
          if (opIndex === ex.correta) classeOpcao += ' correta-marcada';
          else if (opIndex === respSalva) classeOpcao += ' incorreta-marcada';
        }
        html += `<button class="${classeOpcao}" ${isRespondido ? 'disabled' : ''} onclick="responderExercicio('${mod.id}', '${ex.id}', ${opIndex})">${t(opcao)}</button>`;
      });

      html += `</div>`;

      if (isRespondido) {
        html += `
          <div class="feedback ${acertou ? 'ok' : 'nao'}">
            <p class="feedback-titulo">${acertou ? 'Correto! 🎉' : 'Incorreto.'}</p>
            <p>${t(ex.explicacao)}</p>
          </div>
        `;
      }

      html += `</div>`;
    });
  }

  const indexAtual = MODULES.findIndex(m => m.id === mod.id);
  const modAnterior = indexAtual > 0 ? MODULES[indexAtual - 1] : null;
  const modProximo = indexAtual < MODULES.length - 1 ? MODULES[indexAtual + 1] : null;

  html += `
    <div class="navegacao-licao">
      ${modAnterior ? `<button class="botao" onclick="selecionarModulo('${modAnterior.id}')">← ${t(modAnterior.titulo)}</button>` : '<div></div>'}
      ${modProximo ? `<button class="botao principal" onclick="selecionarModulo('${modProximo.id}')">Próximo módulo →</button>` : `<button class="botao principal" onclick="irParaInicio()">Concluir trilha 🏆</button>`}
    </div>
  `;

  principal.innerHTML = html;
}

function selecionarModulo(id){
  estadoApp.moduloAtualId = id;
  window.scrollTo({top: 0, behavior: 'smooth'});
  renderizarTrilhaLateral();
  renderizarConteudoPrincipal();
  fecharMenuMobile();
}

function irParaInicio(){
  estadoApp.moduloAtualId = null;
  window.scrollTo({top: 0, behavior: 'smooth'});
  renderizarTrilhaLateral();
  renderizarConteudoPrincipal();
  fecharMenuMobile();
}

function responderExercicio(modId, exId, opIndex){
  if (!estadoApp.progresso[modId]) {
    estadoApp.progresso[modId] = { respostas: {}, concluido: false };
  }
  if (!estadoApp.progresso[modId].respostas) {
    estadoApp.progresso[modId].respostas = {};
  }

  estadoApp.progresso[modId].respostas[exId] = opIndex;

  const mod = MODULES.find(m => m.id === modId);
  if (mod && mod.exercicios) {
    const todosRespondidos = mod.exercicios.every(ex => {
      const resp = estadoApp.progresso[modId].respostas[ex.id];
      return resp !== undefined && resp === ex.correta;
    });
    if (todosRespondidos) {
      estadoApp.progresso[modId].concluido = true;
    }
  }

  salvarProgresso();
  renderizarTrilhaLateral();
  renderizarConteudoPrincipal();
}

function toggleConfirmarReset(){
  const painel = document.getElementById('painel-reset');
  if(painel) painel.style.display = painel.style.display === 'none' ? 'block' : 'none';
}

function resetarProgresso(){
  estadoApp.progresso = {};
  localStorage.removeItem('trilha_progresso');
  irParaInicio();
}

function abrirMenuMobile(){
  document.getElementById('trilha-lateral').classList.add('aberta');
  document.getElementById('sobreposicao').classList.add('ativa');
}

function fecharMenuMobile(){
  document.getElementById('trilha-lateral').classList.remove('aberta');
  document.getElementById('sobreposicao').classList.remove('ativa');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao-menu').addEventListener('click', abrirMenuMobile);
  document.getElementById('sobreposicao').addEventListener('click', fecharMenuMobile);
  renderizarTrilhaLateral();
  renderizarConteudoPrincipal();
});