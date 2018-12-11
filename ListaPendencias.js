// busca e diagnostico
 - criar uma classe padrao de busca ajax nos sites como manobra,sas,pn,cx,efika,wise,PL
   - manobraUnica, SasTDM, SasIMS, Pn, Cx, efikaParametros, wiseSagre, TotalviewEscala,PL_checklist,PL_heavyuser
 - criar um elemento escondido em algum canto para carregar o html dentro e manipular
 - ao mesmo tempo, a div que vai receber o resultado depois de filtrar fica com um loading

// Ferramentas "power":
 - ssh/telnet via browser
 - fila de retorno para sip e triple play
 - integralção total view

// Paginas/Telas
 - mecanismo de loop de seleção de tela
 - tela de entrada com overview do sistema
 - tela de atendimentos
   .. input: transfer, manobra, sas, wise
 - indicadores (buscar registrados no futuro servidor)
     

// Visual e funcionalidades
 - popup com visual da open seo stats
 - funcionalidades da insert text
 
// barra
 - trocar evento mouseover por click
 - ajustar o inject individual pra cada sistema
 - ativar funções especificas do sistema onde a barra foi carregada
 - colher checklist em manobra, sas, wise, efika
 - função de gerar checklist via ajax

//desktop:
 - instalador que joga recursos pro U, ou pasta padrão, ou appData
 - versionamento individual para update (ex. pagina de links do IE com novos links, atualizar)
 - Refazer o menosPausa, criar uma versão web, q gera comandos desk, integração com mobile
 - Iniciar o dia:
	 - Mputty
	 - Tradutor
	 - CPQD
	 - Webmail
	 - chrome:
	   * VSMonitor: links
	   * VSMonitor: ETA
	   * VSMonitor: Manobra
	   * VSMonitor: SAS
	   * VSMonitor: Wise
	   * VSMonitor: Portal IT
	 - IE: Transfer
	 - Checknote
	 - Efika
	 - TBS 2x
	 - OSP Control

	 
	 
//AJUSTAR ISSO AQUI EM CASA
Levantamentos a encaminhar pro Jorge mais tarde:
 - ajustar melhorias do gps, fluxos melhores sem cosias desnecessarias
 - gps trazer rpon de banda


 - as funcçoes de pegar textos colados, devem diferenciar se é ie ou chrome, e tomar uma ação
 - os textos podem vir de: manobra, sas, wise, efika(chrome only)
 - corrigir caracteres gps zeus (testar com storage, e testar com html do primefaces)
 - corrigir manobra massiva null, e testar dados copiados do manobra unica ie
 - checknote revisando textos de entrada (se vem mde chrome, ou de ie)
 - adiciionar portabilidade numerica, e EA
 - revisar os recursos do manobra unica q falham pra instancias especificas


POST: http://sv2kppag2/PLControl/modulos/regional/checklist/checklistbanew/GetTecOfensor.php
LoginTecnico=g0056638

POST: http://sv2kppag2/PLControl/modulos/regional/Checklist/ChecklistBAnew/getFraude.php
VlrCkFraude=4330641172	 
	 
	 
	 
// Calculando datas e horas (JavaScript)
https://msdn.microsoft.com/pt-br/library/ee532932(v=vs.94).aspx
https://www.turbosite.com.br/blog/trabalhando-com-datas-em-javascript/
http://stackoverflow.com/questions/19004950/how-to-compare-time-in-javascript
http://forum.imasters.com.br/topic/403110-resolvidocronometro/
// exemplo de document fragment, e de quebra sistema de analise de tempo
http://jsfiddle.net/chrisbenseler/RQ28C/ 


https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest
https://developer.mozilla.org/pt-BR/docs/Web/API/DocumentFragment
https://developer.mozilla.org/pt-BR/docs/AJAX/Getting_Started
https://developer.mozilla.org/pt-BR/docs/AJAX

Duvidas e tecnicas:
designada em uma porta que nao existe, qu7al fluxop fazer?

quando associa um numero de equipamento, o cx é enviado automaticamente?

tecnico disse q nao navegou e que vai dar boot, ja recrio a bridge e ajusto radius



 - criar elemento temporario
 - jogar manobra, sas, wise, efika, pn, cx, etc cada um no seu proprio elemento temporario
 - filtrar o conteudo e jogar no local storage
 - eliminar style e script para renderizar
 - popular o elemento do diagnostico (div mostrada em tela)
 - zerar o elemento depois
 - 

identificar:
 - nao assinalado no tbs no manobra e outros erros do tipo
 - bloqueios na central, dgt, bio suspensão
 - perfil rastreador e bloqueios no wise
 - verificar shasta, posteriormente comparar com binada
 - profile x velocidade sincronizada x velocidade contratada
 - autenticação
 - terceiros: buscar mac e ip no ficha limpa pelo filtro de porta e armario

quanto ao diagnostico, dava pra talvez miontar em json os itens, e mostrar com um for ou coisa assim

#document.createXxxxx, if exist element, destroy element
obs: organizar as ideias simples q dpendem de terceiro, rpon no gps, filtro de mac no ficha limpa, apis




