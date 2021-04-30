# Projeto App-Queue


## Descrição do Projeto

<p>Aplicação web de controle de senhas para atendimento bancário. O sistema será utilizado
por dois perfis de usuários: GERENTE e CLIENTE, de acordo com os requisitos funcionais descritos abaixo.</p>


## Indice

 - <a href="##requesitos">Requisitos funcionais</a><br>
 - <a href="##rodar">Como rodar</a><br>
 - <a href="##demo">Demonstração da aplicação funcionando</a><br>
 - <a href="##autor">Sobre o autor</a><br>


## Requisitos funcionais

  - [x] Deve ser possível gerar novas senhas, que podem ser de dois tipos: NORMAL e PREFERENCIAL, com os formatos “N####” e “P####” respectivamente, onde “#” é um dígito;
  - [x] Deve ser possível acompanhar a chamada das senhas;
  - [x] O acesso ao acompanhamento e a geração de novas senhas deve ser público;
  - [x] Deve ser possível chamar a próxima senha. O sistema deve dar prioridade para as senhas PREFERENCIAIS, garantindo que nenhuma senha NORMAL seja chamada se ainda houver alguma PREFERENCIAL pendente;
  - [x] Somente o GERENTE será capaz de chamar próximas senhas;
  - [x] Deve ser possível reiniciar a contagem das senhas;
  - [x] Somente o GERENTE será capaz de reiniciar a contagem de senhas;
  - [x] Não há necessidade de login e senha para o perfil de GERENTE;
  - [x] O sistema deve garantir que a sequência de senhas não seja perdida caso o servidor precise ser reiniciado.


## Como rodar

<p>
  Para interagir com a aplicação basta acessar <a href="http://https://gerenciador-filas.herokuapp.com/">aqui</a>
</p>

<p>
  Para rodar localmente, siga os passos:<br>
  <br>
  1 - Abra um terminal;<br>
  2 - Clone o repositorio;<br>
  3 - Digite na pasta raiz do projeto: npm install;<br>
  4 - Assim que finalizar a instalação digite: npm start;<br>
  5 - Após alguns minutos uma janela do seu browser abrirá automaticamente já com a aplicação rodando;<br>
</p>


## Demonstração da aplicação funcionando

  <img alt="gif app" title="#gifApp" src="./app-queue-manager-work.gif" width="800px;" />


## Sobre o autor

<a href="https://www.linkedin.com/in/victor-mateus-ferreira/">
 <img style={border-radius: 50%} src="./Avatar.jpeg" width="200px;" alt=""/>
 <br>
 <sub><b>Vctor Mateus</b></sub>🚀</a><br>

<p>
Feito com ❤️ por Victor Mateus 👋🏽 Entre em contato!
</p>