# VSMonitor-Ext

VSMonitor-Ext é uma extensão para o navegador google chrome publicada e ainda ativa na web store da google, criada para realizar integração entre sistemas internos em um ambiente corporativo grande e legado, onde não existem APIs e é necessário fazer parse do html entregue, buscando e filtrando as informações, e preparar as informações para reinjetar nos sistemas.

[https://chrome.google.com/webstore/detail/vsmonitor-ext/mhdhcccejcjfanablmohbpdbepdkokkj?hl=pt-BR](https://chrome.google.com/webstore/detail/vsmonitor-ext/mhdhcccejcjfanablmohbpdbepdkokkj?hl=pt-BR)

Extensões do navegador google chrome usãm como linguagem apenas o javascript, e com algumas restrições de segurança, funções como eval, chamadas diretas no html via onlcik, entre outras, simplesmente "não rolam", na época em que foi codificada foi uma experiência de aprendizado maravilhosa.

Existem duas ideias principais no funcionamento dela
 1 - ela carrega individualmente em cada aba do navegador junto com o seu conteudo, injeta alguns codigos na pagina que leem seu HTML, coletam algumas informações, geram novos recursos (botoões e etc), e executam ações escolhidas pelo usuario, ela automatizava alguns clicks e preenchimentos de campos, e ainda reduzia drasticamente erro humano (clicar errado, selecionar errado, confirmar por engano), e se tratava de sistemas que faziam configurações em equipamentos (DSLAMs e Switches em armarios)
 
 2 - Um painel separado, em formado de uma pagina admin, onde o operador/usuário insere uma informação, e o painel automaticamente faz varias consultas HTTPs (ajax) a cerca de 8 sistemas diferentes (havia cerca de 26 sistemas em media ativos na época), efetua login em alguns sistemas, coleta dados, gera partes de relatorio para o operador, separa as informações na tela lado a lado, destaca dados importantes sobre o que está sendo feito, e ainda automatiza alguns retornos em requisições HTTPs que sempre eram necesários mas precisavam de ação humana sem a necessidade (por exemplo, após enviar as novas configurações, reiniciar o equipamento para que as novas configurações entrem em vigor, entre varias outras coisas...)  

#EDIT:
É usada até hoje dentro da Vivo, especificamente na operação da antiga GVT, porém atualmente as consultas REST a um servidorm interno que foi criado na época nao funcionam mais, o servidor foi desativado, e se não foi desativado está um tanto desatualizado, eu e minha esposa não trabalhamos mais na Vivo devido a novas oportunidades que surgiram. Algumas pessoas continuaram lá ajudando, mas com o tempo todos os conhecidos que sabiam atualizar o banco de dados saíram. alimentavamos um banco de dados com IDs de equipamentos, IDs estes que eram usados pelos operadores pra realizar configurações mais assertivas em menor tempo. 

Alguns HTMLs tambem mudaram e provavelmente quebraram alguns scripts e não temos mais acesso aos sistemas para ir evoluindo a integração.

Foi publicada em 7 de julho de 2016, chegou a ter mais de 2500 usuários simultaneos, e curiosamente em fevereiro de 2021 a quase 4 anos sem atualizações relevantes ainda tem, 349 pessoas usando algum dos recursos que ainda deve estar funcionando e valendo a pena.

<3
