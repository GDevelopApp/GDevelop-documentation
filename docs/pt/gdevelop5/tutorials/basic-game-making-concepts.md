---
title: Conceitos básicos de criação de jogos - O que você precisa saber para começar com o GDevelop
---
# Conceitos básicos de criação de jogos: O que você precisa saber para começar com o GDevelop

Os conceitos básicos do GDevelop são simples. Leia as seguintes informações para começar a usar o software. Se você não possui o GDevelop, [baixe a última versão aqui](https://gdevelop-app.com/download)!

## Mostrando coisas na tela: os objetos

Tudo o que é *exibido na tela* é chamado de **"Objeto"**. Diferentes tipos de objetos podem ser usados para exibir diferentes elementos do jogo na tela. Por exemplo, a maioria dos gráficos do jogo são objetos "Sprite", os textos podem ser exibidos com objetos "Texto" e efeitos especiais, como fogo ou faíscas, podem ser criados com "Particle Emitters" (_Emissores de Partículas_).

## Posicionando objetos no mundo: coordenadas

Objetos na tela/cena do GDevelop têm coordenadas X e Y. Essas coordenadas correspondem à posição horizontal (eixo X) e à posição vertical (eixo Y) no _plano cartesiano_.

A coordenada X _diminui_ à medida que você vai para a esquerda e _aumenta_ à medida que você vai para a direita. A coordenada Y _aumenta_ à medida que você desce e _diminui_ à medida que você sobe.

![](/wiki/pres_coord1.png)

Para mover ou girar objetos, você precisará especificar o ângulo desejado em graus. A ilustração abaixo demonstra como o GDevelop entende o ângulo de rotação:

![](/wiki/pres_coord2.png)

Se você usar funções trigonométricas como **seno** ou **cosseno**, precisará expressar os ângulos em **radianos**. (1 radiano = 180/PI graus e 1 grau = PI/180 radianos. PI é o número aproximadamente igual a 3,14159).

## Eventos e como os objetos são selecionados para estes Eventos

Os eventos que você usa para criar as regras do seu jogo são compostos de condições e ações. A maioria das condições e ações se refere a objetos:

* As condições executam um **teste** nos objetos.
* Ações **manipulam** o objeto. Eles podem mudar a posição do objeto, aparência, etc ...

Uma ação, sem uma condição, refere-se a todos os objetos. Se você usar um objeto pela primeira vez em um evento, o GDevelop testará ou modificará **todos os objetos** com esse nome na cena.

Se você usar o objeto no mesmo evento novamente, o GDevelop testará ou modificará apenas os objetos que foram escolhidos pelas condições anteriores.

Por exemplo, este evento não tem condição. Ele excluirá todos os objetos chamados "Square":

![](/gdevelop5/tutorials/delete-square.png)

O evento abaixo tem uma condição. Ele excluirá apenas os objetos "Square" com uma posição X menor que 100 pixels:

![](/gdevelop5/tutorials/delete-square-condition.png)

!!! tip

    **Veja em ação!** 🎮 Abra este exemplo online: https://editor.gdevelop-app.com/?project=example://object-selection

[![](/gdevelop5/tutorials/objectselection-pickobject.png)](https://editor.gdevelop-app.com/?project=example://object-selection)

## Eventos: a ordem é importante

A ordem dos eventos **importa**!

Eventos no topo são executados primeiro. Os eventos são executados toda vez que seu jogo é exibido. Essa tela é chamada de quadro. Ele executa cerca de 60 vezes por segundo. Os exemplos a seguir **não** são equivalentes:

![](/gdevelop5/tutorials/create-then-delete-square.png)

![](/gdevelop5/tutorials/delete-then-create-square.png)

* As ações do primeiro par de eventos criam um objeto "Square" nas coordenadas X: 100. Y: 200 (100; 200). Em seguida, o evento exclui o square criado imediatamente. "**No** Square" é exibido na tela. É excluído logo após ser criado.
* O segundo par de ações de eventos exclui todos os objetos "Square" da cena/tela. Em seguida, cria um "Square" nas coordenadas da cena / tela X: 100, Y: 200 (100; 200). Este evento mostra que um quadrado é **visível** na cena (antes de ser excluído no próximo quadro. Ele será recriado imediatamente).

##Comportamentos: regras predefinidas e lógica para objetos

**Comportamentos** permitem aprimorar um objeto com alguma *lógica predefinida*. Os comportamentos podem ser bastante simples, automatizando tarefas simples ou muito mais avançadas. Por exemplo:

* Um comportamento pode ser usado para remover automaticamente um objeto do jogo quando ele sai da tela (limitando o uso de memória do jogo).

* O comportamento da física é um exemplo de comportamento avançado que faz com que seus objetos se movam de maneira realista, seguindo as leis da física.

Objetos e comportamentos podem ser manipulados usando eventos. Você pode ler as páginas sobre [Objetos](/pt/gdevelop5/objects) e [Comportamentos](/pt/gdevelop5/behaviors) para saber mais sobre eles.

## Movendo objetos: usando as forças internas

Objetos em movimento podem ser alcançados com ** forças**. Forças são usadas para "empurrar" objetos.

Você pode especificar:

  * as coordenadas de uma força no eixo X e Y, em pixels,
  * ou suas coordenadas polares (o ângulo da força, em graus e comprimento, em pixels),
  * se a força for instantânea (apenas empurrará "um pouco" o objeto) ou contínua (continuará empurrando o objeto até que seja removido).

### Exemplo

Digamos que você queira mover um objeto para baixo:

![](/wiki/pres_vector.png)

Você pode adicionar uma força usando as coordenadas X / Y especificando 0 para a coordenada X e, digamos, 150 pixels para a coordenada Y. Você também pode usar coordenadas polares e adicionar uma força com um ângulo de 90° e um comprimento de 150 pixels.

### Outras maneiras de mover objetos

Alguns "comportamentos", como o mecanismo de física ou o _Pathfinding_ (Pesquisa de rota), podem mover os objetos sozinhos. Nesse caso, é melhor não usar o sistema de forças internas e, em vez disso, confiar apenas nas ações fornecidas por esses comportamentos.

!!! tip

    **Veja em ação!** 🎮Abra o exemplo online: https://editor.gdevelop-app.com/?project=example://move-object-with-physics

[![](/gdevelop5/tutorials/moveobjectwithphysics.png)](https://editor.gdevelop-app.com/?project=example://move-object-with-physics)

## Armazenando qualquer informação na memória: Variáveis

Uma variável permite armazenar **dados**. Por exemplo, uma variável pode armazenar um número ou um texto. Podemos compará-los com gavetas ou caixas onde podemos registrar notas. Qualquer dado pode ser armazenado em uma variável, desde que esteja no formato _text_ ou _number_. Coisas como o número de vidas restantes de um jogador, a pontuação mais alta de um jogador, o número de balas restantes e/ou o número de inimigos mortos são exemplos do que pode ser armazenado em uma variável. Você provavelmente irá armazenar números em variáveis como uma prática comum.

![](/wiki/pres_variable.png)

Ações e condições testam ou alteram uma variável de _valor_.

### Onde as variáveis são armazenadas? (variável "escopo")

O _escopo_ de uma variável determina o local em que uma variável pode ser acessada. No GDevelop, existem três variáveis escopos disponíveis:

* As variáveis **Globais** são acessíveis em todas as cenas do jogo. Por exemplo, eles podem ser usados para armazenar a pontuação do jogador em diferentes níveis / cenas.
* As variáveis de **Cena** são acessíveis apenas a partir da cena em que foram criadas. Elas podem ser usadas para dados que dizem respeito apenas a uma cena. Uma variável de cena poderia acessar o tempo restante para concluir o nível / cena.   
* As variáveis **Objeto** dizem respeito apenas a um objeto. Por exemplo, um herói pode ter uma variável "Saúde" ou "Munição".

!!! note

    Leia mais sobre variáveis na página [Variáveis](/pt/gdevelop5/all-features/variables) . As variáveis são muito usadas em jogos: a maioria dos exemplos as utiliza e os tutoriais também as utilizam.

!!! tip

    Deseja ver como as variáveis são usadas em um tutorial em vídeo? Verifique este tutorial: [Variáveis explicadas para não programadores (em inglês)](https://www.youtube.com/watch?v=SRfpBTgx-PY).

## Uma noção avançada: o "tempo decorrido" desde o último quadro (TimeDelta)

O jogo avalia eventos e redesenha a tela várias vezes por segundo: dizemos que o jogo é _atualizado_, _atualizada_ durante um "tick". A frequência com que isso acontece depende dos recursos do computador: um computador lento pode render 25 quadros por segundo, um rápido 60. O GDevelop geralmente pode garantir que esse valor seja o mesmo em todos os computadores. No entanto, a velocidade de algumas operações pode mudar de computador para computador, por exemplo, operações matemáticas e a renderização de movimentos.

Para tornar a velocidade das alterações constante, use a expressão _TimeDelta ()_, que retorna o tempo em segundos desde o último quadro.
Por exemplo, não faça isso:

![](/gdevelop5/tutorials/update-life-no-timedelta.png)

Mas faça isso:

![](/gdevelop5/tutorials/update-life-timedelta.png)

* O primeiro evento adiciona 20 à variável toda vez que o jogo é atualizado (ou seja, o máximo possível, até 60 vezes por segundo). **Não é correto** usar esse evento, pois a velocidade de aumento da variável não será a mesma de computador para computador: não podemos prever o valor da variável após 10 segundos, por exemplo - pois depende do número de quadros do jogo pintado.

* O segundo evento é **correto e confiável**: o número 300 é multiplicado por TimeDelta (). Assim, a variável será aumentada ao mesmo tempo em todos os computadores. Como TimeDelta () retorna um tempo em segundo, permite quantificar exatamente a quantidade: No nosso caso, a variável aumentará em 300 unidades / segundo. Assim, podemos predizer que a vida aumentará em 3000 unidades em 10 segundos - qualquer que seja o número de quadros pintados durante esse período.

** Regra geral: ** Use _TimeDelta ()_ quando desejar adicionar continuamente alguma quantia a um valor. Se a sua ação for lançada apenas uma vez (por exemplo, durante uma colisão em que você exclui o objeto), não há problema em usar um valor discreto sem o TimeDelta - pois isso não depende da velocidade do jogo.

!!! danger

    Quando você está movendo um objeto usando forças, não há necessidade de usar TimeDelta (), pois o GDevelop o usa automaticamente.

## E ... isso é quase tudo que você precisa saber

➡️ Você pode continuar lendo **[os tutoriais](/pt/gdevelop5/ tutorials)** para saber mais sobre a criação de jogos reais com o GDevelop!