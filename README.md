<h1>Sistema de Monitoramento da Qualidade do Ar</h1>


## 📝 Sobre

Este projeto consiste em uma API desenvolvida no miniprojeto do 
Programa Programadores do Amanhã, no módulo 4 onde é ensinado sobre API's REST. A escolha do tema foi motivada pela experiência prática prévia em um projeto universitário,
onde foi desenvolvido um dispositivo de monitoramento da qualidade do ar com microcontroladores Arduino e sensores para coletar dados ambientais.

Essa API é uma versão inicial simples que pode ser aprimorada em trabalhos futuros. O objetivo principal é fornecer, no momento, 
informações importantes em relação à qualidade do ar com base em um banco de dados mocado.

## 🚫 Problematização
A qualidade do ar é um fator crucial para a saúde pública e o bem-estar ambiental. Com o aumento da urbanização e da industrialização, 
os níveis de poluição atmosférica têm se tornado uma preocupação crescente.
A má qualidade do ar pode causar diversos problemas de saúde, como doenças respiratórias e cardiovasculares, além de impactar negativamente o meio ambiente. 

Monitorar e compreender esses níveis é essencial para tomar medidas preventivas e corretivas. 
No entanto, coletar, processar e disponibilizar dados de qualidade do ar de forma eficiente e acessível apresenta um desafio significativo.

## 💡 Solução
A API servirá como uma interface de acesso a dados ambientais, permitindo que desenvolvedores e pesquisadores obtenham informações precisas e em tempo real sobre a qualidade do ar em diferentes regiões.
Embora, nesta versão inicial, utilizando dados simulados, ela serve para:

- Classificação da Qualidade do Ar: Classifica a qualidade do ar em quatro categorias: Bom, Moderado, Ruim e Muito Ruim, usando dados simulados.

- Acesso a Dados Ambientais: Proporciona acesso estruturado a dados simulados sobre a qualidade do ar, útil para testes e desenvolvimento.

- Interface para Desenvolvedores e Pesquisadores: Oferece uma base para integração e teste de funcionalidades relacionadas à qualidade do ar, facilitando o desenvolvimento e a pesquisa.

### 📜 Algumas informações importantes para melhor entendimento

- O que é API?
    API é Interface de Programação de Aplicações. Utilizando a analogia do garçom, API leva pedidos de um aplicativo a um serviço e traz as respostas de volta. Ela facilita a comunicação entre diferentes sistemas, permitindo que eles troquem informações sem precisar saber exatamente como funcionam por dentro.

- O que é API's REST?
    APIs REST (Representational State Transfer) são um tipo específico de API que segue um conjunto de princípios e regras para a troca de informações entre sistemas.

- Métodos HTTP
    - GET: Recuperar dados de um servidor.
    - POST:  Enviar dados para o servidor para criar um novo recurso.
    - PATCH: Atualizar parcialmente(modificação de apenas dado) um recurso existente
    - PUT: Atualizar completamente(modifica mais de um dado) um recurso existente no servidor.
    - DELETE: Remover um recurso do servidor.

- Status de resposta HTTP
    - 1xx - Informativo
    - 2xx - Sucesso
    - 3xx - Redirecionamento
    - 4xx - Erro do Cliente
    - 5xx - Erro do Servidor:
Irei explicar sobre o 2xx, que foi utilizado na aplicação.

- Status 2xx
    - 200 OK: A solicitação foi bem-sucedida e o servidor retornou os dados solicitados. Bastante utilizado.
    - 201 Created: A solicitação foi bem-sucedida e um novo recurso foi criado. Usado principalmente no post.
    - 204 No Content: A solicitação foi bem-sucedida, mas não há conteúdo para retornar. Usado mais no delete.

- Padrão MVC
    - Model (Modelo): Representa a lógica de negócios e os dados da aplicação.
    - View (Visão): Representa a interface do usuário e a forma como os dados são apresentados.
    - Controller (Controlador): Atua como intermediário entre o Modelo e a Visão, ele decide como a aplicação deve responder a certas ações.

- O que é módulos ES6?
    - É uma separação de código por módulos no contexto do ES6 (ECMAScript 2015) refere-se ao uso do sistema de módulos introduzido nessa versão do JavaScript para organizar e estruturar o código de forma mais eficiente, ou seja, seu código é um grande quebra-cabeça. Em vez de tentar montar tudo de uma vez, você divide o quebra-cabeça em peças menores. Cada peça (ou módulo) é responsável por uma parte específica do código.
  - Na aplicação, foi utilizado o padrão MVC(Model - View - Controller)
  -  No contexto de módulos ES6, cada componente do MVC pode ser implementado como um módulo separado, facilitando a organização e a manutenção do código
  -  Com a divisão do código em arquivos separados é necessário os importe ou exporte.
  -  Exportar é como dizer: "Eu estou oferecendo esta peça do quebra-cabeça para quem precisar dela."
  -  Importar é como dizer: "Eu preciso desta peça do quebra-cabeça para completar minha montagem."

## ⚙ Funcionalidades das rotas

<div align = "center"> 
  <h3>Criar novo usuário(post)</h3>
  <img src = "https://github.com/user-attachments/assets/0b697c07-6cc3-481f-bc44-69c504566789"  width = "600px">
  <p>Se observar os parâmetros usados, nota-se que não tem o id, pois é utilizado a biblioteca uuidv4() para a geração automática do identificador</p>
 
  <h3>Busca todos os dispositivos (get)</h3>
  <img src = "https://github.com/user-attachments/assets/ac92d794-d679-4b55-bee4-183c70af4f20" width = "600px">

  
  <h3>Busca qualidade do ar boa ou moderada (get)</h3>
  <img src = "https://github.com/user-attachments/assets/7060b353-e3db-4669-93b0-038eb4a35acb" width = "600px">
  <p>Ele irá buscar todos os dispositivos que o Indíce da Qualidade do Ar(IQA) seja "Good" ou "Moderate"</p>

  <h3>Busca de dispositivo por id (get)</h3>
  <img src = "https://github.com/user-attachments/assets/ffefced5-2584-4216-91ed-2671c5a17e5e" width = "600px">
  <p>Usa o const { id } =  req.params; para pegar o id que foi passado na url</p>

<h3>Busca por um sensor específico (get)</h3>
<img src = "https://github.com/user-attachments/assets/27c62c7f-d003-4085-b22e-7593007dda6e" width = "600px">
 <p>Usa o const { sensors } =  req.params; para pegar um sensor que foi passado na url</p>

<h3>Busca por estado da localização (get)</h3>
<img src = "https://github.com/user-attachments/assets/404bb5c4-ed8f-4f25-8151-248d4f5ce3a8" width = "600px">
<p>Irá mostrar todos os dispositivos localizado em um determinado estado, a nomenclatura para localizar deve esta em caixa alta ou da forma que estiver no array do sistema</p>

<h3>Edita o status do dispositivo (patch)</h3>
<img src = "https://github.com/user-attachments/assets/177a5f36-66b9-41a1-af7c-1e00a05761b3" width = "600px">
<p>Ele irá editar somente o status do dispositivo com id correspondente, as alterações podem ser somente "Active" ou "Inactive"</p>

<h3>Deleta o dispositivo inativo (delete)</h3>
<img src = "https://github.com/user-attachments/assets/6cc79e6b-101e-4ff6-924d-caf57818c4cf" width = "600">
<p>Deleta somente os dispositivos do id correspondente que tenha o status "Inactive"</p>
</div>

## 📥 Instalações

Instalações que foram feitas para rodar a aplicação.

- Inicializar um projeto Node.js
  ```
     npm init -y
- Instalar o framework Express
  ```
      npm i express
- Instalar um pacote específico para gerar UUIDs (Universally Unique Identifiers) versão 4
  ```
      npm i uuidv4
- Instalar o nodemon, que reinicia automaticamente o servidor quando alterações do código são detectadas
  ```
      npm i nodemon

### 🔄 Modificações no package.json

- Adicionar:
    ```
  "type": "module"

- Adicionar atalho para rodar (opcional): o nome você escolhe, normalmente é usado start ou dev
   ```
   "dev": "nodemon src/server.js"

### 💻 Como rodar?

- Abra o terminal
- Verifica se esta na pasta certa
- Coloque o que você definiu no package.json, no meu caso foi dev, então coloca no terminal dessa forma:
  ```
  npm run dev
- Pronto, agora é só testar

### 🧪 Alguns testes

 Para realizar os testes foi utilizado o Insomnia, que é uma ferramenta de cliente HTTP avançada que facilita o desenvolvimento, teste e depuração de APIs. 
 
<div align = "center">
 <h3>Busca todos - searchDevice</h3>
 <img src = "https://github.com/user-attachments/assets/f59d1260-3d46-4943-a564-361da652dfd0" width = "600px">

URL usada: 
 ```
        http://localhost:3000/searchDevice
```
</div>

<div align = "center">
     <h3>Cria novo usuário - newUser</h3>
<img src = "https://github.com/user-attachments/assets/45f1eae7-1350-4710-89b1-6ea5cb537650" width = "600px">
Colocar os valores dos dados no formato Json, pelo Body, antes de enviar na url
    
URL usada: 
```    
    http://localhost:3000/newUser
```
</div>

<div align = "center">
     <h3>Modifica status somente em "Active" ou "Inactive" por id - updateStatus</h3>
<img src = "https://github.com/user-attachments/assets/ebb2a388-5126-4a63-afc8-f7bb77a6f6c6"  width = "600px">

URL usada: 
```    
    http://localhost:3000/updateStatus/(colocar o id desejado)
```
</div>

<div align = "center">
     <h3>Deleta dispositivo inativo por id - deleteStatus</h3>
<img src = "https://github.com/user-attachments/assets/3b6f3030-4e64-4297-be68-6103ae9177cb" width = "600px">

URL usada: 
```    
    http://localhost:3000/deleteStatus/(colocar o id desejado que tenha o status "Inactive")
```
</div>
