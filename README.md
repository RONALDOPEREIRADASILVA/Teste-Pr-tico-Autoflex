# Teste-Prático-Autoflex
Desafio Técnico MRP - Autoflex (Industrial Embalagens)
Fala pessoal! Este é o meu projeto para a vaga de Desenvolvedor Júnior na Autoflex. O objetivo foi criar um sistema de controle de produção (MRP) que ajuda a fábrica a decidir o que produzir com base no estoque disponível e no valor de mercado dos produtos.

1= O que eu usei (Stack)
Decidi focar nas tecnologias que vocês já usam na empresa para mostrar que consigo me adaptar rápido ao time:

Backend: Java com Quarkus (usei o Panache para facilitar o banco de dados).

Frontend: React com Redux Toolkit para gerenciar o estado global de forma organizada.

Banco de Dados: MySQL (os scripts de criação estão na pasta /sql).

Padrão: Todo o código, tabelas e variáveis estão em inglês, seguindo a boa prática de padrões internacionais.

2= Como eu pensei o problema
O maior desafio foi a lógica de "gargalo" . Em vez de fazer o cálculo no navegador, preferi deixar essa inteligência no Backend:

Criei um endpoint específico (/analysis) que percorre os produtos.

Para cada produto, ele olha quanto de cada matéria-prima a gente tem e quanto a receita pede.

O sistema identifica o material que vai acabar primeiro e define o limite de produção por ele.

No final, a lista já vem ordenada por Market Value, garantindo que a sugestão de produção foque no que traz mais retorno para a fábrica.

3= Organização do Código
Tentei deixar tudo o mais separado possível para facilitar a leitura:

*backend: Contém os Resources (Controllers), Models e Repositories do Quarkus.

*frontend: Estrutura de componentes React e os Slices do Redux.

*sql: Script para subir o banco de dados factory_db.

4= Como rodar aí na sua máquina
Passo= 1. Banco de Dados:
Execute o script em /sql no seu MySQL para criar as tabelas e as relações.

Passo= 2. Backend:

Bash
cd backend
./mvnw quarkus:dev
(Ele vai subir na porta 8080)

Passo= 3. Frontend:

Bash
cd frontend
npm install
npm start
(Vai abrir no seu navegador em localhost:3000)

Considerações Finais:
Ainda sou Júnior, mas foquei muito em entregar um código limpo e funcional que resolva o problema real da indústria. Estou ansioso para receber o feedback de vocês e aprender com o time da Autoflex! 