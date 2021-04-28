# Projeto App-Queue

## Descrição do Projeto

<p>Aplicação web para gerenciar filas de acordo com os requisitos funcionais descritos abaixo</p>


## Indice
<p>
 - <a href="##requesitos">Requisitos funcionais</a><br>
 - <a href="##rodar">Como rodar</a><br>
 - <a href="##demo">Demonstração da aplicação funcionando</a><br>
 - <a href="##autor">Sobre o autor</a><br>
</p>


## Requisitos funcionais
<p>
  [x] Deve ser possível gerar novas senhas, que podem ser de dois tipos: NORMAL e
  PREFERENCIAL, com os formatos “N####” e “P####” respectivamente, onde “#” é
  um dígito;
  [x] Deve ser possível acompanhar a chamada das senhas;
  [x] O acesso ao acompanhamento e a geração de novas senhas deve ser público;
  [x] Deve ser possível chamar a próxima senha. O sistema deve dar prioridade para as
  senhas PREFERENCIAIS, garantindo que nenhuma senha NORMAL seja chamada
  se ainda houver alguma PREFERENCIAL pendente;
  [x] Somente o GERENTE será capaz de chamar próximas senhas;
  [x] Deve ser possível reiniciar a contagem das senhas;
  [x] Somente o GERENTE será capaz de reiniciar a contagem de senhas;
  [x] Não há necessidade de login e senha para o perfil de GERENTE;
  [x] O sistema deve garantir que a sequência de senhas não seja perdida caso o
  servidor precise ser reiniciado.
</p>

## Como rodar
<p>
  1 - Abra um terminal;
  2 - Clone o repositorio;
  3 - Navegue até a pasta app-queue-manager dentro do repositorio clonado;
  4 - Digite na pasta app-queue-manager: npm install;
  5 - Assim que finalizar a instalação digite: npm start;
</p>

## Demonstração da aplicação funcionando

  <img alt="gif app" title="#gifApp" src="./app-queue-manager-work.gif" width="450px;" />

## Sobre o autor

<a href="https://www.linkedin.com/in/victor-mateus-ferreira/">
 <img style="border-radius: 50%;" src="./Avatar.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Vctor Mateus</b></sub></a>🚀</a>


Feito com ❤️ por Victor Mateus 👋🏽 Entre em contato!
