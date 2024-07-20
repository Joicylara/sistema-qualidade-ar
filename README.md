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

## ⚙ Funcionalidades

<div align = "center"> 
  <h3>Criar novo usuário(post)</h3>
  <img src = "https://github.com/user-attachments/assets/0b697c07-6cc3-481f-bc44-69c504566789"  width = "600px">
  <p>Se observar os parâmetros usados, nota-se que não tem o id, pois é utilizado a biblioteca uuidv4() para a geração automática do identificador</p>
 
  <h3>Busca todos os dispositivos (get)</h3>
  <img src = "https://github.com/user-attachments/assets/ac92d794-d679-4b55-bee4-183c70af4f20"width = "600px">

  
  <h3>Busca qualidade do ar boa ou moderada (get)</h3>
  <img src = "https://github.com/user-attachments/assets/7060b353-e3db-4669-93b0-038eb4a35acb"width = "600px">
  <p>Ele irá buscar todos os dispositivos que o Indíce da Qualidade do Ar(IQA) seja "Good" ou "Moderate"</p>
  
</div>
