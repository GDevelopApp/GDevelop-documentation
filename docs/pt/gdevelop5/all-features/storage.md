---
title: 
---
##Armazenamento

Jogos podem guardar informações, como o progresso do jogador. Veja [este guia](/gdevelop5/tutorials/storage-action-explained) para explicações mais detalhadas e exemplos.

!!! note

    A ação de Armazenamento irá armazenar todos os dados dentro  do **internal storage (Armazenamento Interno)** (gravado após o jogo ser fechado). Se você quiser escrever ou ler a partir de arquivos, leia [a pagina sobre Sistema de Arquivos](/gdevelop5/all-features/filesystem) (somente para Windows, macOS, Linux).

## Limpe o armazenamento durante o preview

A informação e armazenada permanentemente no armazenamento interno da janela de preview, que é persistido entre os previwes e mesmo depois do GDevelop ser fechado(com em um jogo exportado). 

Quando fazemos o preview do nosso jogo pode ser algo útil conseguir fazer o reset dos dados, como se fosse a primeira vez que o jogo é rodado. Para fazer isso, você pode limpar o Armazenamento:

  - Na barra superior da janela de preview selecione **Visualizar** -> **Exibir ferramentas de desenvolvedor**.
  - As ferramentos de desenvolvedor geralmente abrem a aba 'Console' selecionada mostrando algumas mensagens.
  - Clique na aba '**Aplicação**'. Esta pode não estar visível dependendo do tamanho da sua janela de preview. Você pode redimensionar a janela de preview até que consiga ver a aba 'Aplicação' no topo.
  - Após você ter selecionado a aba 'Aplicação', você pode achar os dados armazenados do lado esquerdo em **Storage** -> **Local Storage** -> **file:**  
  - Se você clicar no 'file:' com o botão esquerdo do mouse, você pode ver mais detalhes sobre os dados armazenados.
  - Para limpar os dados, clique em 'file:' com o botão direito do mouse e escolha '**Clear**'

Você pode agora fechar a janela de preview. Quando rodar o preview novamente, os dados armazenados terão sido eliminados.
